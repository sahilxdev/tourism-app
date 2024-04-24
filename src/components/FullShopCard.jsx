import React from "react";

const FullShopCard = ({name,imageUrl,location}) => {
  return (
    <div className="w-[90vw] m-auto">
      <div className="flex flex-col w-auto h-auto font-Nunito_Sans bg-slate-50 shadow-2xl shadow-slate-200 my-10">
        <div className="mx-auto">
          <span className="text-3xl font-bold text-slate-900 font-Nunito_Sans">
            Shop/Market Details
          </span>
        </div>
        <div className="flex flex-row justify-between pt-14 pb-0 mx-4">
          <span className="text-xl text- font-bold text-black">
            {name}
          </span>
          <button className="px-2 h-9 font-medium font-Nunito_Sans text-slate-400 hover:text-slate-800 text-2xl border-solid border-2">
            X
          </button>
        </div>
        <div className="py-0 px-3 mt-0 ">
          <p className="py-0 mt-3 flex gap-8">
            <div className="h-[40vh] w-[100vw]  ">
              <img
                className="h-[40vh] w-[100vw]  rounded-sm pb-3 mt-1 mr-8 float-left"
                src={imageUrl}
                alt={name}
              />
            </div>
            <div className="mt-2 flex-col py-3">
              <p className=" text-slate-700 text-md font-semibold py-3 text-wrap">
                One of the best markets in Andaman, it’s not even possible that
                you haven’t heard about Aberdeen Bazaar. From the plain and
                simplest household goods to some very fancy and distinctive
                household goods you will find everything at this market. If you
                think you are a pro at bargaining then Aberdeen Bazaar is the
                place to check out the skills you hone. Your Andaman vacay will
                not be complete if you don’t visit this famous market in
                Andaman.
              </p>
              <p className="text-slate-700 text-sm font-semibold py-3">
                <span className="font-bold text-base text-black">
                  Location:{" "}
                </span>
                Port Blair, Aberdeen Bazaar
              </p>
              <p className="text-slate-700 text-sm font-semibold py-3">
                <span className="font-bold text-base text-black">Timing: </span>
                9:00 AM – 9:00 PM (everyday, except Monday)
              </p>
            </div>
          </p>
        </div>
        <div className="mx-auto pt-6 pb-7 mt-10">
          <button className="h-10 w-20 rounded-lg font-Nunito_Sans uppercase mx-auto border-2 bg-rose-600 text-slate-100 hover:bg-gradient-to-br hover:from-red-600 hover:via-red-500 hover:to-yellow-400">
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default FullShopCard;
