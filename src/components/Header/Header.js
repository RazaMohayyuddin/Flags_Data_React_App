import React, { useContext } from "react";
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";
import { DarkModeContext } from "../../StyleContext/darkModeContext";

import "./header.scss";
const Header = () => {
  const { dispatch } = useContext(DarkModeContext);
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className="headerContainer ">
      <h1>Where in the world?</h1>

      <span
        onClick={() => dispatch({ type: "TOGGLE" })}
        style={{ cursor: "pointer" }}
      >
        {darkMode ? (
          <MdDarkMode className="icon" />
        ) : (
          <MdOutlineDarkMode className="icon" />
        )}
        Dark Mode
      </span>
    </div>
  );
};

export default Header;
