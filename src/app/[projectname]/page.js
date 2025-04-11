'use client';

import React from 'react';


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

const SearchIcon = () => ( // Using a generic search icon for DeepSearch
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


export default function HomePage() {
  return (
    <div className="flex flex-col h-screen bg-[#FAF8F6] text-gray-800 font-sans">

     

      {/* Chat Area */}
      <main className="flex-1 overflow-y-auto p-4 md:p-6">
        <div className="max-w-3xl mx-auto w-full space-y-6">

          {/* User Message */}
          <div className="flex justify-end">
            <div className="bg-white rounded-xl p-3 shadow-sm max-w-xs border border-gray-200">
              <p className="text-sm">hi</p>
            </div>
          </div>

          {/* Bot Message */}
          <div className="flex justify-start">
             <div className="max-w-xl">
               <p className="text-sm">Hey there! What's on your mind today?</p>
             </div>
          </div>


          {/* User Message */}
           <div className="flex justify-end">
             <div className="bg-white rounded-xl p-3 shadow-sm max-w-xs border border-gray-200">
               <p className="text-sm">what do u know</p>
             </div>
           </div>


          {/* Bot Message */}
          <div className="flex justify-start">
             <div className="bg-transparent max-w-xl relative group">
               <p className="text-sm leading-relaxed">
                Ha, that's a big question! I'm Grok 3, built by xAI, so I've got a ton of info to share—everything from the latest news to deep dives on science, history, or even what's trending on X right now. My knowledge is always updating, so I can give you a fresh take on almost anything. What's something specific you're curious about? Or want me to surprise you with a fun fact? 🤩
               </p>
               <button className="absolute -bottom-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-white p-1 rounded-full border border-gray-200 shadow-sm hover:bg-gray-50">
                   <ChevronDownIcon />
               </button>
             </div>
          </div>

        </div>
      </main>

      {/* Input Area */}
      <footer className="bg-[#FAF8F6] px-4 pb-4 pt-2 sticky bottom-0">
         <div className="max-w-3xl mx-auto w-full bg-white rounded-xl border border-gray-200 shadow-sm p-2 flex items-center space-x-2">
            <button className="p-2 rounded-full hover:bg-gray-100 text-gray-500">
                <MicrophoneIcon />
            </button>
            <button className="bg-gray-100 border border-gray-300 rounded-full px-3 py-1.5 text-sm flex items-center space-x-1 text-gray-700 hover:bg-gray-200">
                <SearchIcon />
                <span>DeepSearch</span>
                <ChevronDownIcon />
            </button>
             <button className="bg-gray-100 border border-gray-300 rounded-full px-3 py-1.5 text-sm flex items-center space-x-1 text-gray-700 hover:bg-gray-200">
                <LightBulbIcon />
                <span>Think</span>
            </button>

            <input
              type="text"
              placeholder="How can Grok help?"
              className="flex-1 bg-transparent outline-none placeholder-gray-400 text-sm px-2 py-1"
            />

            <button className="bg-gray-100 border border-gray-300 rounded-full px-3 py-1.5 text-sm flex items-center space-x-1 text-gray-700 hover:bg-gray-200">
                <span>Grok 3</span>
                <ChevronDownIcon />
            </button>
            <button className="bg-gray-800 text-white rounded-lg p-2 hover:bg-gray-700 disabled:opacity-50">
                <ArrowUpIcon />
            </button>
         </div>
      </footer>

    </div>
  );
}