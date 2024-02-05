import React, { useEffect } from "react";
import FoodOnMind from "./FoodOnMind";
import { useSelector } from "react-redux";
import TopRestaurants from "./TopRestaurants";
import OnlineRestaurants from "./OnlineRestaurants";

const AppBody = () => {
  const data = useSelector((state) => state.main.data);
  if (!data) {
    return (
      <div className="w-9/12 m-auto py-4 text-xl font-bold">Loading...</div>
    );
  }

  const { cards } = data;
  const fomData = cards[0].card.card;
  const topRestaurants = cards[1].card.card;
  const onlineRestaurants = {
    title: cards[2].card.card.title,
    filters: cards[3].card.card,
  };

  return (
    <div className="w-100vw">
      <div className="w-9/12 m-auto h-100vh">
        <FoodOnMind data={fomData} />
        <hr className="my-8 mx-4" />
        <TopRestaurants data={topRestaurants} />
        <hr className="my-8 mx-4" />
        <OnlineRestaurants data={onlineRestaurants} />
      </div>
    </div>
  );
};

export default AppBody;
