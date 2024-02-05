import React, { useEffect, useState } from "react";
import { ITEM_IMAGE } from "../utils/images";
import { useDispatch, useSelector } from "react-redux";
import AddToCartBtn from "./AddToCartBtn";
import { addToCart, removeItem } from "../state/cart/cartSlice";

const ItemCard = ({ data }) => {
  const dispatch = useDispatch();

  const count = useSelector((state) => {
    if (state.cart.data && state.cart.data.hasOwnProperty(data.id)) {
        return state.cart.data[data.id].count;
    }
  });

  const handleAddToCart = () => {
    dispatch(addToCart(data));
  };

  const handleRemoveItem = () => {
    dispatch(removeItem(data));
  };

  return (
    <div className="flex justify-between gap-5 mt-5 mb-16">
      <div>
        <p className="font-medium mb-1">{data.name}</p>
        <p className="text-sm mb-5">
          ₹{data.price ? data.price / 100 : data.defaultPrice / 100}
        </p>
        <p className="text-xs text-gray-500">{data.description}</p>
      </div>
      <div className="relative">
        <div className="absolute top-[70%] right-1/2 translate-x-[50%]">
          <div className="flex flex-col items-center">
            <AddToCartBtn
              count={count}
              addToCart={handleAddToCart}
              removeItem={handleRemoveItem}
            />
            {data?.addons?.length && (
              <span className="text-[10px] text-gray-500">Customisable</span>
            )}
          </div>
        </div>
        <img
          src={ITEM_IMAGE + data.imageId}
          alt={data.name + " image"}
          className="w-32 min-w-32 h-24 rounded-lg"
        />
      </div>
    </div>
  );
};

export default ItemCard;
