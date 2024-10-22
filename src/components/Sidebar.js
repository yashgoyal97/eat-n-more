import React from "react";
import { useDispatch } from "react-redux";
import { closeAddressForm } from "../state/address/addressSlice";

const Sidebar = ({ openSidebar = true, heading = "Heading", children }) => {
  const dispatch = useDispatch();
  //   const [open, setOpen] = useState(openSidebar);
  
  //   const openSidebar = () => {
  //     setOpen(true);
  //   };

  const closeSidebar = () => {
    dispatch(closeAddressForm());
    // setOpen(false);
  };

  return (
    <div
      className={
        "bg-white fixed top-0 w-1/3 h-full z-10 p-10 pl-16 transition-all ease-in duration-200 " +
        (openSidebar ? "translate-x-0" : "translate-x-[-100%]")
      }
    >
      <div className="flex gap-8 font-bold text-xl mb-10">
        <span className="cursor-pointer" onClick={closeSidebar}>
          ⛌
        </span>
        <h4>{heading}</h4>
      </div>
      <div className="bg-white w-full">{children}</div>
    </div>
  );
};

export default Sidebar;
