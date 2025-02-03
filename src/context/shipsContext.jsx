import React, { createContext, useState, useEffect, useContext } from "react";
import fetchShips from "../api/ShipsApi";

const ShipsContext = createContext();

export const ShipsProvider = ({ children }) => {
  const [ships, setShips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [viewMore, setViewMore] = useState(true);

  useEffect(() => {
    const gettingShips = async () => {
      try {
        setLoading(true);
        const data = await fetchShips(page);
        setShips((prev) => [...prev, ...data]);
        setViewMore(data.next !== null); // data.next verifica si hay más naves
      } catch (error) {
        console.error("Error fetching ships:", error);
      } finally {
        setLoading(false);
      }
    };

    gettingShips();
  }, [page]);

  return (
    <ShipsContext.Provider value={{ ships, loading, setPage, viewMore }}>
      {children}
    </ShipsContext.Provider>
  );
};

export const useShips = () => {
  const context = useContext(ShipsContext);
  return context;
};
