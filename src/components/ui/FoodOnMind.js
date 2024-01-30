import React from "react";
import { FOOD_ON_MIND } from "../../utils/images";

const FoodOnMind = ({ data }) => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold pt-4 pl-4 pb-1">{data.header.title}</h1>
      <div className="flex overflow-x-scroll scroll-smooth">
        {data.gridElements?.infoWithStyle?.info?.map((item) => {
          return (
            <div key={item.id} className="min-w-max px-4">
              <img src={FOOD_ON_MIND + item.imageId} className="w-36 h-44" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FoodOnMind;
