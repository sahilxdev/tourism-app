import React from "react";
import PlacesCard from "../components/PlacesCard";
import { IslandsData } from "../hooks";
import FlightSearch from "../components/SearchBar";

const Flights = () => {
  return (
    <div>
        <div>
            <FlightSearch /> 
        </div>
        <div className="flex justify-center">
        <div className="mt-8 grid grid-cols-3 gap-8 z-10">
        {IslandsData.map((items)=> (<PlacesCard
        key={1}
        reviews={items.reviews}
        subtitle={items.subtitle}
        title={items.title}
        imageUrl={items.imageUrl}
        />) )}
      
    </div>
    </div>
    </div>
  );
};

export default Flights;
