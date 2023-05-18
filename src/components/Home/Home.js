import React from "react";
import SearchFilter from "../Search/SearchFilter";
import "./home.scss";
import CountryCardGrid from "../Cards/CountryCardGrid";
import CustomDropdown from "../Search/DropDown";

const Home = () => {
  return (
    <section className="home-container">
      <div className="homeSearchSection">
      <SearchFilter />
      <CustomDropdown/>
      </div>
      <div className="homeCards">
      <CountryCardGrid />
      </div>
    </section>
  );
};

export default Home;
