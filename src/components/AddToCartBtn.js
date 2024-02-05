import React from "react";

const AddToCartBtn = ({ count, addToCart, removeItem }) => {
  return (
    <div className="bg-white border-[1px] border-gray-200 shadow-md shadow-white hover:shadow-gray-200 w-24 h-9 rounded cursor-pointer">
      {count > 0 ? (
        <div className="h-full w-full flex justify-center items-center text-green-600">
          <button className="pr-3 text-gray-500" onClick={removeItem}>
            -
          </button>
          <input
            className="max-w-6 text-center text-sm font-bold focus:outline-none cursor-pointer"
            value={count}
            readOnly
          />
          <button className="pl-3 hover:scale-110" onClick={addToCart}>
            +
          </button>
        </div>
      ) : (
        <div
          className=" h-full w-full flex justify-center items-center relative text-green-600"
          onClick={addToCart}
        >
          <button className="text-xs font-bold">ADD</button>
          {!count && (
            <span className="text-[10px] absolute right-[5%] top-0">+</span>
          )}
        </div>
      )}
    </div>
  );
};

export default AddToCartBtn;
