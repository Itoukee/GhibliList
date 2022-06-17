
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import './App.css'
import BrewRecipe from "./pages/BrewRecipe";

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/brews" element={<BrewRecipe />} />
        <Route path="*" element={<Navigate to="/brews" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
