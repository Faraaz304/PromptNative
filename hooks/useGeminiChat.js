'use client'; // This hook will be used in a client component

import { useState, useCallback } from 'react';


const formatMessageForApi = (message) => ({
  role: message.role,
  parts: [{ text: message.content }], // Assuming 'content' field holds the text
});

export const useGeminiChat = (initialMessages = []) => {
  const [messages, setMessages] = useState(initialMessages);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendMessage = useCallback(async (messageContent) => {
    if (!messageContent?.trim()) return; 

    const apiKey = process.env.NEXT_PUBLIC_GEMINI_API;
    if (!apiKey) {
      const errorMsg = "Gemini API key is missing. Please set NEXT_PUBLIC_GEMINI_API_KEY in your environment variables.";
      console.error(errorMsg);
      setError(errorMsg);
      setMessages((prevMessages) => [...prevMessages, { role: 'model', content: `Configuration Error: ${errorMsg}` }]);
      return; // Stop execution if no API key
    }

    const userMessage = { role: 'user', content: messageContent };
    const currentMessages = [...messages, userMessage]; // Capture history *before* setting state for the API call
    setMessages(currentMessages); // Update UI optimistically
    setIsLoading(true);
    setError(null);

    const apiFormattedMessages = currentMessages.map(formatMessageForApi);

    try {
      const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-pro-exp-03-25:generateContent?key=${apiKey}`; // Using Gemini 2.5 Pro

      const requestBody = {
        contents: apiFormattedMessages, // Send the entire conversation history
      };

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
         let errorBody = null;
         try {
            errorBody = await response.json();
         } catch(e) { /* ignore if body isn't json */ }
         const errorMessage = errorBody?.error?.message || `API Error: ${response.status} - ${response.statusText}`;
         throw new Error(errorMessage);
      }

      const data = await response.json();

      if (!data.candidates || data.candidates.length === 0) {
        const blockReason = data.promptFeedback?.blockReason;
        if (blockReason) {
          throw new Error(`Request blocked due to ${blockReason}.`);
        } else {
          throw new Error("Invalid response structure from API or request was blocked without specific reason.");
        }
      }

      const replyContent = data.candidates[0]?.content?.parts?.[0]?.text;
      if (replyContent === undefined || replyContent === null) {
         throw new Error("API response missing valid content.");
      }

      const botMessage = { role: 'model', content: replyContent };
      setMessages((prevMessages) => [...prevMessages, botMessage]);

    } catch (err) {
       console.error("Failed to send message to Gemini API:", err);
       const errorText = `Error: ${err.message || 'Could not reach the AI.'}`;
       setMessages((prevMessages) => [...prevMessages, { role: 'model', content: errorText }]);
       setError(errorText); // Set hook's error state
    } finally {
      setIsLoading(false);
    }
  }, [messages]);

  return {
    messages, 
    isLoading,
    error,
    sendMessage,
  };
};
