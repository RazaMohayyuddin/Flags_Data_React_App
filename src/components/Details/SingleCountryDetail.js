
import React from "react";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import "./detail.scss";
import { Link, useLocation,useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const SingleCountryDetail = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const [borderCountries, setBorderCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleBack = () => {
    navigate("/");
    console.log("back");
  };


  useEffect(() => {
    async function getBorderCountries() {
      const borderCountriesData = await Promise.all(
        state.borders.map((border) =>
          fetch(`https://restcountries.com/v3.1/alpha/${border}`).then((res) =>
            res.json()
          )
        )
      );
      setBorderCountries(borderCountriesData);
      setLoading(false);
    }
    getBorderCountries();
  }, [state.borders]);

  const { name, flags, population, region, subregion, capital, tld, currencies, languages } = state;

  return (
    <>
      <section className="countryContainer  ">
        <div className="BackButtonSpan" >
        <button className="backBtn" onClick={handleBack}>
          <MdOutlineKeyboardBackspace className="icon" />
          Back
        </button>
        </div>

        <div className="countryDetails ">

          <div className="countryFlag">
         
            <img src={flags.png} alt="country" className="countryFlagImage" />
            </div>
          
          <div className="countryInfo">
            <h2>{name.common}</h2>
            <div className="countryInfoDetails">
              <div className="countryInfoLeft">
                <p className="">
                  <span>Native Name:</span>{" "}
                  {Object.entries(name.nativeName)
                    .slice(0, 1)
                    .map(([key, value], index) => {
                      const nativeName = `${value.common}`;
                      return index === 0 ? nativeName : `, ${nativeName}`;
                    })}
                </p>

                <p>
                  <span>Population:</span> {population.toLocaleString()}
                </p>
                <p>
                  <span>Region:</span> {region}
                </p>
                <p>
                  <span>Sub Region:</span> {subregion}
                </p>
                <p>
                  <span>Capital:</span> {capital}
                </p>
              </div>
              <div className="countryInfoRight">
                <p>
                  <span>Top Level Domain:</span> {tld}
                </p>
                <p>
                  <span>Currencies:</span>{" "}
                  {Object.values(currencies)
                    .map((currency) => currency.name)
                    .join(", ")}
                </p>
                <p>
                  <span>Languages:</span>{" "}
                  {Object.values(languages).sort().join(", ")}
                </p>
              </div>
            </div>
            <div className="countryBorder">
              <p>
              {loading ? (
          <span>Loading...</span>
        ) : (
          borderCountries.length > 0 && <span>Border Countries:</span>
        )}

                {!loading && borderCountries
                  .sort((a, b) =>
                    a[0]?.name?.common.localeCompare(b[0]?.name?.common)
                  )
                  .map((border) => (
                    <Link
                      to={`/country/${border[0]?.name?.common}`}
                      state={border[0]}
                      key={border[0]?.name?.common}
                      style={{ textDecoration: "none" }}
                    >
                      <span
                        className="borderCountry"
                        key={border[0]?.name?.common}
                      >
                        {border[0]?.name?.common}
                      </span>
                    </Link>
  ))}
               </p>
              </div>
            </div>
         </div>
       </section>
    </>
    );
  };
  
  export default SingleCountryDetail;