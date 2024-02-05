import React from "react";
import CollapseIcon from "../utils/icons/CollapseIcon";
import ExpandIcon from "../utils/icons/ExpandIcon";
import ItemCard from "./ItemCard";

const Accordian = ({ data, expanded, expandModule, collapseAll }) => {
  const handleToggle = () => {
    if (expanded) {
      collapseAll();
    } else {
      expandModule();
    }
  };

  return (
    <div className="p-5">
      <div
        className="flex justify-between cursor-pointer"
        onClick={() => handleToggle()}
      >
        <h4 className="font-bold text-lg">{data.title}</h4>
        <span>{expanded ? <CollapseIcon /> : <ExpandIcon />}</span>
      </div>
      <div className={expanded ? "block" : "hidden"}>
        {data?.itemCards?.map((item, index) => {
          return (
            <div key={item.card.info.id}>
              <ItemCard data={item.card.info} />
              {index < data.itemCards.length - 1 && <hr />}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Accordian;
