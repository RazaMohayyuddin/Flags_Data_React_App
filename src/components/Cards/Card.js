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
            <strong style={{ fontWeight: "bolder" }}>
              {country.name.common}
            </strong>
          </h3>
          <p className="card-text" style={{ fontSize: "0.9rem" }}>
            <strong
              style={{
                marginRight: "5px",
              }}
            >
              Population:
            </strong>
            {country.population}
          </p>
          <p className="card-text" style={{ fontSize: "0.9rem" }}>
            <strong
              style={{
                marginRight: "5px",
              }}
            >
              Region:
            </strong>
            {country.region}
          </p>
          <p className="card-text" style={{ fontSize: "0.9rem" }}>
            <strong
              style={{
                marginRight: "5px",
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
