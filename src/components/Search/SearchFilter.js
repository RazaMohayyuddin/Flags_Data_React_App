import React, { useContext } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import "./search.scss";
import { FilterContext } from "../../FilterContext/FilterContext";
// import CustomDropdown from "./DropDown";

const SearchFilter = () => {
  const { search, setSearch } = useContext(FilterContext);

  return (
    <div className="searchContainer">
      <div className="search">
        <AiOutlineSearch className="icon" />
        <input
          type="text"
          placeholder="Search for a country..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </div>

      {/* <div className="select-container">
        <CustomDropdown />
      </div> */}
    </div>
  );
};

export default SearchFilter;
