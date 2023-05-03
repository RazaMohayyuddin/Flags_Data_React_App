import React from "react";
import data from "./cardData.json";
const Card = () => {
  return (
    <section>
      <div className="text-center container py-5">
        <div className="row">
          {data.map((item, index) => {
            return (
              <div className="col-lg-3 col-md-12 mb-4">
                <div className="card">
                  <div
                    className="bg-image hover-zoom ripple"
                    data-mdb-ripple-color="light"
                  >
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/img%20(23).webp"
                      alt="Flags"
                      className="w-100"
                    />
                  </div>
                  <div className="card-body">
                    <h5
                      className="card-title mb-3"
                      style={{
                        color: "hsl(200,15%,8%)",
                        fontWeight: "bolder",
                        marginRight: "7rem",
                        fontSize: "21px",
                        textAlign: "left",
                        textDecoration: "inline-block",
                      }}
                    >
                      {item.Name}
                    </h5>

                    <p
                      style={{
                        marginRight: "5rem",
                        color: "hsl(200,15%,8%)",
                      }}
                    >
                      <span
                        style={{
                          color: "hsl(200,15%,8%)",
                          fontWeight: "bold",
                          paddingRight: "0.5rem",
                        }}
                      >
                        population:
                      </span>
                      88988989
                    </p>

                    <p
                      style={{
                        marginRight: "7rem",
                        color: "hsl(200,15%,8%)",
                      }}
                    >
                      <span
                        style={{
                          color: "hsl(200,15%,8%)",
                          fontWeight: "bold",
                          paddingRight: "0.5rem",
                        }}
                      >
                        Region:
                      </span>
                      Americas
                    </p>
                    <p
                      style={{
                        marginRight: "4rem",
                        color: "hsl(200,15%,8%)",
                      }}
                    >
                      <span
                        style={{
                          color: "hsl(200,15%,8%)",
                          fontWeight: "bold",
                          fontSize: "15px",
                          paddingRight: "0.5rem",
                        }}
                      >
                        Capital:
                      </span>
                      Washington,D.C
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Card;
