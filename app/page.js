// page.js
"use client"

import { useState } from 'react';
import axios from 'axios'; 

export default function Page() {
  const [url, setUrl] = useState('');
  const [htmlContent, setHtmlContent] = useState('');

  const fetchData = async () => {
    try {
      const response = await axios.post('/api/scrape', { url }); // Send URL in the request body using axios
      setHtmlContent(response.data); // Assuming the backend returns scraped HTML data
    } catch (error) {
      console.error('Error fetching data:', error);
      setHtmlContent('Failed to fetch data. Check the console for details.'); // Inform user about error
    }
  };

  return (
    <div>
      <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Enter URL"
        className='text-red-800'
      />
      <button onClick={fetchData}>Fetch Data</button>
      <div>
        <h2>HTML Content:</h2>
        <pre>{htmlContent}</pre>
      </div>
    </div>
  );
}
