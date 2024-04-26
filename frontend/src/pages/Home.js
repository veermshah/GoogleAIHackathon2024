import React, {useEffect} from "react";
import "../App.css";
import NavBar from "../components/NavBar"
import BottomNav from "../components/BottomNav"
import TopBar from "../components/TopBar"
import Spline from '@splinetool/react-spline';
import Fab from '@mui/material/Fab';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import { RetellWebClient } from "retell-client-js-sdk";

const sdk = new RetellWebClient();

export default function Home() {

  useEffect(()=>{
    // first we need to create a phone call
    // https://docs.retellai.com/api-references/create-phone-call
    // sdk.startConversation({
    //   callId: registerCallResponse.call_id,
    //   sampleRate: registerCallResponse.sample_rate,
    //   enableUpdate: true, // (Optional) You want to receive the update event such as transcript
    //    // (Optional) You can use your own MediaStream which might use a different mic
    // });
  },[])

  return (
    <div id="home-page">
      <TopBar/>
      <Spline id="spline" scene="https://prod.spline.design/T7snCH2ksfMnyUZf/scene.splinecode" />
      <div className="controls">
        <Fab color="primary" aria-label="add">
          <KeyboardVoiceIcon />
        </Fab>
      </div>
      <BottomNav/>
    </div>
  );
}