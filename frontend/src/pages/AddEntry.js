import React, { useState, useEffect } from "react";
import BottomNav from "../components/BottomNav";

const AddEntry = () => {
    // Get current date
    const currentDate = new Date().toLocaleDateString();

    // State to hold the diary entry text
    const [entryText, setEntryText] = useState("");
    const [pastEntries, setPastEntries] = useState([]);

    useEffect(() => {
        // Load past entries from localStorage on component mount
        const storedEntries =
            JSON.parse(localStorage.getItem("diaryEntries")) || [];
        setPastEntries(storedEntries);
    }, []);

    // Function to handle changes in the text area
    const handleTextChange = (event) => {
        setEntryText(event.target.value);
    };

    // Function to handle saving the diary entry
    const saveEntry = () => {
        // Add the new entry to the past entries list
        const newEntry = { date: currentDate, text: entryText };
        const updatedEntries = [...pastEntries, newEntry];

        // Save the updated entries to localStorage
        localStorage.setItem("diaryEntries", JSON.stringify(updatedEntries));

        // Update state
        setPastEntries(updatedEntries);

        // Clear the text area after saving
        setEntryText("");
    };

    // Function to handle deleting a past entry
    const deleteEntry = (index) => {
        // Remove the entry at the specified index
        const updatedEntries = pastEntries.filter((_, i) => i !== index);

        // Save the updated entries to localStorage
        localStorage.setItem("diaryEntries", JSON.stringify(updatedEntries));

        // Update state
        setPastEntries(updatedEntries);
    };

    return (
        <div className="bg-white flex items-center justify-center h-full">
            <div className="container mx-auto p-4">
                <div className="h-10"></div>

                {/* Date */}
                <div className="text-lg font-bold mb-4">{currentDate}</div>

                {/* Entry prompt */}
                <div className="text-xl mb-4">What's on Your Mind Today?</div>

                {/* Text area for diary entry */}
                <textarea
                    className="w-full h-64 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    placeholder="Write your diary entry here..."
                    value={entryText}
                    onChange={handleTextChange}
                ></textarea>

                {/* Save button */}
                <button
                    className="mt-4 bg-black hover:bg-green-400 text-white font-bold py-2 px-4 rounded"
                    onClick={saveEntry}
                >
                    Add Entry
                </button>

                {/* Display past entries */}
                <div className="mt-8">
                    <h2 className="text-xl font-bold mb-4">Past Entries:</h2>
                    {pastEntries.map((entry, index) => (
                        <div key={index} className="mb-4 text-left"> {/* Added text-left class */}
                            <div className="flex justify-between items-center">
                                <div>
                                    <div className="text-lg font-bold">
                                        {entry.date}
                                    </div>
                                    <div>{entry.text}</div>
                                </div>
                                <button
                                    className="text-red-500 font-bold"
                                    onClick={() => deleteEntry(index)}
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="bg-white h-80"></div>

                <BottomNav value={1}/>
            </div>
        </div>
    );
};

export default AddEntry;
