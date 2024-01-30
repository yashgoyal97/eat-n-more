import React from "react";
import { APP_LOGO } from "../../utils/images";
import { Link } from "react-router-dom";
import Input from "../Input";

const AppHeader = () => {
  return (
    <div className="w-10/12 m-auto py-5 flex justify-between items-center">
      <img src={APP_LOGO} className="w-20 h-20 rounded-full" />
      <nav className="flex items-center gap-16">
        <Input />
        <Link to="/cart">
          <span className="font-semibold transition-all ease-in duration-100 hover:text-orange-600 hover:scale-110">
            Cart
          </span>
        </Link>
        <Link to="/profile">
          <span className="font-semibold transition-all ease-in duration-100 hover:text-orange-600 hover:scale-110">
            Yash
          </span>
        </Link>
      </nav>
    </div>
  );
};

export default AppHeader;
