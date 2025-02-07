import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./views/NotFound";
import HomePage from "./views/HomePage";
import ShipDetails from "./views/ShipDetails";
import StarshipsPage from "./views/StarshipsPage";
import Navbar from "/src/components/Navbar/Navbar";
import ProtectedRoute from "./components/protected-route/ProtectedRoute";
import AuthModal from "./components/AuthModal";
import { useAuth } from "./context/Authentication/AuthContext";
import Footer from "./components/Footer";

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
      <Footer />
    </BrowserRouter>
  );
};

export default App;
