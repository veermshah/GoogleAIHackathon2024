import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function Profile() {
    const navigate = useNavigate();

    const [profile, setProfile] = useState({
        firstName: "",
        age: "",
        height: "",
        weight: "",
        bloodType: "",
        mentalIllnesses: "",
        healthcareProvider: "",
        profilePicture: "",
    });

    // Load profile data from local storage on component mount
    useEffect(() => {
        const savedProfile = JSON.parse(localStorage.getItem("profile"));
        if (savedProfile) {
            setProfile(savedProfile);
        }
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfile((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const saveProfile = () => {
        // Save profile data to local storage
        localStorage.setItem("profile", JSON.stringify(profile));
        console.log("Saving profile:", profile);
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
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            First Name
                        </label>
                        <input
                            type="text"
                            name="firstName"
                            value={profile.firstName}
                            onChange={handleChange}
                            placeholder={localStorage.getItem("firstNamePlaceholder") || "First Name"}
                            className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Height
                        </label>
                        <input
                            type="text"
                            name="height"
                            value={profile.height}
                            onChange={handleChange}
                            placeholder={localStorage.getItem("heightPlaceholder") || "Height"}
                            className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Weight
                        </label>
                        <input
                            type="text"
                            name="weight"
                            value={profile.weight}
                            onChange={handleChange}
                            placeholder={localStorage.getItem("weightPlaceholder") || "Weight"}
                            className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Mental Illnesses
                        </label>
                        <input
                            type="text"
                            name="mentalIllnesses"
                            value={profile.mentalIllnesses}
                            onChange={handleChange}
                            placeholder={localStorage.getItem("mentalIllnessesPlaceholder") || "Mental Illnesses"}
                            className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Blood Type
                        </label>
                        <input
                            type="text"
                            name="bloodType"
                            value={profile.bloodType}
                            onChange={handleChange}
                            placeholder={localStorage.getItem("bloodTypePlaceholder") || "Blood Type"}
                            className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                    <div>
                        <button
                            onClick={saveProfile}
                            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                        >
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
