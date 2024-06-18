import axios from "axios";
import { useState, useEffect } from "react";

export const useFetchCurrencies = () => {
    const [ratesData, setRatesData] = useState({
        data: null,
        date: null,
        loading: false,
        error: null,
    });

    useEffect(() => {
        const fetchCurrencies = async () => {
            setRatesData((previousData) => ({
                ...previousData,
                loading: true,
            }));
            try {
                const response = await axios.get("currencies.json");
                console.log(response.data);

                setRatesData({
                    data: response.data.data,
                    loading: false,
                    error: null,
                    date: response.data.meta.last_updated_at,
                });
            } catch (error) {
                setRatesData((previousData) => ({
                    ...previousData,
                    loading: false,
                    error: error,
                }));
            };
        };

        setTimeout(fetchCurrencies, 2000)
    }, []);

    return ratesData;
};
