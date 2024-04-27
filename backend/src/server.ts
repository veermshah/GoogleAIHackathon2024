import express, { Request, Response } from "express";
import expressWs from "express-ws";
import { RawData, WebSocket } from "ws";
import { createServer, Server as HTTPServer } from "http";
import cors from "cors";
import { Retell } from "retell-sdk";
import { RegisterCallResponse } from "retell-sdk/resources/call";
import { CustomLlmRequest, CustomLlmResponse } from "./types";
// Any one of these following LLM clients can be used to generate responses.
//import { DemoLlmClient } from "./llms/llm_azure_openai";
// import { FunctionCallingLlmClient } from "./llms/llm_azure_openai_func_call_end_call";
// import { FunctionCallingLlmClient } from "./llms/llm_azure_openai_func_call";
// import { FunctionCallingLlmClient } from "./llms/llm_openai_func_call";
import { DemoLlmClient } from "./llms/llm_openai";


export class Server {
  private httpServer: HTTPServer;
  public app: expressWs.Application;
  private retellClient: Retell;

  constructor() {
    this.app = expressWs(express()).app;
    this.httpServer = createServer(this.app);
    this.app.use(express.json());
    this.app.use(cors());
    this.app.use(express.urlencoded({ extended: true }));

    // Instantiate the Retell client with the API key
    this.retellClient = new Retell({
      apiKey: "23cca5c1-1ab8-4d23-bf5b-5357e33720c1",
    });

    this.handleRetellLlmWebSocket();
    this.handleRegisterCallAPI();
    this.handleWebhook();

    // If you want to create an outbound call with your number
    // this.twilioClient.CreatePhoneCall(
    //   "+14157122917",
    //   "+14157122912",
    //   "68978b1c29f5ff9c7d7e07e61124d0bb",
    // );
  }

  listen(port: number): void {
    this.app.listen(port);
    console.log("Listening on " + port);
  }

  /* Handle webhook from Retell server. This is used to receive events from Retell server.
     Including call_started, call_ended, call_analyzed */
  handleWebhook() {
    this.app.post("/webhook", (req: Request, res: Response) => {
      if (
        !Retell.verify(
          JSON.stringify(req.body),
          process.env.RETELL_API_KEY,
          req.headers["x-retell-signature"] as string,
        )
      ) {
        console.error("Invalid signature");
        return;
      }
      const event = req.body;
      switch (event.type) {
        // Your event handling logic goes here
        default:
          console.log("Received an unknown event:", event.type);
      }
      // Acknowledge the receipt of the event
      res.json({ received: true });
    });
  }

  /* Only used for web call frontend to register call so that frontend don't need api key.
     If you are using Retell through phone call, you don't need this API. Because
     this.twilioClient.ListenTwilioVoiceWebhook() will include register-call in its function. */
  handleRegisterCallAPI() {
    this.app.post(
      "/register-call-on-your-server",
      async (req: Request, res: Response) => {
        // Extract agentId from request body; apiKey should be securely stored and not passed from the client
        const { agent_id } = req.body;

        try {
          const callResponse: RegisterCallResponse =
            await this.retellClient.call.register({
              agent_id: agent_id,
              audio_websocket_protocol: "web",
              audio_encoding: "s16le",
              sample_rate: 24000,
            });
          // Send back the successful response to the client
          res.json(callResponse);
        } catch (error) {
          console.error("Error registering call:", error);
          // Send an error response back to the client
          res.status(500).json({ error: "Failed to register call" });
        }
      },
    );
  }

  /* Start a websocket server to exchange text input and output with Retell server. Retell server 
     will send over transcriptions and other information. This server here will be responsible for
     generating responses with LLM and send back to Retell server.*/
  handleRetellLlmWebSocket() {
    this.app.ws(
      "/llm-websocket/:call_id",
      async (ws: WebSocket, req: Request) => {
        try {
          const callId = req.params.call_id;
          console.log("Handle llm ws for: ", callId);

          // Send config to Retell server
          const config: CustomLlmResponse = {
            response_type: "config",
            config: {
              auto_reconnect: true,
              call_details: true,
            },
          };
          ws.send(JSON.stringify(config));

          // Start sending the begin message to signal the client is ready.
          const llmClient = new DemoLlmClient();

          ws.on("error", (err) => {
            console.error("Error received in LLM websocket client: ", err);
          });
          ws.on("close", (err) => {
            console.error("Closing llm ws for: ", callId);
          });

          ws.on("message", async (data: RawData, isBinary: boolean) => {
            if (isBinary) {
              console.error("Got binary message instead of text in websocket.");
              ws.close(1007, "Cannot find corresponding Retell LLM.");
            }
            const request: CustomLlmRequest = JSON.parse(data.toString());

            // There are 5 types of interaction_type: call_details, ping_pong, update_only, response_required, and reminder_required.
            // Not all of them need to be handled, only response_required and reminder_required.
            if (request.interaction_type === "call_details") {
              // print call details
              console.log("call details: ", request.call);
              // Send begin message to start the conversation
              llmClient.BeginMessage(ws);
            } else if (
              request.interaction_type === "reminder_required" ||
              request.interaction_type === "response_required"
            ) {
              console.clear();
              console.log("req", request);
              llmClient.DraftResponse(request, ws);
            } else if (request.interaction_type === "ping_pong") {
              let pingpongResponse: CustomLlmResponse = {
                response_type: "ping_pong",
                timestamp: request.timestamp,
              };
              ws.send(JSON.stringify(pingpongResponse));
            } else if (request.interaction_type === "update_only") {
              // process live transcript update if needed
            }
          });
        } catch (err) {
          console.error("Encountered error:", err);
          ws.close(1011, "Encountered error: " + err);
        }
      },
    );
  }
}
