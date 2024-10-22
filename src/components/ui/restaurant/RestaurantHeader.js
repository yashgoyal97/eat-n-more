import React from "react";
import TimeIcon from "../../../utils/icons/TimeIcon";
import CostIcon from "../../../utils/icons/CostIcon";

const RestaurantHeader = ({ resDetails }) => {
  const { info } = resDetails.card.card;
  return (
    <div className="m-5">
      <div className="flex justify-between">
        <div>
          <h4 className="font-semibold text-xl mb-3">{info.name}</h4>
          <p className="text-xs text-gray-500">{info.cuisines?.join(", ")}</p>
          <p className="text-xs text-gray-500">{info.areaName}</p>
        </div>
        <div className="border-[1px] border-gray-200 p-2 rounded-lg flex flex-col items-center justify-center">
          <span className="font-bold text-sm text-green-800">
            ★ {info.avgRatingString}
          </span>
          <hr className="w-full my-2" />
          <p className="text-[10px] font-bold text-gray-500">
            {info.totalRatingsString}
          </p>
        </div>
      </div>
      <hr className="w-full my-5 border-t-[1px] border-dashed border-gray-300" />
      <div className="flex gap-5">
        <span className="flex gap-2 items-center font-bold text-sm">
          <TimeIcon /> <p>{info.sla.slaString}</p>
        </span>
        <span className="flex gap-2 items-center">
          <CostIcon />
          <p className="font-bold text-sm">{info.costForTwoMessage}</p>
        </span>
      </div>
    </div>
  );
};

export default RestaurantHeader;
