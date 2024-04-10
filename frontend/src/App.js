import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/About" element={<About />} />
                </Routes>
            </BrowserRouter>
        </div>
  );
}

export default App;