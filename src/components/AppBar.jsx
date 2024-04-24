import React from "react";
import logo from "../assets/logo.png";
import { Cart } from "../assets/Icons";

const AppBar = () => {
  return (
    <div className="flex justify-between items-center p-4 border-b-2 shadow-md shadow-slate-300">
      <div>
        <img className="w-32" src={logo} alt="logo" />
      </div>
      <div>
        <ul className="flex gap-12">
          <li>Home</li>
          <li>Blogs</li>
          <li>Contact Us</li>
          <li className="text-red-500">Connect with Us</li>
          <li>About Us</li>
        </ul>
      </div>
      <div className="flex gap-3 items-center ">
        <div className="relative">
          <Cart />{" "}
          <span className="absolute w-[8px] h-[8px] top-[-2px] right-[-5px] rounded bg-blue-500 text-red-500"></span>
        </div>
        <a href="">
          <button className="h-full bg-gradient-to-br from-blue-500 to-purple-700 text-center bg-white rounded-md px-4 p-1 text-white ml-5">
            Login
          </button>
        </a>
      </div>
    </div>
  );
};

export default AppBar;
