// import React from "react";
// import data from "./cardData.json";
// const Card = () => {
//   return (
//     <section>
//       <div className="text-center container py-5">
//         <div className="row">
//           {data.map((item, index) => {
//             return (
//               <div className="col-lg-3 col-md-10 mb-4">
//                 <div className="card">
//                   <div
//                     className="bg-image hover-zoom ripple"
//                     data-mdb-ripple-color="light"
//                   >
//                     <img
//                       src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/img%20(23).webp"
//                       alt="Flags"
//                       className="w-100"
//                     />
//                   </div>
//                   <div className="card-body">
//                     <h5
//                       className="card-title mb-3"
//                       style={{
//                         color: "hsl(200,15%,8%)",
//                         fontWeight: "bolder",
//                         marginRight: "7rem",
//                         fontSize: "21px",
//                         textAlign: "left",
//                         textDecoration: "inline-block",
//                       }}
//                     >
//                       {item.Name}
//                     </h5>

//                     <p
//                       style={{
//                         marginRight: "5rem",
//                         color: "hsl(200,15%,8%)",
//                       }}
//                     >
//                       <span
//                         style={{
//                           color: "hsl(200,15%,8%)",
//                           fontWeight: "bold",
//                           paddingRight: "0.5rem",
//                         }}
//                       >
//                         population:
//                       </span>
//                       88988989
//                     </p>

//                     <p
//                       style={{
//                         marginRight: "7rem",
//                         color: "hsl(200,15%,8%)",
//                       }}
//                     >
//                       <span
//                         style={{
//                           color: "hsl(200,15%,8%)",
//                           fontWeight: "bold",
//                           paddingRight: "0.5rem",
//                         }}
//                       >
//                         Region:
//                       </span>
//                       Americas
//                     </p>
//                     <p
//                       style={{
//                         marginRight: "4rem",
//                         color: "hsl(200,15%,8%)",
//                       }}
//                     >
//                       <span
//                         style={{
//                           color: "hsl(200,15%,8%)",
//                           fontWeight: "bold",
//                           fontSize: "15px",
//                           paddingRight: "0.5rem",
//                         }}
//                       >
//                         Capital:
//                       </span>
//                       Washington,D.C
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Card;

import React from "react";
import "./card.scss";
const CountryCard = ({ name, population, region, capital, image }) => {
  return (
    <div className="card">
      <img src={image} alt={name} className="card-img-top" />
      <div className="card-body">
        <h3 className="card-title">
          {" "}
          <span
            style={{
              fontWeight: "bold",
              color: "hsl(200,15%,8%)",
              paddingRight: "15px",
            }}
          >
            {name}
          </span>{" "}
        </h3>
        <p className="card-text">
          <span
            style={{
              fontWeight: "bold",
              color: "hsl(200,15%,8%)",
              paddingRight: "5px",
            }}
          >
            Population:
          </span>
          {population}
        </p>
        <p className="card-text">
          <span
            style={{
              fontWeight: "bold",
              color: "hsl(200,15%,8%)",
              paddingRight: "5px",
            }}
          >
            Region:
          </span>
          {region}
        </p>
        <p className="card-text">
          <span
            style={{
              fontWeight: "bold",
              color: "hsl(200,15%,8%)",
              paddingRight: "5px",
            }}
          >
            Capital:
          </span>{" "}
          {capital}
        </p>
      </div>
    </div>
  );
};

export default CountryCard;
