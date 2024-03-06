import "./App.css";
import Air from "./components/Air";
import Hand from "./components/Hand";
import Home from "./components/Home";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/air" element={<Air />} />
          <Route exact path="/hand" element={<Hand />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
