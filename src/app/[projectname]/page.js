'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useGeminiChat } from '../../../hooks/useGeminiChat';

// --- SVG Icon Components (Keep these as they are) ---
const ChevronDownIcon = () => (
 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
</svg>
);
const MicrophoneIcon = () => (
 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 0 1 6 0v8.25a3 3 0 0 1-3 3Z" />
</svg>
);
const SearchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
  </svg>
);
const LightBulbIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-7.5 0C4.273 18.86 3 17.407 3 15.562V12.312c0-1.447.95-2.713 2.276-3.218C6.85 8.58 8.32 8 10.01 8c1.69 0 3.16.58 4.734 1.094A3.31 3.31 0 0 1 21 12.312v3.25c0 1.844-1.273 3.298-2.996 3.678Z" />
  </svg>
);
const ArrowUpIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
   <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
 </svg>
);
// --- End SVG Icon Components ---




export default function HomePage() {
   const { messages, isLoading, error, sendMessage } = useGeminiChat([
     
   ]);
  const [inputValue, setInputValue] = useState('');
  const chatContainerRef = useRef(null); // Ref for scrolling

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);


  const handleSendMessage = (e) => {
    e.preventDefault(); // Prevent form submission page reload
    if (inputValue.trim() && !isLoading) {
      sendMessage(inputValue);
      setInputValue(''); // Clear input after sending
    }
  };

  return (
    <div className="flex flex-col h-screen bg-[#FAF8F6] text-gray-800 font-sans">

      

      {/* Chat Area */}
      <main ref={chatContainerRef} className="flex-1 overflow-y-auto p-4 md:p-6">
        <div className="max-w-3xl mx-auto w-full space-y-6">

          

          {/* Render Messages Dynamically */}
          {messages.map((msg, index) => (
            <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              {msg.role === 'user' ? (
                <div className="bg-white rounded-xl p-3 shadow-sm max-w-xs md:max-w-md lg:max-w-lg border border-gray-200">
                  <p className="text-sm">{msg.content}</p>
                </div>
              ) : (
                <div className={`max-w-xl relative group ${msg.content.startsWith('Error:') ? 'text-red-600' : ''}`}>
                  <p className="text-sm leading-relaxed">
                    {msg.content}
                  </p>
                  {/* Keep hover effect only if needed, maybe remove for AI msg */}
                  {/* <button className="absolute -bottom-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-white p-1 rounded-full border border-gray-200 shadow-sm hover:bg-gray-50">
                      <ChevronDownIcon />
                  </button> */}
                </div>
              )}
            </div>
          ))}

          {/* Loading Indicator */}
          {isLoading && (
             <div className="flex justify-start">
                 <div className="max-w-xl">
                     <p className="text-sm text-gray-500 italic animate-pulse">Grok is thinking...</p>
                 </div>
             </div>
          )}

          {/* Error Display */}
           {error && !isLoading && ( // Only show error if not currently loading
             <div className="flex justify-start">
                 <div className="max-w-xl text-red-600">
                     <p className="text-sm leading-relaxed">Error: {error}</p>
                 </div>
             </div>
           )}


        </div>
      </main>

      {/* Input Area */}
      <footer className="bg-[#FAF8F6] px-4 pb-4 pt-2 sticky bottom-0 shrink-0">
         {/* Use a form for better accessibility (handles Enter key) */}
         <form onSubmit={handleSendMessage} className="max-w-3xl mx-auto w-full bg-white rounded-xl border border-gray-200 shadow-sm p-2 flex items-center space-x-2">
            <button type="button" className="p-2 rounded-full hover:bg-gray-100 text-gray-500">
                <MicrophoneIcon />
            </button>
            <button type="button" className="bg-gray-100 border border-gray-300 rounded-full px-3 py-1.5 text-sm flex items-center space-x-1 text-gray-700 hover:bg-gray-200">
                <SearchIcon />
                <span>DeepSearch</span>
                <ChevronDownIcon />
            </button>
             <button type="button" className="bg-gray-100 border border-gray-300 rounded-full px-3 py-1.5 text-sm flex items-center space-x-1 text-gray-700 hover:bg-gray-200">
                <LightBulbIcon />
                <span>Think</span>
            </button>

            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="How can Grok help?"
              className="flex-1 bg-transparent outline-none placeholder-gray-400 text-sm px-2 py-1 disabled:bg-gray-100"
              disabled={isLoading} // Disable input while loading
            />

            <button type="button" className="bg-gray-100 border border-gray-300 rounded-full px-3 py-1.5 text-sm flex items-center space-x-1 text-gray-700 hover:bg-gray-200">
                <span>Grok 3</span>
                <ChevronDownIcon />
            </button>
            <button
              type="submit"
              className="bg-gray-800 text-white rounded-lg p-2 hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isLoading || !inputValue.trim()} // Disable if loading or input is empty
            >
                <ArrowUpIcon />
            </button>
         </form>
      </footer>

    </div>
  );
}