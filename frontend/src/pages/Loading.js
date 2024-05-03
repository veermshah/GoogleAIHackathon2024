import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Loading = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            // Redirect to another page after 3 seconds
            navigate("/Home");
        }, 3000); // 3000 milliseconds = 3 seconds

        return () => clearTimeout(timer); // Clean up the timer to prevent memory leaks
    }, [navigate]); // Ensure the effect runs only once

    return (
        <div className="flex items-center justify-center h-screen bg-white">
            <div className="w-40">
                <img src="/loading.gif" alt="Loading" className="w-full" />
            </div>
        </div>
    );
};

export default Loading;
