import React from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  return (
    <div className="header flex justify-between bg-pink-100 shadow-lg mb-2">
      <div className="logo-container">
        <img className="logo w-28" alt="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items flex items-center">
        <ul className="flex p-4 m-4 justify-around gap-xl-5">
          <li className="px-4">Home</li>
          <li className="px-4">About Us</li>
          <li className="px-4">Contact Us</li>
          <li className="px-4">Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
