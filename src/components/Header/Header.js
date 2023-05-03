import React from "react";
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";

import "./header.scss";
const Header = () => {
  return (
    <div className="headerContainer ">
      <h1>Where in the world?</h1>
      <span>
        <MdOutlineDarkMode className="icon" /> Dark Mode
      </span>
    </div>
  );
};

export default Header;
