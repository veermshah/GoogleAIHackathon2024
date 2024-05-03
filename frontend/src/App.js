import { BrowserRouter, Routes, Route } from "react-router-dom";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { useEffect, useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import AddEntry from "./pages/AddEntry";
import Loading from "./pages/Loading";
import Profile from "./pages/Profile";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Loading />} />
                    <Route path="/Home" element={<Home />} />
                    <Route path="/About" element={<About />} />
                    <Route path="/Login" element={<Login />} />
                    <Route path="/AddEntry" element={<AddEntry />} />
                    <Route path="/Profile" element={<Profile />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
