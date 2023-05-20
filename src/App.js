import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import { useContext } from "react";

import SingleCountryDetail from "./components/Details/SingleCountryDetail";
import { DarkModeContext } from "./StyleContext/darkModeContext";
import "./style/dark.scss";
import Header from "./components/Header/Header";

function App() {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className={darkMode ? "app dark" : "app"}>
     
      <BrowserRouter>
      <Header />
        <Routes>
          <Route  path="/" element={<Home />} />
          <Route path="/country/:name" element={<SingleCountryDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
