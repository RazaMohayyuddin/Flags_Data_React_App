import React from "react";
import Header from "../Header/Header";
import SearchFilter from "../Search/SearchFilter";
import "./home.scss";
import Card from "../Cards/Card";
const Home = () => {
  return (
    <section className="home-container">
      <Header />
      <SearchFilter />

      <Card />
    </section>
  );
};

export default Home;
