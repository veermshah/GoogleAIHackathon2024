import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
    return (
        <>
            <header className="fixed bottom-0 left-0 w-full bg-pink-200 text-white p-4 shadow-md">
                <nav className="flex justify-left space-x-3">
                    <Link to="/home" className={`text-white px-3 py-2 rounded-lg`}>
                        <img
                            src={"home.jpg"}
                            alt="Home"
                            className="h-30 w-30 object-cover"
                        />
                    </Link>
                    <Link
                        to="/support"
                        className={`text-white px-3 py-2 rounded-lg font-bold text-xl `}
                    >
                        <img
                            src={"support.jpg"}
                            alt="Support"
                            className="h-30 w-30 object-cover"
                        />
                    </Link>
                    <Link to="/health" className={`text-white px-3 py-2 rounded-lg`}>
                        <img
                            src={"bandaid.jpg"}
                            alt="Health"
                            className="h-30 w-30 object-cover"
                        />
                    </Link>
                    <Link to="/settings" className={`text-white px-3 py-2 rounded-lg`}>
                        <img
                            src={"settings.jpg"}
                            alt="Settings"
                            className="h-30 w-30 object-cover"
                        />
                    </Link>
                    <div style={{ width: "600px" }}></div> {/* Spacer */}
                </nav>
            </header>
        </>
    );
}