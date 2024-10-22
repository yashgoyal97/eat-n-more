import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../utils/pictures/logo.png";
import profile from "../../utils/pictures/profile.jpg";
import CartIcon from "../../utils/icons/CartIcon";
import { useSelector } from "react-redux";
import SearchInput from "../SearchInput";

const AppHeader = () => {
  const [isHovered, setIsHovered] = useState(false);
  // const [totalItems, setTotalItems] = useState(0);

  const totalItems = useSelector((state) => state.cart.totalItems);

  // useEffect(() => {
  //   if (cart && Object.keys(cart).length) {
  //     setTotalItems(Object.keys(cart).length);
  //   } else {
  //     setTotalItems(0);
  //   }
  // }, [cart]);

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
          <SearchInput />
          {/* <Link to="/profile">
            <div className="flex items-center gap-2 font-medium transition-all ease-in duration-200 hover:text-orange-600 hover:scale-[115%]">
              <img className="w-10 rounded-full" src={profile} />
              <span>&lt;YashGoyal &#47;&gt;</span>
            </div>
          </Link> */}
          <Link to="/cart">
            <div
              onMouseOver={() => setIsHovered(true)}
              onMouseOut={() => setIsHovered(false)}
              className="flex items-center gap-2 font-medium transition-all ease-in duration-200 hover:text-orange-600 hover:scale-[115%]"
            >
              <div className="relative">
                {totalItems > 0 && (
                  <span className="absolute bottom-[15px] left-[9px] z-10 bg-white text-orange-600 leading-4 font-semibold">
                    {totalItems}
                  </span>
                )}
                <CartIcon isHovered={isHovered} />
              </div>
              <span>Cart</span>
            </div>
          </Link>
          <Link to="/profile">
            <div className="flex items-center gap-2 font-medium transition-all ease-in duration-200 hover:text-orange-600 hover:scale-[115%]">
              <img className="w-10 rounded-full" src={profile} />
            </div>
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default AppHeader;
