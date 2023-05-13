import React from "react";
import SearchFilter from "../Search/SearchFilter";
import "./home.scss";
import CountryCardGrid from "../Cards/CountryCardGrid";

const Home = () => {
  return (
    <section className="home-container">
      <SearchFilter />
      <CountryCardGrid />
    </section>
  );
};

export default Home;
