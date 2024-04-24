import React, { useState } from "react";

const PlacesCard = ({ title, subtitle, reviews, imageUrl }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const handlePrevClick = () => {
    if (currentImage == 0) {
      setCurrentImage(3);
    } else {
      setCurrentImage(currentImage - 1);
    }
  };

  const handleForwClick = () => {
    if (currentImage == 3) {
      setCurrentImage(0);
    } else {
      setCurrentImage(currentImage + 1);
    }
  };

  return (
    <div className="grid card w-82 rounded-lg shadow-md overflow-clip">
      <div className="relative">
        <img
          src={imageUrl[currentImage]}
          alt={title}
          className="w-full h-72 object-cover rounded-t-lg"
        />
        <div className="absolute w-full flex justify-between top-0">
          <button
            onClick={handlePrevClick}
            className="bg-blue-200 hover:bg-blue-400 px-1  from-black opacity-20 hover:opacity-70 to-transparent font-extrabold
 text-white rounded-r-xl py-5 text-xl text-center mr-1"
          >
            {"<"}
          </button>
          <button
            onClick={handleForwClick}
            className="bg-blue-200 hover:bg-blue-400 font-extrabold  px-1 from-black opacity-20 hover:opacity-70 to-transparent rounded-l-xl text-white  py-5 text-xl text-center ml-1 h-[14.5em]"
          >
            {">"}
          </button>
        </div>
      </div>
      <div className="px-4 py-4 flex flex-col justify-between h-full">
        <h3 className="text-xl font-bold text-black">{title}</h3>
        <p className="text-sm text-gray-500">{subtitle}</p>
        <div className="flex items-center mt-2">
          <svg
            className="w-5 h-5 text-yellow-500 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.05 3.555v9.49l6.447 4.744a1.496 1.496 0 0 1-.948 2.514H3.993a1.496 1.496 0 0 1-.948-2.514L9.05 3.555zM8.284 4.408l-3.807 3.807a.501.501 0 0 1-.708-.708L7.576 2.7a.501.501 0 0 1 .708-.708l3.807 3.807a.501.501 0 0 1 0 .708z"
              clipRule="evenodd"
              fillRule="evenodd"
            />
          </svg>
          <span className="text-sm ml-1 text-yellow-600">{reviews}</span>
        </div>
      </div>
    </div>
  );
};

export default PlacesCard;
