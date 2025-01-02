import React, { useState } from "react";
import video from "../assets/beach.mp4"; 
import plane from "../assets/plane.png"; 

const HowItWorks = () => {
  const [isPlaying, setIsPlaying] = useState(false); 
  const videoRef = React.createRef(); 

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying); 
    }
  };

  return (
    <div className="bg-gray-100 py-16 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-12 text-center lg:text-left">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">How it Works</h2>
          <p className="text-gray-600 text-lg mb-8">
            These are the simple procedures that will make your purchasing process super easy and smooth. And will help you to get your flight easily.
          </p>
          <div className="relative">
          
            <div className="absolute left-1 top-0 bottom-0 border-l-2 border-dotted border-pink-500"></div>
            
           
            <div className="absolute top-0 top-5 left-1 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-red-500"></div>
            <div className="absolute top-24 left-1 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-red-500"></div>
            <div className="absolute top-40 left-1 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-red-500"></div>
          
            <div className="space-y-8 pl-8">
              {[
                { number: "1", text: "Search Flights" },
                { number: "2", text: "Fill Contact Form" },
                { number: "3", text: "Choose Your Airline" },
                { number: "4", text: "Booking in 10 Minutes!" },
              ].map((step, index) => (
                <div key={index} className="relative flex items-center gap-4">
                  <div className="absolute -left-5 mt-16 text-gray-300 text-7xl font-bold transform -translate-y-1/2">
                    {step.number}
                  </div>
                 
                  <div className="relative z-10 flex items-center justify-center w-9 h-9 rounded-full bg-black text-white text-xl font-bold">
                    <span></span>
                  </div>
                
                  <div className="ml-4">
                    <p className="text-lg font-semibold text-pink-600">
                      {step.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
         
            <div className="absolute -bottom-2 left-1 transform -translate-x-1/2">
              <img src={plane} alt="Plane" className="w-12 h-12" />
            </div>
          </div>
        </div>

      
        <div className="relative">
          <div
            className="rounded-lg shadow-lg overflow-hidden relative cursor-pointer"
            onClick={togglePlay}
          >
            <video
              className="w-full h-auto"
              ref={videoRef}
              src={video}
              loop
              muted
            ></video>
            {!isPlaying && (
              <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50">
                <div className="w-16 h-16 bg-white rounded-full flex justify-center items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-8 h-8 text-black"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.752 11.168l-5.197-3.04A1 1 0 008 9.04v5.919a1 1 0 001.555.832l5.197-3.04a1 1 0 000-1.664z"
                    />
                  </svg>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;