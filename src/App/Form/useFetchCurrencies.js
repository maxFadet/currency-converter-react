import axios from "axios";
import { API } from "./urlAPI";
import { useState, useEffect } from "react";

const oneDay = 24 * 60 * 60 * 1000;

export const useFetchCurrencies = () => {
    const [ratesData, setRatesData] = useState({
        data: null,
        date: null,
        loading: true,
        error: null,
    });

    useEffect(() => {
        const fetchCurrencies = async () => {
            const cachedData = localStorage.getItem("currenciesData");
            const cachedDate = localStorage.getItem("lastFetchDate");

            if (cachedData && cachedDate) {
                const parsedData = JSON.parse(cachedData);
                const lastFetchDate = new Date(cachedDate);

                if (Date.now() - lastFetchDate.getTime() < oneDay) {
                    setRatesData({
                        data: parsedData.data,
                        date: new Date(parsedData.date),
                        loading: false,
                        error: null,
                    });
                    return;
                }
            }

            try {
                const response = await axios.get(API);

                const dataToCache = {
                    data: response.data.data,
                    date: response.data.meta.last_updated_at
                };

                localStorage.setItem("currenciesData", JSON.stringify(dataToCache));
                localStorage.setItem("lastFetchDate", new Date().toISOString());

                setRatesData({
                    data: response.data.data,
                    loading: false,
                    error: null,
                    date: new Date(response.data.meta.last_updated_at),
                });
            } catch (error) {
                setRatesData({
                    data: null,
                    date: null,
                    loading: false,
                    error: error.message,
                });
            }
        };

        fetchCurrencies();

        const intervalId = setInterval(fetchCurrencies, oneDay);

        return () => clearInterval(intervalId);
    }, []);

    return ratesData;
};
