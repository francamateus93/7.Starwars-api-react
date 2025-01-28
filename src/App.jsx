import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StarshipsPage from "./pages/StarshipsPage";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StarshipsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
