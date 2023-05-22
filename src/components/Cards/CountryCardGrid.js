import React, { useState, useEffect, useContext } from "react";
import "./card.scss";
import CountryCard from "./Card";
import axios from "axios";
import { FilterContext } from "../../FilterContext/FilterContext";

const CountryCardGrid = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const { search, region } = useContext(FilterContext);

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((res) => {
      setCountries(res.data);
      setLoading(false);
    });
  }, []); 

  // Filter countries based on search and region

  const filteredCountries = countries.filter((country) => {
    if (
      search &&
      !country.name.common.toLowerCase().includes(search.toLowerCase())
    ) {
      return false;
    }
    if (region && region !== "All") {
      if (country.region !== region) {
        return false;
      }
    }
    return true;
  }); 

  return (
    <div>
      {loading ? (
        <div
          className="loader"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
            fontSize: "24px",
          }}
        >
          Loading...
        </div>
      ) : (
        <div
          className={
            filteredCountries.length <= 4 ? "newContainer" : "container"
          }
        >
          {filteredCountries.map((country) => (
            <CountryCard key={country.cca3} country={country} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CountryCardGrid;
