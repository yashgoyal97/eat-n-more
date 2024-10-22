import React from "react";
import { Link } from "react-router-dom";
import logo from "../utils/pictures/logo.png";

const Error = () => {
  // const error = useRouteError();
  return (
    <div className="h-screen flex flex-col gap-5 justify-center items-center">
      <p className="font-medium text-xl">The page you are looking for is</p>
      <p className="text-5xl bg-orange-500 text-white font-bold border-4 border-orange-500 rounded p-5">⚠️ WORK IN PROGRESS</p>
      {/* <p className="text-5xl text-orange-500 font-bold border-4 border-orange-500 rounded p-5">⚠️ WORK IN PROGRESS</p> */}
      <Link to="/">
        <img
          src={logo}
          alt="error"
          className="w-40 transition-all ease-in duration-100 hover:scale-110"
        />
      </Link>
    </div>
  );
};

export default Error;
