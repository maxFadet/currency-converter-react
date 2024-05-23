import React, { useState } from "react";
import { currencies } from "./currencies";
import  Result  from "./Result";
import "./style.css"


const Form = () => {





    return (
        <form className="form">
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
                        />
                    </label>
                </p>
                <p>
                    <label>
                        <span className="form__labelText"></span>
                        <select
                            className="form__textArea"
                            name="currencyHave"
                        >
                            <option value="1">PLN</option>
                            <option value="4.17">USD</option>
                            <option value="4.59">EUR</option>
                        </select>
                    </label>
                </p>
                <p>
                    <label>
                        <span className="form__labelText">Na</span>
                        <select
                            className="form__textArea form__textArea--otherColor"
                            name="currencyGet"
                        >
                            <option value="1">PLN</option>
                            <option value="4.17">USD</option>
                            <option value="4.59">EUR</option>
                        </select>
                    </label>
                </p>
            </fieldset>
            <Result />
        </form>
    );
};

export default Form;