import React from "react";
import DiningCard from "../components/DiningCard";
import { DiningData } from "../hooks";

const DiningPage = () => {
  return (
    <div className="flex flex-col justify-center items-center">
        <h1 className="my-12 text-3xl font-medium">😍 Well Known Dining Space's in Andaman 😋 🍽️</h1>
      <div className="grid grid-cols-3">
        {DiningData
          .map((item, index) => (
            <DiningCard
              key={ item.id || index}
              name={item.name}
              imageUrl={item.imageUrl}
              url={item.url}
              location={item.location}
              cusine={item.cusine}
            />
          ))}
      </div>
    </div>
  );
};

export default DiningPage;
