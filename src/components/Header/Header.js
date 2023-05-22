import React, { useContext } from "react";
import { DarkModeContext } from "../../StyleContext/darkModeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon as solidMoon } from "@fortawesome/free-solid-svg-icons";
import { faMoon as regularMoon } from "@fortawesome/free-regular-svg-icons";
import { useNavigate } from "react-router-dom";

import "./header.scss";
const Header = () => {
  const { dispatch } = useContext(DarkModeContext); // dispatch is used to change the state of darkMode
  const { darkMode } = useContext(DarkModeContext); // darkMode is used to check the state of darkMode
  const navigate = useNavigate();

  return (
    <header>
    
    <div className="headerContainer main">

      <div className="headerdata second">
       
      <h1 onClick={()=>navigate('/')} style={{cursor:'pointer'}}>Where in the world?</h1>
      

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
    </header>
  );
};

export default Header;
