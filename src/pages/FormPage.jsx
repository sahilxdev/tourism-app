import React from "react";
import MainForm from "../components/MainForm";

const FormPage = () => {
  return (
    <div>
      <div>
        <div className=" flex  items-center mt-5 ml-[5%] ms:mb-2 mb-[30px] ms:gap-0.5 gap-2">
          <span className="text-red-400">Hotels</span> <span>›</span>{" "}
          <span className="text-red-400">Andaman Castle</span> <span>›</span>{" "}
          Contact Form
        </div>
        <MainForm />
      </div>
    </div>
  );
};

export default FormPage;
