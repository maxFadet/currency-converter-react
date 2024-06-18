import { useState } from "react";

export const useCurrencyForm = () => {
    const [amount, setAmount] = useState("");
    const [initialAmount, setInitialAmount] = useState("");
    const [currencyHave, setCurrencyHave] = useState("PLN");
    const [currencyGet, setCurrencyGet] = useState("USD");
    const [conversionData, setConversionData] = useState({
        amount: "",
        currencyHave: "PLN",
        currencyGet: "USD",
    });

    return {
        amount, setAmount,
        initialAmount, setInitialAmount,
        currencyHave, setCurrencyHave,
        currencyGet, setCurrencyGet,
        conversionData, setConversionData
    };
};
