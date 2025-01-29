import React from "react";
import { ShipsProvider } from "./context/shipsContext.jsx";
import { createRoot } from "react-dom/client";
import "./index.css";
import AppRouter from "./AppRouter.jsx";

createRoot(document.getElementById("root")).render(
  <ShipsProvider>
    <AppRouter />
  </ShipsProvider>
);
