import { useState, useEffect } from "react";

export const useFetchCurrencies = () => {
  const [currencies, setCurrencies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCurrencies = async () => {
      try {
        const response = await fetch("https://api.exchangerate-api.com/v4/latest/PLN");
        if (!response.ok) {
          throw new Error("Failed to fetch currencies");
        }
        const data = await response.json();
        const formattedCurrencies = Object.keys(data.rates).map(key => ({
          short: key,
          name: key,
          rate: data.rates[key]
        }));
        setCurrencies(formattedCurrencies);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCurrencies();
  }, []);

  return { currencies, loading, error };
};
