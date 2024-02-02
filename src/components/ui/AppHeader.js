import React, { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../Input";
import logo from "../../utils/pictures/logo.png";
import profile from "../../utils/pictures/profile.jpg";
import CartIcon from "../../utils/icons/CartIcon";

const AppHeader = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="w-100vw shadow">
      <div className="w-10/12 m-auto py-4 flex justify-between items-center">
        <Link to="/">
          <img
            src={logo}
            className="w-40 transition-all ease-in duration-100 hover:scale-110"
          />
        </Link>
        <nav className="flex items-center gap-16">
          <Input />
          <Link to="/profile">
            <div className="flex items-center gap-2 font-medium transition-all ease-in duration-200 hover:text-orange-600 hover:scale-[115%]">
              <img className="w-10 rounded-full" src={profile} />
              <span>&lt;YashGoyal &#92;&gt;</span>
              {/* <span>&lt;DeveloperProfile &#92;&gt;</span> */}
            </div>
          </Link>
          <Link to="/cart">
            <div
              onMouseOver={() => setIsHovered(true)}
              onMouseOut={() => setIsHovered(false)}
              className="flex items-center gap-2 font-medium transition-all ease-in duration-200 hover:text-orange-600 hover:scale-[115%]"
            >
              <div className="relative">
                <span className="absolute bottom-[15px] left-[9px] z-10 bg-white text-orange-600 text-lg leading-4 font-bold">
                  1
                </span>
                <CartIcon isHovered={isHovered} />
              </div>
              <span>Cart</span>
            </div>
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default AppHeader;
