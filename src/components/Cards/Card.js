import { Link } from "react-router-dom";
import "./card.scss";

const CountryCard = ({ country }) => {

  return (
   
    <Link
      to={`/country/${country.name.common}`}
      state={country}
      className="card-link"

      style={{textDecoration: "none",padding:"0px",margin:"0px"}}
    >
      <div className="card" key={country.name.common}>
        <img
          src={country.flags.svg}
          alt={country.name.common}
          className="card-img-top"
        />
        <div className="card-body">
          <h3>
            <strong style={{ fontWeight: "800" }}> 
              {country.name.common}
            </strong>
          </h3>
          <p style={{ fontSize: "0.9rem" }}>
            <strong
              style={{
                marginRight: "5px",
                fontWeight: "600",
              }}
            >
              Population:
            </strong>
            {country.population.toLocaleString()}
          </p>
          <p style={{ fontSize: "0.9rem" }}>
            <strong
              style={{
                marginRight: "5px",
                fontWeight: "600",
              }}
            >
              Region:
            </strong>
            {country.region}
          </p>
          <p style={{ fontSize: "0.9rem" }}>
            <strong
              style={{
                marginRight: "5px",
                fontWeight: "600",
              }}
            >
              Capital:
            </strong>
            {country.capital}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CountryCard;
