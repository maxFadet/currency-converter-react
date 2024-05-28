import React, { useState } from "react";
import currencies from "./currencies";
import Result from "./Result";
import "./style.css";

const Form = () => {
    const [amount, setAmount] = useState("");
    const [initialAmount, setInitialAmount] = useState("");
    const [currencyHave, setCurrencyHave] = useState(currencies[0].short);
    const [currencyGet, setCurrencyGet] = useState(currencies[1].short);
    const [result, setResult] = useState(null);
    const [conversion, setConversion] = useState({
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

        const rateFrom = getCurrencyRate(conversion.currencyHave);
        const rateTo = getCurrencyRate(conversion.currencyGet);
        const calculatedResult = (conversion.amount * rateFrom) / rateTo;

        setResult(calculatedResult.toFixed(2));
        setConversion({ ...conversion, amount: "" });
        setAmount("");
        setInitialAmount(conversion.amount);

        setCurrencyHave(conversion.currencyHave);
        setCurrencyGet(conversion.currencyGet);
    };

    return (
        <form onSubmit={onFormSubmit} className="form">
            <fieldset className="form__fieldset">
                <legend className="form__name">
                    Kalkulator walutowy
                    <img
                        className="form__image"
                        src="https://i.postimg.cc/nh2vgf08/portfel.png"
                        alt="wallet"
                    />
                </legend>

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
                        value={conversion.amount}
                        onChange={({ target }) => {
                            setConversion({ ...conversion, amount: target.value.slice(0, 13) });
                            setInitialAmount(target.value);
                        }}
                    />
                    <select
                        className="form__textArea form__textArea--otherColor"
                        name="currencyHave"
                        value={conversion.currencyHave}
                        onChange={({ target }) => setConversion({ ...conversion, currencyHave: target.value })}
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
                        value={conversion.currencyGet}
                        onChange={({ target }) => setConversion({ ...conversion, currencyGet: target.value })}
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
            </fieldset>
        </form>
    );
};

export default Form;
