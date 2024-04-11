import React from "react";
import "../App.css";
import NavBar from "../components/NavBar"

export default function Home() {
    return (
      <div style={{marginTop:'40px',justifyContent:'space-around',display:'flex',flexWrap:'wrap', width:'90%', margin:'auto'}}>
        <NavBar />
        <h1 className="text-3xl font-bold underline">
          Doctor Gemini
        </h1>
  
      </div>
    );
}