import React from "react";
import { TOP_RESTAURANT } from "../utils/images";
import StarIcon from "../utils/icons/StarIcon";

const RestaurantCard = ({ res, isOnlineRes }) => {
  return (
    <>
      <div className="w-full">
        <img
          className={
            "w-full rounded-2xl object-cover mb-3 " +
            (isOnlineRes ? "h-36" : "h-44")
          }
          alt="restaurant"
          src={TOP_RESTAURANT + res.info.cloudinaryImageId}
        />
      </div>
      <div className="ml-3">
        <h3 className="font-semibold text-lg whitespace-nowrap overflow-hidden text-ellipsis">
          {res.info.name}
        </h3>
        <h4 className="font-semibold flex items-center gap-3">
          <div className="flex gap-1 items-center">
            <StarIcon />
            <span>{res.info.avgRatingString}</span>
          </div>
          <div className="flex gap-1 items-center">
            <span>⏱️</span>
            <span>{res.info.sla.slaString}</span>
          </div>
        </h4>
        <p className="font-light text-gray-500 whitespace-nowrap overflow-hidden text-ellipsis">
          {res.info.cuisines.join(", ")}
        </p>
      </div>
    </>
  );
};

export default RestaurantCard;
