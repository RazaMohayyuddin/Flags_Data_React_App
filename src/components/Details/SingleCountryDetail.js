import React from "react";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import "./detail.scss";
import Header from "../Header/Header";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const SingleCountryDetail = () => {
  const data = useLocation();
  const navigate = useNavigate();

  const [borderCountries, setBorderCountries] = useState([]);

  useEffect(() => {
    async function getBorderCountries() {
      const borderCountriesData = await Promise.all(
        data.state.borders.map((border) =>
          fetch(`https://restcountries.com/v3.1/alpha/${border}`).then((res) =>
            res.json()
          )
        )
      );
      setBorderCountries(borderCountriesData);
    }
    getBorderCountries();
  }, [data.state.borders]);

  return (
    <div className="countryContainer">
      <Header />
      <button className="backBtn" onClick={() => navigate("/")}>
        <MdOutlineKeyboardBackspace className="icon" />
        Back
      </button>

      <div className="countryDetails">
        <div className="countryFlag">
          <img
            src={data.state.flags.png}
            alt="country"
            className="countryFlagImage"
          />
        </div>
        <div className="countryInfo">
          <h2>{data.state.name.common}</h2>
          <div className="countryInfoDetails">
            <div className="countryInfoLeft">
              <p className="">
                <span>Native Name:</span>{" "}
                {Object.entries(data.state.name.nativeName)
                  .slice(0, 1)
                  .map(([key, value], index) => {
                    const nativeName = `${value.common}`;
                    return index === 0 ? nativeName : `, ${nativeName}`;
                  })}
              </p>

              <p>
                <span>Population:</span> {data.state.population}
              </p>
              <p>
                <span>Region:</span> {data.state.region}
              </p>
              <p>
                <span>Sub Region:</span> {data.state.subregion}
              </p>
              <p>
                <span>Capital:</span> {data.state.capital}
              </p>
            </div>
            <div className="countryInfoRight">
              <p>
                <span>Top Level Domain:</span> {data.state.tld}
              </p>
              <p>
                <span>Currencies:</span>{" "}
                {Object.values(data.state.currencies)
                  .map((currency) => currency.name)
                  .join(", ")}
              </p>
              <p>
                <span>Languages:</span>{" "}
                {Object.values(data.state.languages).join(", ")}
              </p>
            </div>
          </div>
          <div className="countryBorder">
            <p>
              {borderCountries.length > 0 && <span>Border Countries:</span>}

              {borderCountries.map((border) => (
                <Link
                  to={`/country/${border[0]?.name?.common}`}
                  state={border[0]}
                  key={border[0]?.name?.common}
                  style={{ textDecoration: "none" }}
                >
                  <span className="borderCountry" key={border[0]?.name?.common}>
                    {border[0]?.name?.common}
                  </span>
                </Link>
              ))}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCountryDetail;
