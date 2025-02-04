import React, { useState } from "react";
import NotFound from "./views/NotFound";
import HomePage from "./views/HomePage";
import Navbar from "/src/components/Navbar/Navbar";
import ShipDetails from "./views/ShipDetails";
import StarshipsPage from "./views/StarshipsPage";
import ProtectedRoute from "./components/ProtectedRoute";
import AuthModal from "./components/AuthModal";
import { useAuth } from "./context/AuthContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  const { user } = useAuth();
  const [modalType, setModalType] = useState(null);

  return (
    <BrowserRouter>
      <Navbar setModalType={setModalType} />
      {modalType && (
        <AuthModal
          type={modalType}
          onClose={() => setModalType(null)}
          user={user}
        />
      )}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/starships"
          element={
            <ProtectedRoute user={user} setModalType={setModalType}>
              <StarshipsPage />
            </ProtectedRoute>
          }
        />
        <Route path="/starships/:id" element={<ShipDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
