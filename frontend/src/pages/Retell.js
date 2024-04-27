import React, { useEffect, useState } from "react";
import { RetellWebClient } from "retell-client-js-sdk";

const agentId = "06398d28edf4c9a4203924c8a32d4a5b";

const webClient = new RetellWebClient();

const App = () => {
    const [isCalling, setIsCalling] = useState(false);

    // Initialize the SDK
    useEffect(() => {
        // Setup event listeners
        webClient.on("conversationStarted", () => {
            console.log("conversationStarted");
        });

        webClient.on("audio", (audio) => {
            console.log("There is audio");
        });

        webClient.on("conversationEnded", ({ code, reason }) => {
            console.log("Closed with code:", code, ", reason:", reason);
            setIsCalling(false); // Update button to "Start" when conversation ends
        });

        webClient.on("error", (error) => {
            console.error("An error occurred:", error);
            setIsCalling(false); // Update button to "Start" in case of error
        });

        webClient.on("update", (update) => {
            // Print live transcript as needed
            console.log("update", update);
        });
    }, []);

    const toggleConversation = async () => {
        // const registerCallResponse = await registerCall(agentId);
        // console.log(registerCallResponse);
        // console.log(registerCallResponse.call_id);

        // webClient
        //     .startConversation({
        //         callId: registerCallResponse.call_id,
        //         sampleRate: registerCallResponse.sample_rate,
        //         enableUpdate: true,
        //     })
        //     .catch(console.error);
        if (isCalling) {
            webClient.stopConversation();
        } else {
            const registerCallResponse = await registerCall(agentId);
            if (registerCallResponse.call_id) {
                webClient
                    .startConversation({
                        callId: registerCallResponse.call_id,
                        sampleRate: registerCallResponse.sample_rate,
                        enableUpdate: true,
                    })
                    .catch(console.error);
                setIsCalling(true); // Update button to "Stop" when conversation starts
            }
        }
    };

    async function registerCall(agentId) {
        try {
            // Replace with your server url
            const response = await fetch(
                "http://localhost:8080/register-call-on-your-server/",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        agent_id: "06398d28edf4c9a4203924c8a32d4a5b",
                    }),
                }
            );

            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }

            const data = await response.json();
            return data;
        } catch (err) {
            console.log(err);
            throw new Error(err);
        }
    }

    return (
        <div className="App">
            <header className="App-header">
                <button onClick={toggleConversation}>
                    {isCalling ? "Stop" : "Start"}
                </button>
            </header>
        </div>
    );
};

export default App;
