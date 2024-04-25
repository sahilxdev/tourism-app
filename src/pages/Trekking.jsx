import { useState } from "react";
import { TrekkingData } from "../hooks";
import Ticket from "../components/Ticket";
import { ClockIcon } from "../assets/Icons";

const Trekking = () => {
  const [count, setCount] = useState(0);
  const [read, setRead] = useState(false);

  const nextImage = () => {
    if (count == 5) {
      setCount(0);
    } else {
      setCount(count + 1);
    }
  };

  const prevImage = () => {
    if (count == 0) {
      setCount(5);
    } else {
      setCount(count - 1);
    }
  };

  return (
    <div className="mt-8">
      <div className="grid grid-cols-1 md:grid-cols-5">
        <div className="flex flex-col md:col-span-3">
          <div className="flex flex-col md:ml-16 md:flex-row gap-5 md:gap-0 items-center max-w-[730px] md:flex md:justify-between">
            <div>
              <h1 className="md:pl-16 text-5xl">
                {TrekkingData[count].name}
              </h1>
            </div>
            <div>
              <span className="text-xs md:text-md bg-slate-200 rounded-lg p-2  md:ml-0">
                <span className="border rounded-md p-1 text-white bg-green-600">
                  4.2 ★
                </span>{" "}
                <span className=" text-slate-600 ">
                  ( Very Good 54 Reviews )
                </span>
              </span>
            </div>
          </div>
          <div>
            <div className="px-4">
              <img
                className="mx-auto w-[500px] h-[300px] md:w-[700px] md:h-[400px] border rounded-3xl mt-6"
                src={TrekkingData[count].url}
                alt="ss"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row min-w-[100vw]">
          <div className="flex gap-2 md:gap-0 md:flex-col mx-auto lg:-translate-x-14 lg:translate-y-6 md:mx-0 md:my-auto">
            {Array(6)
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
          <div className="flex flex-col w-full md:w-[34em] translate-y-12 md:-translate-y-6">
            <div className="flex flex-col">
              <div>
                <div className="rounded-md bg-slate-400 p-3 mb-5 w-[80vw] mx-auto md:mx-0 md:w-full -translate-y-6 md:-translate-y-0 md:mt-8">
                  <div className="flex">
                    <span>
                      <ClockIcon />
                    </span>
                    <h1 className="ml-3">Open Hours: 10am - 6pm</h1>
                  </div>
                  <div className="flex">
                    <span>
                      <ClockIcon />
                    </span>
                    <h1 className="ml-3">First come first serve Basis</h1>
                  </div>
                </div>
              </div>
              <div className="ml-3 md:ml-0 md:block">
                <iframe
                  className="rounded-xl shadow-lg w-[355px] md:w-full"
                  width="355"
                  height="315"
                  src={TrekkingData[count].YTurl}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="md:flex md:justify-around">
        <div>
          <div className="grid grid-cols-2 gap-[168px] mt-2 -translate-y-[460px] md:translate-x-0 md:-translate-y-0">
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
          <div className="p-6 w-[58vw] hidden md:block">
            {read ? (
              <div className="text-justify">
                {TrekkingData[count].description}
                <span onClick={() => setRead(false)} className="text-blue-800">
                  <div>...Show Less</div>
                </span>
              </div>
            ) : (
              <div className="text-justify">
                {TrekkingData[count].description.slice(0, 700)}...
                <span className="text-blue-800" onClick={() => setRead(true)}>
                  Read More
                </span>
              </div>
            )}
          </div>
          <div className="p-6 w-[90vw] mx-auto md:mx-0 md:w-[58vw] md:hidden">
            {read ? (
              <div className="text-justify">
                {TrekkingData[count].description}
                <span onClick={() => setRead(false)} className="text-blue-800">
                  <div>...Show Less</div>
                </span>
              </div>
            ) : (
              <div className="text-justify">
                {TrekkingData[count].description.slice(0, 100)}...
                <span className="text-blue-800" onClick={() => setRead(true)}>
                  Read More
                </span>
              </div>
            )}
          </div>
        </div>
        <div>
          <div className="w-[80vw] md:w-[38vw] md:mt-12 mx-auto md:mx-0">
            <Ticket count={count} Data={TrekkingData} name="Sports" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trekking;
