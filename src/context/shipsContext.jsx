import React, { createContext, useState, useEffect, useContext } from "react";
import fetchShips from "../api/ShipsApi";

const ShipsContext = createContext();

export const ShipsProvider = ({ children }) => {
  const [ships, setShips] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const gettingShips = async () => {
      try {
        const data = await fetchShips(1);
        setShips(data);
      } catch (error) {
        console.error("Error fetching ships:", error);
      } finally {
        setLoading(false);
      }
    };

    gettingShips();
  }, []);

  return (
    <ShipsContext.Provider value={{ ships, loading }}>
      {children}
    </ShipsContext.Provider>
  );
};

export const useShips = () => {
  const context = useContext(ShipsContext);
  return context;
};
