import React, { useState } from "react";

function FlightSearch() {
  const [adult, setAdult] = useState(1);
  const [children, setChildren] = useState(1);
  const [infant, setInfant] = useState(1);
  const [room, setRoom] = useState(1);
  const [modal, setModal] = useState(false);

  const handleAdultClickneg = () => {
    if (adult > 1) {
      setAdult(adult - 1);
    }
  };

  const handleAdultClickpos = () => {
    setAdult(adult + 1);
  };

  const handleChildrenClickneg = () => {
    if (children > 1) {
      setChildren(children - 1);
    }
  };

  const handleChildrenClickpos = () => {
    setChildren(children + 1);
  };

  const handleInfantClickneg = () => {
    if (infant > 1) {
      setInfant(infant - 1);
    }
  };

  const handleInfantClickpos = () => {
    setInfant(infant + 1);
  };

  const handleRoomClickneg = () => {
    if (room > 1) {
      setRoom(room - 1);
    }
  };

  const handleRoomClickpos = () => {
    setRoom(room + 1);
  };

  return (
    <div className="p-8 bg-gradient-to-b from-blue-900 opacity-80 to-transparent mt-2 min-h-96 flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold mb-8 text-white">
        Search your flights
      </h1>
      <div className="flex justify-between w-full max-w-md bg-white rounded-md shadow-md p-4">
        <div className="flex flex-col">
          <label
            htmlFor="from"
            className="mb-2 text-sm font-medium text-gray-700"
          >
            FROM
          </label>
          <select
            id="from"
            name="from"
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
          >
            <option value="Chennai">Chennai</option>
            <option value="Delhi">Delhi</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Kolkata">Kolkata</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="to"
            className="mb-2 text-sm font-medium text-gray-700"
          >
            TO
          </label>
          <select
            id="to"
            name="to"
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
          >
            <option value="Port Blair">Port Blair</option>
            <option value="Goa">Goa</option>
            <option value="Kerala">Kerala</option>
            <option value="Himachal Pradesh">Himachal Pradesh</option>
          </select>
        </div>
      </div>
      <div className="flex justify-between items-center w-full max-w-md mt-4">
        <div className="flex flex-col">
          <label
            htmlFor="departure"
            className="mb-2 text-sm font-medium text-gray-700"
          >
            DEPARTURE
          </label>
          <input
            type="date"
            id="departure"
            name="departure"
            defaultValue="2024-04-24"
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="return"
            className="mb-2 text-sm font-medium text-gray-700"
          >
            RETURN
          </label>
          <input
            type="date"
            id="return"
            name="return"
            defaultValue="2024-05-24"
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
            placeholder="Tap to add a return date"
          />
        </div>
      </div>
      <div className="flex justify-between items-center w-full max-w-md mt-4">
        <div className="flex flex-col">
          <label
            htmlFor="travellers"
            className="mb-2 text-sm font-medium text-gray-700"
          >
            Travellers
          </label>
          <div>
            <div className="flex  w-full max-w-36 cursor-pointer bg-white hover:bg-slate-200 px-8  rounded-xl">
              <button
                onClick={() => setModal(!modal)}
                type="text"
                className="w-[1000px]"
              >{`${room} Room(s),  ${
                adult + children + infant
              } Guest(s)`}</button>
            </div>
            <div
              className={`absolute bg-white border border-slate-600 rounded-xl right-[610px] mt-[-200px] p-7  ${
                !modal ? "hidden" : "visible"
              }`}
            >
              <div className="flex justify-between text-xl ">
                <span>Adult</span>{" "}
                <span className="flex pl-5">
                  <button className="text-3xl" onClick={handleAdultClickneg}>
                    -
                  </button>{" "}
                  <input
                    className="w-5 text-center mx-5"
                    disabled
                    type=""
                    value={adult}
                  />{" "}
                  <button className="text-2xl" onClick={handleAdultClickpos}>
                    +
                  </button>
                </span>
              </div>
              <div className="flex justify-between text-xl">
                <span>Children</span>{" "}
                <span className="flex pl-5">
                  <button className="text-3xl" onClick={handleChildrenClickneg}>
                    -
                  </button>{" "}
                  <input
                    className="w-5 text-center mx-5"
                    disabled
                    type=""
                    value={children}
                  />{" "}
                  <button className="text-2xl" onClick={handleChildrenClickpos}>
                    +
                  </button>
                </span>
              </div>
              <div className="flex justify-between text-xl">
                <span>Infant</span>{" "}
                <span className="flex pl-5">
                  <button className="text-3xl" onClick={handleInfantClickneg}>
                    -
                  </button>{" "}
                  <input
                    className="w-5 text-center mx-5"
                    disabled
                    type=""
                    value={infant}
                  />{" "}
                  <button className="text-2xl" onClick={handleInfantClickpos}>
                    +
                  </button>
                </span>
              </div>
              <div className="flex justify-between text-xl">
                <span>Room</span>{" "}
                <span className="flex pl-5">
                  <button className="text-3xl" onClick={handleRoomClickneg}>
                    -
                  </button>{" "}
                  <input
                    className="w-5 text-center mx-5"
                    disabled
                    type=""
                    value={room}
                  />{" "}
                  <button className="text-2xl" onClick={handleRoomClickpos}>
                    +
                  </button>
                </span>
              </div>
            </div>
          </div>
        </div>
        <button className="w-40 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-8 rounded-md shadow-sm">
          Search
        </button>
      </div>
      <h1 className='text-center text-3xl mt-12 font-medium'>Your Search Results</h1>
    </div>
  );
}

export default FlightSearch;
