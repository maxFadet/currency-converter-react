import axios from "axios";
import { API } from "./urlAPI";
import { useState, useEffect } from "react";

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

            if (cachedData) {
                const parsedData = JSON.parse(cachedData);
                setRatesData({
                    data: parsedData.data,
                    date: new Date(parsedData.date),
                    loading: false,
                    error: null,
                });
            } else {
                try {
                    const response = await axios.get(API);
                    console.log(response.data);

                    const dataToCache = {
                        data: response.data.data,
                        date: response.data.meta.last_updated_at
                    };
                    
                    localStorage.setItem("currenciesData", JSON.stringify(dataToCache));

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
                };
            };
        };

        setTimeout(fetchCurrencies, 2000)
    }, []);

    return ratesData;
};
