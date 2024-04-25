import React from "react";
import ShoppingCard from "../components/ShoppingCard";
import { ShoppingData } from "../hooks";

const ShopPage = () => {
  return (
    <div className="shop-page container  mx-auto py-12 ">
      <h1 className="text-2xl md:text-4xl font-bold text-center mb-8">Famous Shops in Andaman</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mx-20 md:mx-0 w-[90vw] -translate-x-14 md:-translate-x-0  md:w-full">
        {ShoppingData.map((item, index) => (
          <ShoppingCard
            key={item.id || index}
            name={item.name}
            imageUrl={item.imageUrl}
            location={item.location}
            brief={item.brief}
          />
        ))}
      </div>
    </div>
  );
};

export default ShopPage;
