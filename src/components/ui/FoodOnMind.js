import React from "react";
import { FOOD_ON_MIND } from "../../utils/images";

const FoodOnMind = ({ data }) => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{data.header.title}</h1>
      <div className="flex overflow-x-scroll scroll-smooth gap-8">
        {data.gridElements?.infoWithStyle?.info?.map((item) => {
          return (
            <div key={item.id} className="min-w-max cursor-pointer">
              <img src={FOOD_ON_MIND + item.imageId} className="w-36 h-44" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FoodOnMind;
