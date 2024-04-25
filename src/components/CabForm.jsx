import React from "react";
import CabSideBanner from "./CabSideBanner";

const Form = () => {
  return (
    <div className=" w-[90%] block md:flex  md:justify-center items-stretch mx-auto my-6 shadow-xl rounded-lg">
      <form
        className="w-full bg-white overflow-hidden border border-gray-300 
                    p-12 md:p-6 lg:p-8 "
      >
        <h1 className="text-[#699c78] text-[26px] md:text-2xl md:text-center font-montserrat font-bold mb-6 md:mb-3 tracking-wide">
          Book your Cab
        </h1>
        <div className="flex flex-col gap-1">
          <input
            type="text"
            id="name"
            name="user_name"
            placeholder="Name"
            className="h-[40px] outline-none  p-4 rounded-md border border-gray-300 focus:border-2 focus:border-slate-400"
            required
            value=""
          ></input>
        </div>
        <div className="flex flex-col  gap-1 mt-5 ">
          <input
            type="email"
            id="email"
            name="user_email"
            placeholder="Email"
            className="h-[40px] outline-none p-4 rounded-md border border-gray-300 focus:border-2 focus:border-slate-400"
            required
            value=""
          ></input>
        </div>
        <div className="flex flex-col gap-1 mt-5">
          <input
            type="tel"
            id="phone"
            name="user_phone"
            placeholder="Phone number"
            className="h-[45px] outline-none p-4 rounded-md border border-gray-300 focus:border-2 focus:border-slate-400"
            required
            value=""
          ></input>
        </div>
        <div className="flex flex-col gap-1 mt-5">
          <input
            type="text"
            id="pg"
            name="user_pickup"
            placeholder="Pickup location"
            className="h-[45px] outline-none p-4 rounded-md border border-gray-300 focus:border-2 focus:border-slate-400"
            required
          ></input>
        </div>
        <div className="flex flex-col gap-1 mt-5 ">
          <input
            type="text"
            id="destination"
            name="user_hotel_location"
            placeholder="Drop location"
            className="h-[45px] outline-none p-4 rounded-md border border-gray-300 focus:border-2 focus:border-slate-400 "
            required
          ></input>
        </div>
        <div className="flex flex-col gap-1 mt-5 ">
          <input
            type="date"
            id="destination"
            name="user_hotel_location"
            className="h-[45px] outline-none p-4 rounded-md border border-gray-300 focus:border-2 focus:border-slate-400 "
            required
          ></input>
        </div>
        <div className="flex flex-col gap-1 mt-5">
          <span className="font-bold ml-3">* optional *</span>
          <textarea
            id="message"
            name="message"
            placeholder="Message"
            className="h-[90px] outline-none p-3 rounded-md resize-none border border-gray-300 focus:border-2 focus:border-slate-400"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-[#408c57] shadow-2xl hover:bg-[#51795d]
                  text-white text-[21px] md:text-[16px] tracking-wider font-montserrat font-semibold rounded-full
                  p-2 w-full mt-6"
        >
          Submit
        </button>
      </form>
      <CabSideBanner/>
    </div>
  );
};

export default Form;
