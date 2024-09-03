import { useState } from "react";

export const useCalculateResult = (currencies, conversionData, amount) => {
    const [result, setResult] = useState(null);

    const calculateResult = () => {
        const getCurrencyRate = (currencyShort) => {
            return currencies[currencyShort] ? currencies[currencyShort].value : 1;
        };

        const rateFrom = getCurrencyRate(conversionData.currencyHave);
        const rateTo = getCurrencyRate(conversionData.currencyGet);
        const calculatedResult = (amount * rateFrom) / rateTo;

        setResult(calculatedResult.toFixed(2));
    };

    return { result, calculateResult };
};