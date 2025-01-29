import React from "react";
import NotFound from "./pages/NotFound";
import HomePage from "./pages/HomePage";
import ShipDetails from "./pages/ShipDetails";
import StarshipsPage from "./pages/StarshipsPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/starships" element={<StarshipsPage />} />
        <Route path="/starship/:id" element={<ShipDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
