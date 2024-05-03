import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function Login() {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isLoginButtonActive, setIsLoginButtonActive] = useState(false);
    const [isRegisterButtonActive, setIsRegisterButtonActive] = useState(false);

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleLoginClick = () => {
        navigate("/Home");
        console.log(
            "Logging in with username:",
            username,
            "and password:",
            password
        );
    };

    const handleRegisterClick = () => {
        navigate("/");
        console.log(
            "Registering with username:",
            username,
            "and password:",
            password
        );
    };

    return (
        <div className="">
            {/* White rectangle */}
            <div className="absolute top-0 left-0 w-full h-35 bg-white"></div>
            {/* Arrow button */}
            <div className="absolute flex justify-left p-4 z-10">
                <button
                    onClick={() => navigate("/Home")}
                    className="bg-transparent p-2 rounded-full"
                >
                    <ArrowBackIcon style={{ color: "black" }} />
                </button>
            </div>
            <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8">
                    <div className="flex items-center mb-4">
                        <h2 className="text-3xl font-extrabold text-gray-900">
                            Login/Register Here
                        </h2>
                    </div>
                    <form
                        className="mt-8 space-y-6"
                        onSubmit={(e) => e.preventDefault()}
                    >
                        <input
                            type="hidden"
                            name="remember"
                            defaultValue="true"
                        />
                        <div className="rounded-md shadow-sm -space-y-px">
                            <div>
                                <label htmlFor="username" className="sr-only">
                                    Username
                                </label>
                                <input
                                    id="username"
                                    name="username"
                                    type="text"
                                    autoComplete="username"
                                    required
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Username"
                                    value={username}
                                    onChange={handleUsernameChange}
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="sr-only">
                                    Password
                                </label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Password"
                                    value={password}
                                    onChange={handlePasswordChange}
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    id="remember-me"
                                    name="remember-me"
                                    type="checkbox"
                                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                                />
                                <label
                                    htmlFor="remember-me"
                                    className="ml-2 block text-sm text-gray-900"
                                >
                                    Remember me
                                </label>
                            </div>

                            <div className="text-sm">
                                <a
                                    href="#"
                                    className="font-medium text-green-400 hover:text-black"
                                >
                                    Forgot your password?
                                </a>
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
                                    isLoginButtonActive
                                        ? "bg-black hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                                        : "bg-black hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                                }`}
                                onClick={handleLoginClick}
                                onMouseEnter={() =>
                                    setIsLoginButtonActive(true)
                                }
                                onMouseLeave={() =>
                                    setIsLoginButtonActive(false)
                                }
                            >
                                Log in
                            </button>
                            <button
                                type="submit"
                                className={`mt-2 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
                                    isRegisterButtonActive
                                        ? "bg-black hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                        : "bg-black hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                }`}
                                onClick={handleRegisterClick}
                                onMouseEnter={() =>
                                    setIsRegisterButtonActive(true)
                                }
                                onMouseLeave={() =>
                                    setIsRegisterButtonActive(false)
                                }
                            >
                                Register
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
