import React from "react";
import {
  BusIcon,
  CabIcon,
  DiningIcon,
  FerryIcon2,
  FlightIcon,
  HotelIcon,
  PackageIcon,
  PgIcon,
  ShipIcon,
  ShopIcon,
  TrekkingIcon,
  WaterSportIcon,
} from "../assets/Icons";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="flex justify-center">
      <div className="w-[80vw] mr-14 md:mr-0 grid grid-cols-6 md:grid-cols-12 gap-8 md:gap-16 justify-evenly mt-5">
        <Link to={"/"}>
          <div className="flex flex-col items-center focus:ring-2 text-gray-400 hover:text-gray-700 text-center cursor-pointer rounded-xl justify-center px-10 hover:bg-slate-200">
            <div className="text-4xl text-center px-2 ">
              <FlightIcon />
            </div>
            <div className="text-xs md:text-sm font-medium text-gray-600">
              FLIGHTS
            </div>
          </div>
        </Link>
        <Link to={"/hotels"}>
          <div className="flex flex-col items-center  text-gray-400 hover:text-gray-700 text-center cursor-pointer rounded-xl justify-center px-10 hover:bg-slate-200">
            <div className="text-4xl text-center px-2 ">
              <HotelIcon />
            </div>
            <div className="text-xs md:text-sm font-medium text-gray-600">
              HOTELS
            </div>
          </div>
        </Link>
        <Link to={"/ships"}>
          <div className="flex flex-col items-center  text-gray-400 hover:text-gray-700 text-center cursor-pointer rounded-xl justify-center px-10 hover:bg-slate-200">
            <div className="text-4xl text-center px-2 ">
              <ShipIcon />
            </div>
            <div className="text-xs md:text-sm font-medium text-gray-600">
              SHIP
            </div>
          </div>
        </Link>
        <Link to={"/bus"}>
          <div className="flex flex-col items-center  text-gray-400 hover:text-gray-700 text-center cursor-pointer rounded-xl justify-center px-10 hover:bg-slate-200">
            <div className="text-4xl text-center px-2 ">
              <BusIcon />
            </div>
            <div className="text-xs md:text-sm font-medium text-gray-600">
              BUS
            </div>
          </div>
        </Link>
        <Link to={"/cabs"}>
          <div className="flex flex-col items-center  text-gray-400 hover:text-gray-700 text-center cursor-pointer rounded-xl justify-center px-10 hover:bg-slate-200">
            <div className="text-4xl text-center px-2 ">
              <CabIcon />
            </div>
            <div className="text-xs md:text-sm font-medium text-gray-600">
              CABS
            </div>
          </div>
        </Link>
        <Link to={"/ferries"}>
          <div className="flex flex-col items-center  text-gray-400 hover:text-gray-700 text-center cursor-pointer rounded-xl justify-center px-10 hover:bg-slate-200">
            <div className="text-4xl text-center px-2 ">
              <FerryIcon2 />
            </div>
            <div className="text-xs md:text-sm font-medium text-gray-600">
              FERRY TRACKING
            </div>
          </div>
        </Link>
        <Link to={"/water-sports"}>
          <div className="flex flex-col items-center  text-gray-400 hover:text-gray-700 text-center cursor-pointer rounded-xl justify-center px-10 hover:bg-slate-200">
            <div className="text-4xl text-center px-2 ">
              <WaterSportIcon />
            </div>
            <div className="text-xs md:text-sm font-medium text-gray-600">
              WATER SPORTS
            </div>
          </div>
        </Link>
        <Link to={"/pg"}>
          <div className="flex flex-col items-center  text-gray-400 hover:text-gray-700 text-center cursor-pointer rounded-xl justify-center px-10 hover:bg-slate-200">
            <div className="text-4xl text-center px-2 ">
              <PgIcon />
            </div>
            <div className="text-xs md:text-sm font-medium text-gray-600">
              PAYING GUEST
            </div>
          </div>
        </Link>
        <Link to={"/packages"}>
          <div className="flex flex-col items-center  text-gray-400 hover:text-gray-700 text-center cursor-pointer rounded-xl justify-center px-10 hover:bg-slate-200">
            <div className="text-4xl text-center px-2 ">
              <PackageIcon />
            </div>
            <div className="text-xs md:text-sm font-medium text-gray-600">
              PACKAGE
            </div>
          </div>
        </Link>
        <Link to={"/dining"}>
          <div className="flex flex-col items-center text-gray-400 hover:text-gray-700 text-center cursor-pointer rounded-xl justify-center px-10 hover:bg-slate-200">
            <div className="text-4xl text-center px-2 ">
              <DiningIcon />
            </div>
            <div className="text-xs md:text-sm font-medium text-gray-600">
              DININGS
            </div>
          </div>
        </Link>
        <Link to={"/trekking"}>
          <div className="flex flex-col items-center  text-gray-400 hover:text-gray-700 text-center cursor-pointer rounded-xl justify-center px-10 hover:bg-slate-200">
            <div className="text-4xl text-center px-2 ">
              <TrekkingIcon />
            </div>
            <div className="text-xs md:text-sm font-medium text-gray-600">
              TREKKING
            </div>
          </div>
        </Link>
        <Link to={"/shop"}>
          <div className="flex flex-col items-center  text-gray-400 hover:text-gray-700 text-center cursor-pointer rounded-xl justify-center px-10 hover:bg-slate-200">
            <div className="text-4xl text-center px-2 ">
              <ShopIcon />
            </div>
            <div className="text-xs md:text-sm font-medium text-gray-600">
              SHOP
            </div>
          </div>
        </Link>
        <Link
          className="hidden md:absolute  right-40 top-[12px]"
          to={"/hotel-form"}
        >
          <button className="w-24 h-10 px-4 bg-green-600 hover:bg-green-700 rounded-xl">
            Form
          </button>
        </Link>
        <Link to={'/hotel-form'}>
          <div className="fixed top-[60vh] right-5 md:top-2 md:right-40 z-40">
            <button className="rounded-full border border-slate-700  hover:bg-green-500 w-16 h-16 md:h-12 bg-green-400 p-2">
              Form
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
