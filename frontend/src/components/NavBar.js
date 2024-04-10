import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
    return (
        <>
            <header className="bg-blue-500 p-4">
                <nav className="flex justify-left space-x-4">
                    <Link to="/">
                        <img
                            src={"logo.png"}
                            alt="Charity Clarity Logo"
                            className="h-12"
                        />
                    </Link>
                    <Link
                        to="/"
                        className={`text-white px-4 py-2 rounded-lg font-bold text-xl `}
                    >
                        Charity Clarity
                    </Link>
                    <Link
                        to="/donate"
                        className={`${
                            props.active === "donate"
                                ? "bg-white text-blue-500"
                                : "text-white"
                        } px-4 py-2 rounded-full font-bold text-xl hover:bg-white hover:text-blue-500`}
                    >
                        Donate
                    </Link>
                    <Link
                        to="/contributions"
                        className={` ${
                            props.active === "contributions"
                                ? "bg-white text-blue-500"
                                : "text-white"
                        } px-4 py-2 rounded-full font-bold text-xl hover:bg-white hover:text-blue-500`}
                    >
                        Contributions
                    </Link>
                    <Link
                        to="/impact"
                        className={` ${
                            props.active === "impact"
                                ? "bg-white text-blue-500"
                                : "text-white"
                        } px-4 py-2 rounded-full font-bold text-xl hover:bg-white hover:text-blue-500`}
                    >
                        Impact
                    </Link>
                    <div style={{ width: "600px" }}></div> {/* Spacer */}
                </nav>
            </header>
        </>
    );
}