// import React, { useState, useEffect, useContext } from "react";
// import "./card.scss";
// import CountryCard from "./Card";
// import axios from "axios";
// import { FilterContext } from "../../FilterContext/FilterContext";

// const CountryCardGrid = () => {
//   const [countries, setCountries] = useState([]);
//   const { search,region } = useContext(FilterContext);

//   useEffect(() => {
//     axios.get("https://restcountries.com/v3.1/all").then((res) => {
//       setCountries(res.data);
//     });
//   }, []);
//   return (
//     <div className="container">
//       {countries.map((country) => (
//         <CountryCard country={country} />
//       ))}
//     </div>
//   );
// };

// export default CountryCardGrid;

import React, { useState, useEffect, useContext } from "react";
import "./card.scss";
import CountryCard from "./Card";
import axios from "axios";
import { FilterContext } from "../../FilterContext/FilterContext";

const CountryCardGrid = () => {
  const [countries, setCountries] = useState([]);
  const { search, region } = useContext(FilterContext);

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((res) => {
      setCountries(res.data);
    });
  }, []);

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
    <div className="container">
      {filteredCountries.map((country) => (
        <CountryCard key={country.cca3} country={country} />
      ))}
    </div>
  );
};

export default CountryCardGrid;
