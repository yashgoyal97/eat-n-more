import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getResUrl } from "../utils/constants";
import {
  fetchRestaurantData,
  reset,
} from "../state/restaurant/restaurantSlice";
import { useDispatch, useSelector } from "react-redux";
import RestaurantHeader from "../components/ui/restaurant/RestaurantHeader";
import RestaurantOffers from "../components/ui/restaurant/RestaurantOffers";
import RestaurantMenu from "../components/ui/restaurant/RestaurantMenu";

const Restaurant = () => {
  const dispatch = useDispatch();
  const { resId } = useParams();

  useEffect(() => {
    const resUrl = getResUrl(resId);
    dispatch(fetchRestaurantData(resUrl));
    return () => {
      dispatch(reset());
    };
  }, []);

  const { restaurantData } = useSelector((state) => state.restaurant);

  if (!restaurantData || !restaurantData.cards) {
    return (
      <div className="m-auto h-100vh w-3/5 py-4 text-xl font-bold">
        Loading...
      </div>
    );
  }

  const resDetails = restaurantData.cards[2];
  const offers = restaurantData.cards[3].card?.card?.gridElements?.infoWithStyle?.offers;
  const menu = restaurantData.cards[4];
  const categories = menu?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  return (
    <div className="w-100vw">
      <div className="m-auto h-100vh w-3/5">
        <RestaurantHeader resDetails={resDetails} />
        <RestaurantOffers offers={offers} />
        <RestaurantMenu categories={categories} />
      </div>
    </div>
  );
};

export default Restaurant;
