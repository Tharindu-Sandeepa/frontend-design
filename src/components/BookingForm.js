import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlaneDeparture, faPlaneArrival, faCalendarAlt, faUsers, faSearch } from "@fortawesome/free-solid-svg-icons";

const BookingForm = () => {
  const [activeTab, setActiveTab] = useState("oneWay");
  const [activeClassTab, setActiveClassTab] = useState("business");

  return (
    <div className="relative -mt-28 px-4 sm:px-6 lg:px-0">
      <div className="flex justify-center space-x-2 -mb-4">
        <button
          className={`relative px-8 py-2 rounded-t-lg -mr-4 font-medium mb-4 ${
            activeClassTab === "business"
              ? "bg-pink-600 text-white z-10"
              : "bg-gray-200 text-gray-700 after:absolute after:top-full after:left-0 after:right-0 after:h-2 after:bg-pink-600"
          }`}
          onClick={() => setActiveClassTab("business")}
        >
          Business Class
        </button>
        <button
          className={`relative px-8 py-2 rounded-t-lg font-medium mb-4 ${
            activeClassTab === "first"
              ? "bg-pink-600 text-white z-10"
              : "bg-gray-200 text-gray-700 after:absolute after:top-full after:left-0 after:right-0 after:h-2 after:bg-pink-600"
          }`}
          onClick={() => setActiveClassTab("first")}
        >
          First Class
        </button>
      </div>

     
      <div className="bg-white py-6 shadow-md rounded-lg max-w-7xl mx-auto px-6 sm:px-4 lg:px-8 relative " style={{ zIndex: 20 }}>
        <div className="flex justify-center space-x-4 mb-6">
          <button
            className={`px-4 py-2 rounded-full font-medium text-sm ${
              activeTab === "oneWay" ? "bg-white text-red-700 shadow-md" : "bg-gray-100 text-gray-500"
            }`}
            onClick={() => setActiveTab("oneWay")}
          >
            One Way
          </button>
          <button
            className={`px-4 py-2 rounded-full font-medium text-sm ${
              activeTab === "roundTrip" ? "bg-white text-red-700 shadow-md" : "bg-gray-100 text-gray-500"
            }`}
            onClick={() => setActiveTab("roundTrip")}
          >
            Round Trip
          </button>
          <button
            className={`px-4 py-2 rounded-full font-medium text-sm ${
              activeTab === "multicity" ? "bg-white text-red-700 shadow-md" : "bg-gray-100 text-gray-500"
            }`}
            onClick={() => setActiveTab("multicity")}
          >
            Multicity
          </button>
        </div>

        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4 relative z-10">
          <div className="flex flex-col flex-1">
            <label className="text-gray-500 text-sm mb-1">Departure City</label>
            <div className="flex items-center border border-gray-300 rounded-lg px-4 py-2">
              <FontAwesomeIcon icon={faPlaneDeparture} className="text-gray-700" />
              <select className="ml-2 flex-1 bg-transparent text-gray-700 focus:outline-none">
                <option value="Pakistan">Pakistan</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col flex-1">
            <label className="text-gray-500 text-sm mb-1">Arrival City</label>
            <div className="flex items-center border border-gray-300 rounded-lg px-4 py-2">
              <FontAwesomeIcon icon={faPlaneArrival} className="text-gray-700" />
              <select className="ml-2 flex-1 bg-transparent text-gray-700 focus:outline-none">
                <option value="Dubai">Dubai</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col flex-1">
            <label className="text-gray-500 text-sm mb-1">Departure Date</label>
            <div className="flex items-center border border-gray-300 rounded-lg px-4 py-2">
              <FontAwesomeIcon icon={faCalendarAlt} className="text-gray-700" />
              <input
                type="date"
                className="ml-2 flex-1 bg-transparent focus:outline-none text-gray-700"
              />
            </div>
          </div>

          <div className="flex flex-col flex-1">
            <label className="text-gray-500 text-sm mb-1">Arrival Date</label>
            <div className="flex items-center border border-gray-300 rounded-lg px-4 py-2">
              <FontAwesomeIcon icon={faCalendarAlt} className="text-gray-700" />
              <input
                type="date"
                className="ml-2 flex-1 bg-transparent focus:outline-none text-gray-700"
              />
            </div>
          </div>

          <div className="flex flex-col flex-1">
            <label className="text-gray-500 text-sm mb-1">Passengers</label>
            <div className="flex items-center border border-gray-300 rounded-lg px-4 py-2">
              <FontAwesomeIcon icon={faUsers} className="text-gray-700" />
              <input
                type="number"
                defaultValue={2}
                className="ml-2 flex-1 bg-transparent focus:outline-none text-gray-700"
              />
            </div>
          </div>
        </div>

      </div>

      <div className="flex justify-center -mt-5">
        <button className="flex items-center bg-pink-800 text-white px-9 py-1 rounded-full shadow-md hover:bg-pink-700 z-30 hidden sm:flex">
          <span className="flex-grow text-left mr-3">Search Flight</span>
          <span className="bg-white rounded-full p-3 flex items-center justify-center ml-auto -mr-8">
            <FontAwesomeIcon icon={faSearch} className="text-pink-600 text-sm" />
          </span>
        </button>
      </div>
    </div>
  );
};

export default BookingForm;