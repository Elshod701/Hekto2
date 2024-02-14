import { useState } from "react";
import "./App.css";
import Home from "./pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import { Abaut } from "./pages/Home/abaut/abaut";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart/:id" element={<Abaut />} />
    </Routes>
  );
}

export default App;
