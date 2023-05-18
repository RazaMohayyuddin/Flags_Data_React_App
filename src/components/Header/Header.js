import React, { useContext } from "react";
import { DarkModeContext } from "../../StyleContext/darkModeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon as solidMoon } from "@fortawesome/free-solid-svg-icons";
import { faMoon as regularMoon } from "@fortawesome/free-regular-svg-icons";


import "./header.scss";
const Header = () => {
  const { dispatch } = useContext(DarkModeContext);
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className="headerContainer">

<div className="headerdata">
      <h1>Where in the world?</h1>

      <span
        onClick={() => dispatch({ type: "TOGGLE" })}
        style={{ cursor: "pointer" }}
      >
        {darkMode ? (
          <FontAwesomeIcon icon={solidMoon} className="icon" />
         
        ) : (
       
          <FontAwesomeIcon icon={regularMoon} className="icon" />
          
         
        )}
        {darkMode ? "Light Mode" : "Dark Mode"}
      </span>
      </div>
    </div>
  );
};

export default Header;
