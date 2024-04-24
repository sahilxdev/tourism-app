import React from 'react'

function FlightSearch() {
  return (
    <div className="bg-gradient-to-b from-blue-900 opacity-80 to-transparent mt-2 min-h-96 flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold mb-8 text-white">Search your flights</h1>
      <div className="flex justify-between w-full max-w-md bg-white rounded-md shadow-md p-4">
        <div className="flex flex-col">
          <label htmlFor="from" className="mb-2 text-sm font-medium text-gray-700">
            FROM
          </label>
          <select id="from" name="from" className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500">
            <option value="Chennai">Chennai</option>
            <option value="Delhi">Delhi</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Kolkata">Kolkata</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label htmlFor="to" className="mb-2 text-sm font-medium text-gray-700">
            TO
          </label>
          <select id="to" name="to" className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500">
            <option value="Port Blair">Port Blair</option>
            <option value="Goa">Goa</option>
            <option value="Kerala">Kerala</option>
            <option value="Himachal Pradesh">Himachal Pradesh</option>
          </select>
        </div>
      </div>
      <div className="flex justify-between items-center w-full max-w-md mt-4">
        <div className="flex flex-col">
          <label htmlFor="departure" className="mb-2 text-sm font-medium text-gray-700">
            DEPARTURE
          </label>
          <input
            type="date"
            id="departure"
            name="departure"
            defaultValue="2024-04-24"
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="return" className="mb-2 text-sm font-medium text-gray-700">
            RETURN
          </label>
          <input
            type="date"
            id="return"
            name="return"
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
            placeholder="Tap to add a return date"
          />
        </div>
      </div>
      <div className="flex justify-between items-center w-full max-w-md mt-4">
        <div className="flex flex-col">
          <label htmlFor="travellers" className="mb-2 text-sm font-medium text-gray-700">
            Travellers
          </label>
          <select id="travellers" name="travellers" className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md shadow-sm">
          Search
        </button>
      </div>
    </div>
  )
}

export default FlightSearch