// import React from "react";
// import { AiOutlineSearch } from "react-icons/ai";
// import "./search.scss";
// const SearchFilter = () => {
//   return (
//     <div className="searchContainer">
//       <div className="search">
//         <AiOutlineSearch className="icon" />
//         <input type="text" placeholder="Search for a country..." />
//       </div>

//       <div className="filter">
//         <select name="filter" id="filter">
//           <option value="" disabled selected hidden>
//             Filter by Region
//           </option>
//           <option value="Africa">Africa</option>
//           <option value="America">America</option>
//           <option value="Asia">Asia</option>
//           <option value="Europe">Europe</option>
//           <option value="Oceania">Oceania</option>
//         </select>
//       </div>
//     </div>
//   );
// };

// export default SearchFilter;

import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import "./search.scss";

const SearchFilter = () => {
  return (
    <div className="searchContainer">
      <div className="search">
        <AiOutlineSearch className="icon" />
        <input type="text" placeholder="Search for a country..." />
      </div>

      <div className="filter">
        <select name="filter" id="filter">
          <option value="" disabled selected hidden>
            Filter by Region
          </option>
          <option value="Africa">Africa</option>
          <option value="America">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </div>
  );
};

export default SearchFilter;
