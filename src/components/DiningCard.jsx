import React from "react";

const DiningCard = ({imageUrl, url, name ,location,cusine }) => {
  return (
    <div>
      <div className="m-2 py-3 p-2 flex flex-col w-46 xs:w-auto shadow-xl overflow-hidden">
        <div className="items-center">
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={imageUrl}
              alt={name}
              className="flex rounded-md h-60 w-auto transition:origin-center hover:ease-in-out hover:scale-110 transition:duration-1000 transition-transform"
            />
          </a>
        </div>
        <div className="w-94 lex-col justify-between py-3 p-1 text-start">
          <div className="flex justify-between">
            <p className=" text-2xl font-semibold text-start">{name}</p>
            <p className="w-24 font-medium text-end">{location}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-md font-semibold text-start text-slate-600">Restaurant</p>
            <p className="text-sm font-medium text-end text-gray-700">{cusine}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiningCard;
