import React, { useEffect, useState } from "react";
import Accordian from "../../Accordian";

const RestaurantMenu = ({ categories }) => {
  const [expandIndex, setExpandIndex] = useState(1);
  useEffect(() => {
    setExpandIndex(
      categories[1].card.card["@type"].includes("MenuCarousel") ? 2 : 1
    );
  }, [categories]);

  return (
    <div className="m-5">
      {categories &&
        categories.length &&
        categories.map((category, index) => {
          const { card } = category.card;
          if (card["@type"].includes("ItemCategory")) {
            return (
              <div key={index}>
                <Accordian
                  data={card}
                  expanded={expandIndex === index}
                  expandModule={() => setExpandIndex(index)}
                  collapseAll={() => setExpandIndex(Number.MIN_VALUE)}
                />
                <hr
                  className={
                    index === categories.length - 3 ? "hidden" : "border-t-8"
                  }
                />
              </div>
            );
          } else if (card["@type"].includes("MenuCarousel")) {
            return (
              <div key={index}>
                {/* <div>
                  <h4 className="font-bold text-xl">{card.title}</h4>
                </div>
                <div></div> */}
              </div>
            );
          } else return <></>;
        })}
    </div>
  );
};

export default RestaurantMenu;
