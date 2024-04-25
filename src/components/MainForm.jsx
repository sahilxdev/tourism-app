import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import SideBanner from "./SideBanner";

const MainForm = () => {
  const form = useRef();
  const [message, setMessage] = useState(""); // State for message
  const hotel= "Andaman Castle"; // Pre-filled hotel info
  const address = "South Point, Shadipur, Port Blair"; // Pre-filled address

  const sendEmail = (e) => {
    e.preventDefault();

    const startDate = form.current.elements.start_date.value;
    const endDate = form.current.elements.end_date.value;

    const daysInMs = 1000 * 60 * 60 * 24;
    const startDateObj = new Date(startDate);
    const endDateObj = new Date(endDate);
    const diffInMs = endDateObj.getTime() - startDateObj.getTime();
    const noOfDays = Math.ceil(diffInMs / daysInMs);

    form.current.elements.no_of_days.value = noOfDays;

    emailjs
      .sendForm("service_oke7k2m", "template_z131glj", form.current, {
        publicKey: "0nthqzXAT_qSjltTG",
        message: message,
        address: address,
        hotel: hotel,
        no_of_days: noOfDays,
        startDate: startDate,
        endDate: endDate,
        // Include hidden field values
        hiddenHotel: hotel,
        hiddenAddress: address,
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="w-[90%] block md:flex  md:justify-center items-stretch mx-auto my-6 shadow-xl rounded-lg">
      <form
        ref={form}
        onSubmit={sendEmail}
        className="w-full bg-white overflow-hidden border border-gray-300 
        p-12 md:p-6 lg:p-8"
      >
        <h1 className="text-[#699c78] text-[26px] md:text-2xl md:text-center font-montserrat font-bold mb-6 md:mb-3 tracking-wide">
          Book your Hotel
        </h1>
        <div className="flex flex-col gap-1">
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="h-[40px] outline-none  p-4 rounded-md border border-gray-300 focus:border-2 focus:border-slate-400"
          />
        </div>
        <div className="flex flex-col gap-1 mt-5 ">
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="h-[40px] outline-none p-4 rounded-md border border-gray-300 focus:border-2 focus:border-slate-400"
          />
        </div>
        <div className="flex flex-col gap-1 mt-5">
          <input
            type="tel"
            name="phone"
            placeholder="Phone number"
            className="h-[45px] outline-none p-4 rounded-md border border-gray-300 focus:border-2 focus:border-slate-400"
          />
        </div>
        <div className="flex flex-col gap-1 mt-5">
          <input
            type="text"
            name="hotel"
            placeholder="Hotel"
            value={hotel}
            className="h-[45px] outline-none p-4 rounded-md border border-gray-300 focus:border-2 focus:border-slate-400"
          />
        </div>
        <div className="flex flex-col gap-1 my-5 ">
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={address}
            className="h-[45px] outline-none p-4 rounded-md border border-gray-300 focus:border-2 focus:border-slate-400 "
          />
        </div>
        <input type="hidden" name="hiddenHotel" value={hotel} />{" "}
        {/* Hidden field for hotel */}
        <input type="hidden" name="hiddenAddress" value={address} />{" "}
        {/* Hidden field for address */}
        <input
          type="text"
          name="no_of_room"
          placeholder="No. of Room"
          value="1"
          className="h-[45px] outline-none px-4 rounded-md border border-gray-300 focus:border-2 focus:border-slate-400"
        />
        <div className="flex flex-col gap-1 mt-5 ">
          <input
            type="text"
            name="no_of_people"
            placeholder="No. of People"
            value="1"
            className="h-[45px] outline-none px-4 rounded-md border border-gray-300 focus:border-2 focus:border-slate-400 "
          />
        </div>
        <div className="flex justify-between items-center my-4">
          <label htmlFor="start_date" className="text-gray-700 font-medium">
            Start Date:
          </label>
          <input
            type="date"
            name="start_date"
            id="start_date"
            className="h-[45px] outline-none px-4 rounded-md border border-gray-300 focus:border-2 focus:border-slate-400"
          />
        </div>
        <div className="flex justify-between items-center my-4">
          <label htmlFor="end_date" className="text-gray-700 font-medium">
            End Date:
          </label>
          <input
            type="date"
            name="end_date"
            id="end_date"
            className="h-[45px] outline-none px-4 rounded-md border border-gray-300 focus:border-2 focus:border-slate-400"
          />
        </div>
        <div className="flex flex-col gap-1 mt-5">
          <input
            type="text"
            name="no_of_days"
            placeholder="No. of Days Staying"
            value="5"
            className="h-[45px] outline-none p-4 rounded-md border border-gray-300 focus:border-2 focus:border-slate-400"
          />
        </div>
        <div className="flex flex-col gap-1 mt-5">
          <span className="font-bold ml-3">* optional *</span>
          <textarea
            name="message"
            placeholder="Optional Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="h-[90px] outline-none p-3 rounded-md resize-none border border-gray-300 focus:border-2 focus:border-slate-400"
          />
        </div>
        <input
          type="submit"
          value="Send"
          className="bg-[#408c57] shadow-2xl hover:bg-[#51795d]
                  text-white text-[21px] md:text-[16px] tracking-wider font-montserrat font-semibold rounded-full
                  p-2 w-full mt-6"
        />
      </form>
      <SideBanner/>
    </div>
  );
};

export default MainForm;
