import React, { useState } from "react";
import MyDatePicker from "./DatePicker";


const Ticket = ({ count, Data, name }) => {
  const [tickets, setTickets] = useState(1);
  const [selectedDate, setSelectedDate] = useState(null);
  // const theDate = selectedDate.toLocaleDateString()
  // can store the date's value and pass it wherever we want

  const increaseTickets = () => {
    setTickets(tickets + 1);
  };

  const decreaseTickets = () => {
    if (tickets > 1) {
      setTickets(tickets - 1);
    }
  };

  const handleDateChangeFromChild = (date) => {
    setSelectedDate(date);
    // Handle the received date here (e.g., display, use in calculations)
    console.log("Selected date in parent:", date);
  };

  return (
    <div>
      <div className="flex flex-col gap-2 p-5 shadow-lg w-full">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Tickets</h1>
          <div>
            <button
              onClick={decreaseTickets}
              className="px-5 text-4xl align-middle"
            >
              -
            </button>
            <input
              value={tickets}
              onChange={(e) => setTickets(e.target.value)}
              className="w-10 p-2 border border-red-400 rounded text-center"
              disabled
              type=""
            />
            <button
              onClick={increaseTickets}
              className="px-5 text-3xl align-middle"
            >
              +
            </button>
          </div>
        </div>
        <div className="flex justify-between text-lg">
          <label className="font-medium" htmlFor="Location">
            {name}
          </label>
          <select className="p-2 rounded-md" name="name" id="">
            <option value="">Select</option>
            {Array(6)
              .fill(null)
              .map((_, index) => (
                <option key={index} value="">{Data[index].name}</option>))}
          </select>
        </div>
        <div className="flex justify-between">
          <h1 className="font-medium">Total Price</h1>
          <h1>₹ {tickets * 100 * Math.ceil(count + 1 / 10)}</h1>
        </div>
        <div className="flex justify-between items-center">
          <h1 className="font-medium">Select Date</h1>
          <MyDatePicker onDateChange={handleDateChangeFromChild} />
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="Name">Name</label>
          <input
            className="bg-gray-50 border border-gray-300 rounded-md p-2 my-2"
            type="text"
            placeholder="Provide Your Name Here"
          />
          <label htmlFor="Contact">Contact</label>
          <input
            className="bg-gray-50 border border-gray-300 rounded-md p-2 my-2"
            type="text"
            placeholder="Provide Your Contact Number"
          />
        </div>
        <button className="bg-slate-800 text-white p-4 rounded-md">
          Confirm Booking
        </button>
      </div>
    </div>
  );
};

export default Ticket;
