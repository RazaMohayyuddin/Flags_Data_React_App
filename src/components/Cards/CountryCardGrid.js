import React from "react";
import "./card.scss";
import CountryCard from "./Card";

const CountryCardGrid = ({ countries }) => {
  return (
    <div className="container">
      {countries.map((country) => (
        <CountryCard
          key={country.id}
          name={country.Name}
          population={country.population}
          region={country.region}
          capital={country.capital}
          image={country.image}
        />
      ))}
    </div>
  );
};

export default CountryCardGrid;
