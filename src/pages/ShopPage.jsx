import React from "react";
import ShoppingCard from "../components/ShoppingCard";
import { ShoppingData } from "../hooks";

const ShopPage = () => {
  return (
    <div className="shop-page container mx-auto px-64 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">Famous Shops in Andaman</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
