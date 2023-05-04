import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";

import SingleCountryDetail from "./components/Details/SingleCountryDetail";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:country" element={<SingleCountryDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
