import React from "react";
import RestaurantCard from "../RestaurantCard";
import { Link } from "react-router-dom";

const TopRestaurants = ({ data }) => {
  return (
    <div className="p-4 pt-0">
      <h1 className="text-2xl font-bold mb-5">{data.header.title}</h1>
      <div className="flex overflow-y-hidden overflow-x-scroll scroll-smooth gap-8">
        {data.gridElements?.infoWithStyle?.restaurants?.map((res) => {
          return (
            <div key={res.info.id} className="transition-all ease-in duration-100 hover:scale-95 min-w-72">
              <Link to={`/restaurant/${res.info.id}`}>
                <RestaurantCard res={res} />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TopRestaurants;
