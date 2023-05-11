import React, { useState, useContext } from "react";
import "./selectFilter.scss";
import { FilterContext } from "../../FilterContext/FilterContext";
import { FaAngleDown } from "react-icons/fa";

function CustomDropdown() {
  const { region, setRegion } = useContext(FilterContext);
  const [isOpen, setIsOpen] = useState(false);

  const options = ["All", "Americas", "Asia", "Europe", "Oceania", "Africa"];

  const handleSelect = (value) => {
    setRegion(value);
    setIsOpen(false);
  };

  return (
    <div className="dropdown-container">
      <div className="buttonwrapper">
        <span className="dropdown-trigger" onClick={() => setIsOpen(!isOpen)}>
          {region ? region : "Filter by Region"}
          <span className="dropdown-icon">
            <FaAngleDown />
          </span>
        </span>
      </div>
      {isOpen && (
        <ul className="dropdown-menu">
          {options.map((option, index) => (
            <li
              key={index}
              className="dropdown-option"
              onClick={() => handleSelect(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CustomDropdown;
