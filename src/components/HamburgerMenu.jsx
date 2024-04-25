import React, { useState } from "react";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex items-center lg:hidden">
      <button
        type="button"
        aria-label="Toggle Menu"
        onClick={handleClick}
        className="focus:outline-none  rounded-md p-2"
      >
        {isOpen ? (
          <div>
            <div className="z-40 relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all  ring-0 ring-slate-700 hover:ring-4 ring-opacity-30 duration-200 shadow-md">
              <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
                <div className="bg-slate-700 h-[2px] w-7 transform transition-all duration-300 origin-left translate-x-10"></div>
                <div className="bg-slate-700 h-[2px] w-7 rounded transform transition-all duration-300 translate-x-10 delay-75"></div>
                <div className="bg-slate-700 h-[2px] w-7 transform transition-all duration-300 origin-left translate-x-10 delay-150"></div>
                <div className="absolute items-center justify-between transform transition-all duration-500 top-2.5  flex w-12">
                  <div className="absolute bg-slate-700 h-[2px] w-5 transform transition-all duration-500  delay-700 rotate-45"></div>
                  <div className="absolute bg-slate-700 h-[2px] w-5 transform transition-all duration-500  delay-300 -rotate-45"></div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div className="relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all  ring-0 ring-slate-700 hover:ring-4 ring-opacity-30 duration-200 shadow-md">
              <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
                <div className="bg-slate-700 h-[2px] w-7 transform transition-all duration-300 origin-left "></div>
                <div className="bg-slate-700 h-[2px] w-7 rounded transform transition-all duration-300  delay-75"></div>
                <div className="bg-slate-700 h-[2px] w-7 transform transition-all duration-300 origin-left  delay-150"></div>
                <div className="absolute items-center justify-between transform transition-all duration-500 top-2.5 -translate-x-10 ">
                  <div className="absolute bg-slate-700 h-[2px] w-5 transform transition-all duration-500  delay-700 rotate-45"></div>
                  <div className="absolute bg-slate-700 h-[2px] w-5 transform transition-all duration-500  delay-300 -rotate-45"></div>
                </div>
              </div>
            </div>
          </div>
        )}
      </button>
      {isOpen && (
        <div className=" inset-0 bg-gray-900 opacity-75 transition-opacity duration-300 absolute top-24 ease-in-out z-10">
          <div className="flex flex-col pl-8  h-screen pt-6 px-6 bg-white overflow-y-auto">
            {/* Your menu content here */}
            <ul className="space-y-2 flex flex-col justify-evenly">
              <li className="p-2">
                <a
                  href="#"
                  className="text-4xl font-medium text-gray-700 hover:text-indigo-600"
                >
                  Home
                </a>
              </li>
              <li className="p-2">
                <a
                  href="#"
                  className="text-4xl font-medium text-gray-700 hover:text-indigo-600"
                >
                  Blogs
                </a>
              </li>
              <li className="p-2">
                <a
                  href="#"
                  className="text-4xl font-medium text-gray-700 hover:text-indigo-600"
                >
                  Contact Us
                </a>
              </li>
              <li className="p-2">
                <a
                  href="#"
                  className="text-4xl font-medium text-gray-700 hover:text-indigo-600"
                >
                  Connect with Us
                </a>
              </li>
              <li className="p-2">
                <a
                  href="#"
                  className="text-4xl font-medium text-gray-700 hover:text-indigo-600"
                >
                  About Us
                </a>
              </li>
              <li className="p-2">
                <a
                  href="#"
                  className="text-4xl font-medium text-gray-700 hover:text-indigo-600"
                >
                  Login
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
