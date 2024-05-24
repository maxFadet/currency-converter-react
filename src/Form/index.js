import React, { useState } from "react";
import currencies from "./currencies";
import Result from "./Result";
import "./style.css"


const Form = () => {
    const [amount, setAmount] = useState("");
    const [currencyHave, setCurrencyHave] = useState(currencies[0].short);
    const [currencyGet, setCurrencyGet] = useState(currencies[1].short);

    const onFormSubmit = (event) => {
        event.preventDefault();
    }


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
                <p>
                    <label>
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
                            onChange={({ target }) => setAmount(target.value)}
                        />
                    </label>
                </p>
                <p>
                    <label>
                        <span className="form__labelText"></span>
                        <select
                            className="form__textArea"
                            name="currencyHave"
                            value={currencyHave}
                            onChange={({ target }) => setCurrencyHave(target.value)}
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
                </p>
                <p>
                    <label>
                        <span className="form__labelText">Na</span>
                        <select
                            className="form__textArea form__textArea--otherColor"
                            name="currencyGet"
                            value={currencyGet}
                            onChange={({ target }) => setCurrencyGet(target.value)}
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
                </p>
            </fieldset>
            <Result />
        </form>
    );
};

export default Form;