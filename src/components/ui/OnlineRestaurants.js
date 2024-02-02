import React, { useCallback, useRef } from "react";
import RestaurantCard from "../RestaurantCard";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import { fetchRestaurantsData } from "../../state/restaurants/restaurantsSlice";
// import { REQ_PAYLOAD_SCROLL } from "../../utils/constants";

const OnlineRestaurants = ({ data }) => {
  // const dispatch = useDispatch();
  const { restaurantNumber, onlineRestaurants: restaurants } = useSelector(
    (state) => state.restaurants
  );

  /**
   * Code to fetch restaurants on Infinite scroll
   */

  // const observer = useRef();
  // const lastRestaurantRef = useCallback((node) => {
  //   if (observer.current) observer.current.disconnect();
  //   observer.current = new IntersectionObserver((entries) => {
  //     if (entries[0].isIntersecting) {
  //       const payload = REQ_PAYLOAD_SCROLL;
  //       payload.widgetOffset.collectionV5RestaurantListWidget_SimRestoRelevance_food_seo =
  //         restaurantNumber;
  //       dispatch(fetchRestaurantsData(payload));
  //     }
  //   });
  //   if (node) observer.current.observe(node);
  // });

  const isOnlineRes = true;

  return (
    // <div className="p-4 pt-0">
    <div className="">
      <h1 className="text-2xl font-bold pl-4">{data.title}</h1>
      <div className="grid grid-cols-4 gap-8 mx-4 my-8">
        {restaurants?.length > 0 &&
          restaurants.map((res, index) => {
            {
              /* if (index === restaurants.length - 1) {
              return (
                <div key={res.info.id} ref={lastRestaurantRef}>
                  <RestaurantCard res={res} isOnlineRes={isOnlineRes} />
                </div>
              );
            } */
            }
            return (
              <div key={res.info.id} className="transition-all ease-in duration-100 hover:scale-95 min-w-52">
                <Link to={`/restaurant/${res.info.id}`}>
                  <RestaurantCard res={res} isOnlineRes={isOnlineRes} />
                </Link>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default OnlineRestaurants;
