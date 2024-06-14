import { useState } from "react";

export const useCalculateResult = (currencies, conversionData, amount) => {
    const [result, setResult] = useState(null);

    const calculateResult = () => {
        const getCurrencyRate = (currencyShort) => {
            const foundCurrency = currencies.find(currency => currency.short === currencyShort);
            return foundCurrency ? foundCurrency.rate : 1;
        };

        const rateFrom = getCurrencyRate(conversionData.currencyHave);
        const rateTo = getCurrencyRate(conversionData.currencyGet);
        const calculatedResult = (amount * rateFrom) / rateTo;

        setResult(calculatedResult.toFixed(2));
    };

    return { result, calculateResult };
};
