import React from "react";
import "../App.css";
import NavBar from "../components/NavBar"
import BottomNav from "../components/BottomNav"

export default function Home() {
    return (
      <div id="home-page" style={{marginTop:'40px',justifyContent:'space-around',display:'flex',flexWrap:'wrap', width:'90%', margin:'auto'}}>
        {/* <NavBar /> */}
        <h1 className="text-3xl font-bold underline">
          Doctor Gemini
        </h1>
        <BottomNav/>
      </div>
    );
}