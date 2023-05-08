import React, { useContext } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import "./search.scss";
import { FilterContext } from "../../FilterContext/FilterContext";

const SearchFilter = () => {
  const { search, setSearch, region, setRegion } = useContext(FilterContext);

  const handleRegionChange = (e) => {
    setRegion(e.target.value);
  };

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

      <div className="filter">
        <select
          name="filter"
          id="filter"
          value={region}
          onChange={handleRegionChange}
        >
          <option value="" disabled selected hidden>
            Filter by Region
          </option>
          <option value="All">All</option>
          <option value="Africa">Africa</option>
          <option value="Americas">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </div>
  );
};

export default SearchFilter;
