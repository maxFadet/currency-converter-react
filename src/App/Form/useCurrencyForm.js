import { useState, useEffect } from "react";

export const useCurrencyForm = (currencies) => {
    const [amount, setAmount] = useState("");
    const [initialAmount, setInitialAmount] = useState("");
    const [currencyHave, setCurrencyHave] = useState("PLN");
    const [currencyGet, setCurrencyGet] = useState("USD");
    const [conversionData, setConversionData] = useState({
        amount: "",
        currencyHave: "PLN",
        currencyGet: "USD",
    });

    useEffect(() => {
        if (currencies && Object.keys(currencies).length > 0) {
            initializeCurrencies();
        }
    }, [currencies]);

    const initializeCurrencies = () => {
        setCurrencyHave("PLN");
        setCurrencyGet("USD");
        setConversionData({
            amount: "",
            currencyHave: "PLN",
            currencyGet: "USD",
        });
    };

    return {
        amount, setAmount,
        initialAmount, setInitialAmount,
        currencyHave, setCurrencyHave,
        currencyGet, setCurrencyGet,
        conversionData, setConversionData,
        initializeCurrencies
    };
};
