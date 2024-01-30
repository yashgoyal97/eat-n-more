import React from "react";
import FoodOnMind from "./FoodOnMind";
import { useSelector } from "react-redux";
import TopRestaurants from "./TopRestaurants";

const AppBody = () => {
  const data = useSelector((state) => state.main.data);

  if (!data.length) {
    return (
      <div className="w-9/12 m-auto py-4 text-2xl font-bold">Loading...</div>
    );
  }

  const fomData = data[0].card.card;
  const topRestaurants = data[1].card.card;

  return (
    <div className="w-9/12 m-auto h-100vh">
      <FoodOnMind data={fomData} />
      <hr className="my-8 mx-8" />
      <TopRestaurants data={topRestaurants} />
    </div>
  );
};

export default AppBody;
