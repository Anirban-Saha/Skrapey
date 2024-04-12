"use client";

import { useState } from "react";
import axios from "axios";

export default function Page() {
  const [url, setUrl] = useState("");
  const [htmlContent, setHtmlContent] = useState("");

  const fetchData = async () => {
    try {
      const response = await axios.post("/api/scrape", { url }); // Send URL in the request body using axios
      setHtmlContent(response.data); // Assuming the backend returns scraped HTML data
    } catch (error) {
      console.error("Error fetching data:", error);
      setHtmlContent("Failed to fetch data. Check the console for details."); // Inform user about error
    }
  };

  return (
    <div className="bg-gray-950 max-h-screen max-w-full p-10 ">
      <div className="flex flex-col space-y-4">
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter URL"
          className="rounded-md border pb-3 bg-gray-800 text-white border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <button
          onClick={fetchData}
          className="inline-flex items-center px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Fetch Data
        </button>
      </div>
      <div className="mt-6">
        <h2 className="pb-2">HTML Content:</h2>
        <textarea className="rounded-md text-wrap bg-gray-800  p-4 w-full min-h-screen text-white" value={htmlContent} />
      </div>
    </div>
  );
}
