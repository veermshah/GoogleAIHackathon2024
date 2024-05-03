import React, { useEffect, useState } from "react";
import "../App.css";
import NavBar from "../components/NavBar";
import BottomNav from "../components/BottomNav";
import TopBar from "../components/TopBar";
import Spline from "@splinetool/react-spline";
import Fab from "@mui/material/Fab";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import { RetellWebClient } from "retell-client-js-sdk";

const agentId = "5ef761bf45d22ab2ac6fbc76781346fd";
const apiKey = "23cca5c1-1ab8-4d23-bf5b-5357e33720c1";

const webClient = new RetellWebClient();

export default function Home() {
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
                        agent_id: "5ef761bf45d22ab2ac6fbc76781346fd",
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
        <div id="home-page" className="">
            <TopBar />
            <Spline
                id="spline"
                scene="https://prod.spline.design/T7snCH2ksfMnyUZf/scene.splinecode"
                className="controls"
            />
            <div className="controls">
                <Fab color="primary" aria-label="add">
                    <KeyboardVoiceIcon onClick={toggleConversation} />
                </Fab>
            </div>
            <BottomNav value={0} />
        </div>
    );
}
