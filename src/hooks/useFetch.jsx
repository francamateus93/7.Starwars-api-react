import { useState, useEffect } from "react";

const useFetch = (urls) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!urls) return;

    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        if (typeof urls === "string") {
          // Si es una URL única
          const response = await fetch(urls);
          const result = await response.json();
          setData(result);
        } else if (Array.isArray(urls)) {
          // Si es un array de URLs
          const responses = await Promise.all(
            urls.map((url) => fetch(url).then((res) => res.json()))
          );
          setData(responses);
        }
      } catch (err) {
        setError(`Error fetching data: ${err.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [urls]);

  return { data, loading, error };
};

export default useFetch;
