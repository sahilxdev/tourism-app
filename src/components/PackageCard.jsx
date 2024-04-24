import React from "react";
import { CabIcon, FlightIcon, HotelIcon, TrekkingIcon } from "../assets/Icons";

const PackageCard = ({ name, price, offerPrice, url }) => {
  return (
    <div className="flex flex-col w-[500px] mt-8">
      <div>
        <div className="bg-white rounded-lg  p-4 flex flex-col  w-[342px] shadow-[0px_4px_16px_rgba(158,158,158,0.25)]">
          <div className="max-w-80 items:center">
            <img
              src={url}
              alt="Splendid Andaman"
              className="flex rounded-md w-[310px] h-52 transition:origin-center hover:ease-in-out hover:scale-110 transition:duration-1000 transition-transform"
            />
          </div>
          <div className="flex flex-col pt-4">
            <p className="text-2xl text-start text-slate-900 false">{name}</p>
            <div className="flex justify-between">
              <p className="">4 Nights 5 Days</p>
            </div>
            <div className="mt-7 flex justify-between items-end">
                <div className="grid justify-items-center gap-y-3">
                <div
                    className="border-[#b7b7b7]"
                  >
                    <FlightIcon/>
                  </div>
                  <p className="text-xs whitespace-nowrap">2 Flights</p>
                </div>
                <div className="grid justify-items-center gap-y-3">
                <div
                    className="border-[#b7b7b7]"
                  >
                    <HotelIcon/>
                  </div>
                  <p className="text-xs whitespace-nowrap">1 Hotel</p>
                </div>
                <div className="grid justify-items-center gap-y-3">
                <div
                    className="border-[#b7b7b7]"
                  >
                    <CabIcon/>
                  </div>
                  <p className="text-xs whitespace-nowrap">2 Transfers</p>
                </div>
                <div className="grid justify-items-center gap-y-3">
                  <div
                    className="border-[#b7b7b7]"
                  >
                    <TrekkingIcon/>
                  </div>
                  <p className="text-xs whitespace-nowrap">4 Activities</p>
                </div>
              </div>
            <div></div>
          </div>
          <ul className="list-disc list-inside mt-6 text-sm text-black/50">
            <li>Tour combo with return airport transfer</li>
            <li>City Tour</li>
            <li>Curious Corner</li>
          </ul>
          <div className="mt-7 flex gap-4">
            <p className="line-through">₹{price}</p>
            <h1 className="font-bold text-2xl">
              ₹{offerPrice}{" "}
              <sub className="font-normal text-xs -ml-1 whitespace-nowrap">
                per person
              </sub>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;
