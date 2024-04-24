import React, { useState } from "react";

export function TicketBooking() {
  const [count, setCount] = useState(1);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleLocationChange = (event) => {
    setSelectedLocation(event.target.value);
  };

  const handleInputChange = (event) => {
    if (event.target.name === "name") {
      setName(event.target.value);
    } else if (event.target.name === "contact") {
      setContact(event.target.value);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-800">Tickets</h2>
          <div className="flex items-center">
            <button
              className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={decrementCount}
            >
              <svg
                className="w-4 h-4 text-gray-600"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <line x1="12" y1="5" x2="12" y2="19"></line>
              </svg>
            </button>
            <span className="mx-2 text-lg font-semibold">{count}</span>
            <button
              className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={incrementCount}
            >
              <svg
                className="w-4 h-4 text-gray-600"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </button>
          </div>
        </div>
        <div className="mb-4">
          <label
            className="block text-sm font-medium text-gray-700 mb-2"
            htmlFor="location"
          >
            Location
          </label>
          <select
            id="location"
            value={selectedLocation}
            onChange={handleLocationChange}
            className="block w-full px-3 py-2 rounded-md text-gray-700 bg-white border border-gray-300 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="">Select</option>
            <option value="location 1">Location 1</option>
            <option value="location 2">Location 2</option>
            <option value="location 3">Location 3</option>
          </select>
        </div>
        <div className="text-gray-600 mb-4">
          <p>Total price will be calculated based on selection</p>
        </div>
        <div className="mb-4">
          <label
            className="block text-sm font-medium text-gray-700 mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            value={name}
            onChange={handleInputChange}
            className="block w-full px-3 py-2 rounded-md text-gray-700 bg-white border border-gray-300 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-sm font-medium text-gray-700 mb-2"
            htmlFor="contact"
          >
            Contact Number
          </label>
          <input
            id="contact"
            type="tel"
            name="contact"
            value={contact}
            onChange={handleInputChange}
            className="block w-full px-3 py-2 rounded-md text-gray-700 bg-white border border-gray-300 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter your contact number"
            required
          />
        </div>
        <button
          type="submit"
          disabled={!selectedLocation || !name || !contact}
          className="w-full px-3 py-2 rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          Book Tickets
        </button>
      </div>
    </div>
  );
}
