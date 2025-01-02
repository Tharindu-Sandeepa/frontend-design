import React from "react";
import background from "../assets/new.png";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HeroSection = () => {
  return (
    <div
      className="relative bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${background})` }}
    >
       <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent z-10"></div>
      <div className="relative max-w-7xl mx-auto px-6 py-12 lg:px-9 flex justify-between items-center min-h-[80vh] z-20">
        <div className="mt-16">
        <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight font-serif">
        Explore the World Together
            <br />
            with Premium Travel
          </h1>
          <p className="mt-4 text-lg font-medium">Get up to 50% Discount</p>
          <button className="flex items-center bg-pink-600 text-white px-9 py-1 mt-10 rounded-full shadow-md hover:bg-pink-700 z-30">
            <span className="flex-grow text-left mr-3">Book Now</span>
            <span className="bg-white rounded-full p-3 flex items-center justify-center ml-auto -mr-8">
              <FontAwesomeIcon icon={faArrowRight} className="text-pink-600 text-sm" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
