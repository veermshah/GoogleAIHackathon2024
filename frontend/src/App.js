import { BrowserRouter, Routes, Route } from "react-router-dom";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Retell from "./pages/Retell";
import { useEffect, useState } from "react";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Retell" element={<Retell />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
