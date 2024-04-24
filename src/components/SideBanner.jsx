import React from 'react'
import { CallIcon, EmailIcon } from "../assets/Icons";

const SideBanner = () => {
  return (
  
        <div className="w-[50%] md:w-full lg:w-[45%] xl:w-[50%] text-center  bg-gradient-to-tl from-[#408c57] to-[#91c4a0] text-white border-l-0 border border-gray-300 ">
        <h1 className="mt-12 md:mt-8 text-[26px] md:text-2xl  font-montserrat font-semibold">
          Call us
        </h1>

          <div className="gap-1 flex justify-center items-center bg-white  w-[80%] mx-auto py-2 rounded-lg mt-4">
            <CallIcon />
          <p className="text-black">+918787883421</p>
          </div>


          <div className="gap-1 flex justify-center items-center text-white bg-white  w-[80%] ml:w-[90%] md:w-[80%] mx-auto py-2 rounded-lg mt-4 mb-12">
          <EmailIcon />
          <p className="text-black">travel@sublimeislands.com</p>
          </div>

        <p className="bg-white text-base font-semibold font-montserrat px-2 text-slate-900 w-[80%] ml:w-[90%] md:w-[80%] mx-auto py-3 rounded-lg mt-10 md:mt-4 mb-12">
          Thank you for submitting your details. Sublime Island will reach out
          to you in 2-3 hours or as soon as possible 😁✌🏻
        </p>
        <img
          src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/11/95/ab/view-from-balcny.jpg?w=1200&amp;h=-1&amp;s=1"
          className="px-5 rounded-md w-full h-fit object-cover md:mb-5"
        ></img>
      </div>

  )
}

export default SideBanner