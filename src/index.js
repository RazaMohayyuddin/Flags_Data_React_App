import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { FilterContextProvider } from "./FilterContext/FilterContext";
import { DarkModeContextProvider } from "./StyleContext/darkModeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <DarkModeContextProvider>
    <FilterContextProvider>
      <App />
    </FilterContextProvider>
  </DarkModeContextProvider>
);


