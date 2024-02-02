import React from "react";

const CartIcon = ({ isHovered }) => {
  return (
    <svg
      width="256px"
      height="256px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="#000000"
      transform="matrix(1, 0, 0, 1, 0, 0)"
      className="w-6 h-6"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke="#CCCCCC"
        strokeWidth="0.336"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <path
          d="M21 5L19 12H7.37671M20 16H8L6 3H3M16 5.5H13.5M13.5 5.5H11M13.5 5.5V8M13.5 5.5V3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z"
          //   stroke="#ea580c"
          stroke="#000000"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={
            isHovered
              ? "transition-all ease-in duration-200 stroke-orange-600"
              : "stroke-black"
          }
        ></path>{" "}
      </g>
    </svg>
  );
};

export default CartIcon;
