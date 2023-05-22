
import React from "react";
import SearchFilter from "../Search/SearchFilter";
import "./home.scss";
import CountryCardGrid from "../Cards/CountryCardGrid";
import CustomDropdown from "../Search/DropDown";

const Home = () => {
  return (
    <section className="home-container">
      <div className="main">
        <div className="second third">
          <SearchFilter />
          <CustomDropdown />
        </div>
      </div>
      <div className="main">
        <div className="second">
          <CountryCardGrid />
        </div>
      </div>
    </section>
  );
};

export default Home;
