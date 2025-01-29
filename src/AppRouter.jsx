import React from "react";
import NotFound from "./views/NotFound";
import HomePage from "./views/HomePage";
import ShipDetails from "./views/ShipDetails";
import StarshipsPage from "./views/StarshipsPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/starships" element={<StarshipsPage />} />
        <Route path="/starships/:id" element={<ShipDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
