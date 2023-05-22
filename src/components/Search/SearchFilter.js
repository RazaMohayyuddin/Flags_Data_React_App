import React, { useContext } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import "./search.scss";
import { FilterContext } from "../../FilterContext/FilterContext";


const SearchFilter = () => {
  const { search, setSearch } = useContext(FilterContext); // search is used to check the state of search

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
    </div>
  );
};

export default SearchFilter;
