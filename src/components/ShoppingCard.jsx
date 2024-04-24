import React from "react";

const ShoppingCard = ({ imageUrl, name, location, brief }) => {
  return (
    <div className="shopping-card rounded-lg shadow-md overflow-hidden m-2">
      <img
        src={imageUrl}
        alt={name}
        className="h-60 w-full object-cover rounded-t-lg transition duration-300 hover:scale-105"
      />
      <div className="px-4 py-4 flex flex-col justify-between">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-bold text-black">{name}</h3>
          <p className="text-sm text-gray-500">{location}</p>
        </div>
        <p className="text-sm text-gray-700 mt-2">{brief}</p>
      </div>
    </div>
  );
};

export default ShoppingCard;
