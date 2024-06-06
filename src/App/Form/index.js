import React, { useState } from "react";
import Clock from "../Clock";
import currencies from "./currencies";
import Result from "./Result";
import "./style.css";

const Form = () => {
    const [amount, setAmount] = useState("");
    const [initialAmount, setInitialAmount] = useState("");
    const [currencyHave, setCurrencyHave] = useState(currencies[0].short);
    const [currencyGet, setCurrencyGet] = useState(currencies[1].short);
    const [result, setResult] = useState(null);
    const [conversionData, setConversionData] = useState({
        amount: "",
        currencyHave: currencies[0].short,
        currencyGet: currencies[1].short,
    });

    const onFormSubmit = (event) => {
        event.preventDefault();

        const getCurrencyRate = (currencyShort) => {
            const foundCurrency = currencies.find(currency => currency.short === currencyShort);
            return foundCurrency ? foundCurrency.rate : 1;
        };

        const rateFrom = getCurrencyRate(conversionData.currencyHave);
        const rateTo = getCurrencyRate(conversionData.currencyGet);
        const calculatedResult = (amount * rateFrom) / rateTo;

        setResult(calculatedResult.toFixed(2));
        setInitialAmount(amount);

        setCurrencyHave(conversionData.currencyHave);
        setCurrencyGet(conversionData.currencyGet);
    };

    return (
        <form onSubmit={onFormSubmit} className="form">
            <Clock />
            <h1 className="form__name">
                Kalkulator walutowy
            </h1>

            <label className="form__labelBox">
                <span className="form__labelText">Wymieniam*</span>
                <input
                    className="form__textArea"
                    name="cash"
                    type="number"
                    placeholder="kwota"
                    step="0.01"
                    autoFocus
                    required
                    value={amount}
                    onChange={({ target }) => setAmount(target.value.slice(0, 13))}
                />
                <select
                    className="form__textArea form__textArea--otherColor"
                    name="currencyHave"
                    value={conversionData.currencyHave}
                    onChange={({ target }) => setConversionData({ ...conversionData, currencyHave: target.value })}
                >
                    {currencies.map(currency => (
                        <option
                            key={currency.short}
                            value={currency.short}
                        >
                            {currency.name}
                        </option>
                    ))}
                </select>
            </label>

            <label className="form__labelBox form__labelBox--twoColumns">
                <span className="form__labelText">Na</span>
                <select
                    className="form__textArea form__textArea--otherColor"
                    name="currencyGet"
                    value={conversionData.currencyGet}
                    onChange={({ target }) => setConversionData({ ...conversionData, currencyGet: target.value })}
                >
                    {currencies.map(currency => (
                        <option
                            key={currency.short}
                            value={currency.short}
                        >
                            {currency.name}
                        </option>
                    ))}
                </select>
            </label>

            <label className="form__labelBox form__labelBox--expandedBox">
                <button
                    className="form__button"
                    type="submit"
                >
                    Przelicz
                </button>
            </label>
            {result !== null && (
                <Result
                    conversionedAmount={initialAmount}
                    amount={result}
                    currencyGet={currencyGet}
                    currencyHave={currencyHave}
                />
            )}
        </form>
    );
};

export default Form;
