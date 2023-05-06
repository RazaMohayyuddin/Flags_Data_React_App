import { Link } from "react-router-dom";

const CountryCard = ({ country }) => {
  return (
    <Link
      to={`/country/${country.name.common}`}
      state={country}
      className="card-link"
    >
      <div className="card" key={country.name.common}>
        <img
          src={country.flags.png}
          alt={country.name.common}
          className="card-img-top"
        />
        <div className="card-body">
          <h3 className="card-title">
            <span
              style={{
                fontWeight: "bold",
                color: "hsl(200,15%,8%)",
                paddingRight: "15px",
              }}
            >
              {country.name.common}
            </span>
          </h3>
          <p className="card-text" style={{ fontSize: "0.9rem" }}>
            <span
              style={{
                fontWeight: "bold",
                color: "hsl(200,15%,8%)",
                paddingRight: "5px",
              }}
            >
              Population:
            </span>
            {country.population}
          </p>
          <p className="card-text" style={{ fontSize: "0.9rem" }}>
            <span
              style={{
                fontWeight: "bold",
                color: "hsl(200,15%,8%)",
                paddingRight: "5px",
              }}
            >
              Region:
            </span>
            {country.region}
          </p>
          <p className="card-text" style={{ fontSize: "0.9rem" }}>
            <span
              style={{
                fontWeight: "bold",
                color: "hsl(200,15%,8%)",
                paddingRight: "5px",
              }}
            >
              Capital:
            </span>
            {country.capital}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CountryCard;
