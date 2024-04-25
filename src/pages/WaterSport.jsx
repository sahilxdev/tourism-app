import { useState } from "react";
import { WaterSportsData } from "../hooks";
import Ticket from "../components/Ticket";
import { ClockIcon } from "../assets/Icons";


const WaterSports = () => {
  const [count, setCount] = useState(0);
  const [read, setRead] = useState(false);

  const nextImage = () => {
    if (count == 6) {
      setCount(0);
    } else {
      setCount(count + 1);
    }
  };

  const prevImage = () => {
    if (count == 0) {
      setCount(6);
    } else {
      setCount(count - 1);
    }
  };

  return (
    <div className="p-5 relative">
      <div className="flex ml-6">
        <div className>
          <h1 className=" md:text-5xl pl-8 top-8 relative ">
            {WaterSportsData[count].name}
            <span className="text-xl bg-slate-200 rounded-lg p-2 right-12 top-0 md:absolute flex gap-2 items-center">
              <span className="border rounded-md p-1 text-white bg-green-600 md:text-2xl">4.2 ★</span>{" "}
              <span className="text-slate-600 ">( Very Good 54 Reviews )</span> 
            </span>
          </h1>
          <div className="relative left-[70.7vw] top-[-30px]">
            <button
                onClick={prevImage}
                className="bg-blue-400 text-white rounded p-2 mr-5 align-middle"
            >
                <span className="pr-2 text-xl align-middle">〈</span> Prev
            </button>
            <button
                onClick={nextImage}
                className="bg-blue-400 text-white align-middle rounded p-2 ml-2"
            >
                Next <span className="pl-2 text-xl align-middle ">〉</span>
            </button>
          </div>
          <div className="px-4 mr-8 ">
            <img
              className="md:w-[800px] md:h-[500px] border rounded-3xl mt-6"
              src={WaterSportsData[count].url}
              alt="ss"
            />
          </div>
        </div>
        <div className="relative">
          <div className="absolute md:left-[30px] md:top-48">
            {Array(7)
              .fill(null)
              .map((_, index) => (
                <div
                  key={index} // Important for performance
                  onClick={() => setCount(index)}
                  className={`w-5 h-5 bg-slate-${
                    count === index ? "800" : "200"
                  } rounded-full mt-5 cursor-pointer`}
                />
              ))}
          </div>
        </div>
        <div className="w-96 mt-20 ml-32">
          
          <div className="
          ">
             
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 mb-2">
        
        <div className="w-[560px]">
          <iframe
            className=" right-6 ml-44 mt-10 rounded-xl shadow-lg "
            width="560"
            height="315"
            src={WaterSportsData[count].YTurl}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>

    </div>
  );
};

export default WaterSports;
