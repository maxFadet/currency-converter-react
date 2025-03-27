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
        if (currencies) {
            setConversionData({
                amount: "",
                currencyHave: "PLN",
                currencyGet: "USD",
            });
        }
    }, [currencies]);

    const handleAmountChange = (value) => {
        setAmount(value.slice(0, 13));
    };

    const handleCurrencyHaveChange = (value) => {
        setConversionData(prevState => ({
            ...prevState,
            currencyHave: value,
        }));
    };

    const handleCurrencyGetChange = (value) => {
        setConversionData(prevState => ({
            ...prevState,
            currencyGet: value,
        }));
    };

    const onFormSubmit = (event, calculateResult) => {
        event.preventDefault();
        setInitialAmount(amount);
        setCurrencyHave(conversionData.currencyHave);
        setCurrencyGet(conversionData.currencyGet);
        calculateResult();
    };


    return {
        amount,
        setAmount,
        initialAmount,
        currencyHave,
        currencyGet,
        conversionData,
        handleAmountChange,
        handleCurrencyHaveChange,
        handleCurrencyGetChange,
        onFormSubmit
    };
};