import React from "react";
import { TOP_RESTAURANT } from "../../utils/images";
import RatingStar from "../../utils/icons/RatingStar";

const TopRestaurants = ({ data }) => {
  console.log(data);
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold pt-2 pl-4 pb-[18px]">
        {data.header.title}
      </h1>
      <div className="flex overflow-y-hidden overflow-x-scroll scroll-smooth">
        {data.gridElements?.infoWithStyle?.restaurants?.map((res) => {
          const { name, cuisines } = res.info;
          let cuisinesStr =
            cuisines.length > 3
              ? [...cuisines.slice(0, 3), "..."].join(", ")
              : cuisines.join(", ");
          cuisinesStr =
            cuisinesStr.length > 30
              ? cuisinesStr.slice(0, 30) + "..."
              : cuisinesStr;
          const resName = name.length > 21 ? name.slice(0, 21) + "..." : name;
          return (
            <div
              key={res.info.id}
              className="px-4 min-w-72 transition-all ease-in duration-100 hover:scale-95"
            >
              <div className="w-full">
                <img
                  className="w-full rounded-2xl h-44 object-cover mb-3"
                  src={TOP_RESTAURANT + res.info.cloudinaryImageId}
                />
              </div>
              <div className="ml-3">
                <h3 className="font-semibold text-lg">{resName}</h3>
                <h4 className="font-semibold flex items-center gap-3">
                  <div className="flex gap-1 items-center">
                    <RatingStar />
                    <span>{res.info.avgRatingString}</span>
                  </div>
                  <div className="flex gap-1 items-center">
                    <span>⏱️</span>
                    <span>{res.info.sla.slaString}</span>
                  </div>
                </h4>
                <span className="font-light text-gray-500">
                  {cuisinesStr}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TopRestaurants;
