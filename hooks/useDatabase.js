// Assuming this is in a file like 'utils/useDatabase.js' or 'lib/useDatabase.js'
// Make sure the path is correct in AddNewProjectModal.js import

const BASE_URL = "https://projects-api-three.vercel.app/DBMS";
const API_KEY = process.env.NEXT_PUBLIC_PROJECT_CUSTOM_API;

export async function addData(dbName, collectionName, document) {
    const endpoint = `${BASE_URL}/add_data`;

    // Make sure API_KEY is available
    if (!API_KEY) {
        console.error("Error: API Key is not defined. Check your .env.local file and NEXT_PUBLIC_ prefix.");
        throw new Error("API Key is missing. Cannot add data."); // Prevent API call
    }

    const payload = {
        API_KEY: API_KEY,
        db_name: dbName,
        collection_name: collectionName,
        document: document
    };

    console.log("Sending payload:", payload); // Log what's being sent

    try {
        const response = await fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });

        const data = await response.json(); // Try to parse JSON regardless of status

        if (!response.ok) {
            // If response status is not 2xx, throw an error
            console.error("API Error Response:", data);
            throw new Error(data.message || `API request failed with status ${response.status}`);
        }

        console.log("Add Data Success Response:", data);
        return data; // Return the success response data

    } catch (error) {
        console.error("Error adding data:", error);
        // Re-throw the error so the calling function knows something went wrong
        throw error;
    }
}