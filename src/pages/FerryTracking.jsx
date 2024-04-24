import React, { useState } from "react";
import { FerryTrackingData } from "../hooks";
import FerryCard from "../components/FerryCard";

function FerryTracking() {
  const [showModal, setShowModal] = useState(false);
  const [selectedRoute, setSelectedRoute] = useState(1);

  const handleTrackClick = (id) => {
    setSelectedRoute(id);
    setShowModal(true);
  };

  return (
    <div className="mt-10 flex justify-center items-center">
      <div>
        <table className="table-auto w-full ">
          <thead>
            {/* Table headings */}
            <tr className="bg-gray-200 text-left text-lg font-medium">
              <th className="px-3 py-5 text-center">Routes</th>
              <th className="px-3 py-5 text-center">Estimated Timings</th>
              <th className="px-3 py-5 text-center">Ferry Tracking</th>
            </tr>
          </thead>
          <tbody>
            {/* Generate rows from data */}
            {FerryTrackingData.map((item) => (
              <tr key={item.id}>
                <td className="px-3 py-2 border border-gray-200">
                  {/* Combine starting and destination route */}
                  {`${item.route.split("-")[0]} - ${item.route.split("-")[1]}`}
                </td>
                <td className="px-3 py- border border-gray-200 text-center">
                  2 Hours
                </td>
                <td className="px-3 py-2 border border-gray-200 text-center">
                  {/* Track Now button */}
                  <button
                    onClick={() =>  handleTrackClick(item.id)}
                    className="px-2 py-1 text-white bg-blue-500 rounded hover:bg-blue-700"
                  >
                    Track Now
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div
          className={`fixed inset-0 z-50 overflow-y-auto px-4 py-6 md:p-8 bg-opacity-50 backdrop-blur backdrop-filter transition-all duration-300 ease-in-out ${
            !showModal && "hidden"
          }`}
        >
          <div className="mt-36 flex flex-col relative w-full max-w-2xl mx-auto shadow-lg rounded-xl bg-white p-6 md:p-8">
            <div className="">
            <div>
              <h4 className="text-xl">Hello,</h4>
              <h3 className="mb-6 text-3xl font-semibold">
                Tracking your ride
              </h3>
            </div>
            <button
              className="absolute top-5 right-5 bg-red-500 text-white font-bold px-6 py-2 rounded shadow hover:shadow-md"
              onClick={() => setShowModal(false)}
            >
              X
            </button>
            <div>
            </div>
              <FerryCard
                From={FerryTrackingData[selectedRoute - 1].route.split("-")[0]}
                To={FerryTrackingData[selectedRoute - 1].route.split("-")[1]}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FerryTracking;
