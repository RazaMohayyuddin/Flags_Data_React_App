import React from "react";
import SearchFilter from "../Search/SearchFilter";
import "./home.scss";
import CountryCardGrid from "../Cards/CountryCardGrid";
import Header from "../Header/Header";

const Home = () => {
  return (
    <section className="home-container">
      <Header />
      <SearchFilter />
      <CountryCardGrid />
    </section>
  );
};

export default Home;
