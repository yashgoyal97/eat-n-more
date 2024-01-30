import React, { useEffect, useRef, useState } from "react";
import MagnifyingGlass from "../utils/icons/MagnifyingGlass";

const Input = () => {
  const [expanded, setExpanded] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    const input = inputRef.current;
    if (expanded) {
      input.disabled = false;
      input.focus();
    } else {
      input.disabled = true;
      input.value = "";
    }
  }, [expanded]);
  return (
    <div
      className="search relative text-black"
      onClick={() => setExpanded(!expanded)}
    >
      <input
        ref={inputRef}
        placeholder={expanded ? "Search" : ""}
        disabled
        className={
          "h-[50px] py-2 px-5 bg-white border-0 outline-none transition-all ease-in duration-200 " +
          (expanded
            ? "w-80 focus:border-2 rounded focus:border-orange-600"
            : "w-[50px]")
        }
      />
      <div className="p-2 w-[50px] h-[50px] flex justify-center items-center absolute top-0 right-2 cursor-pointer">
        <MagnifyingGlass />
      </div>
    </div>
  );
};

export default Input;
