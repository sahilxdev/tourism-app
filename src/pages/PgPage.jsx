import React from "react";
import PgCard from "../components/PgCard";
import { PgData } from "../hooks";


const PgPage = () => {
  return (
    <div>
      <div>
        <div className="grid grid-cols-3 m-8 gap-8">
          {PgData.map((item) => (
            <PgCard
              key={item.id}
              name={item.name}
              price={item.price}
              rating={item.rating}
              url={item.url}
              location={item.location}
            />
          ))}
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default PgPage;
