import React, { createContext, useState } from "react";

export const FilterContext = createContext(); 

export const FilterContextProvider = ({ children }) => {
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");

  return (
    <FilterContext.Provider value={{ search, setSearch, region, setRegion }}>
      {children}
    </FilterContext.Provider>
  );
};
