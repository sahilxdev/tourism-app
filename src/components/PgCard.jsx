import React from "react";

const PgCard = ({ url, name, location,  rating, price }) => {
  // Destructure props for cleaner code

  return (
    <div className="flex flex-col bg-white shadow-md rounded-lg overflow-hidden">
      <div className="w-full h-64 relative">
        <img
          src={url}
          alt="pg/room"
          className="w-full h-full object-cover rounded-t-lg"
        />
      </div>
      <div className="px-4 py-4 flex flex-col justify-between">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-xl font-bold text-black">{name}</h3>
            <p className="text-sm text-gray-500">{location}</p>
            <div className="">
                <img src="data:image/png;base64,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" alt="icon" className="my-4 bg-white"></img>
            </div>
          </div>
          <div className="flex items-center text-sm">
            
            <span className="ml-1 mb-16 align-middle text-2xl">⭐ {rating}</span>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center text-xl">
            <span className="font-medium text-black">{price.split(" ")[0]} / {price.split(" ")[1]}</span>
            <span className="ml-1 text-gray-500"></span>
          </div>
          <button href="/hotel-form" className="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded-lg font-bold">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default PgCard;
