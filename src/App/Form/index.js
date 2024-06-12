import React, { useState } from "react";
import Clock from "../Clock";
import currencies from "./currencies";
import Result from "./Result";
import {
    Frame,
    Title,
    Section,
    TwoColumnSection,
    ExpendedSection,
    SectionTitle,
    Type,
    Selection,
    Button
}
    from "./styled";

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
        <Frame onSubmit={onFormSubmit}>
            <Clock />
            <Title>
                Kalkulator walutowy
            </Title>

            <Section>
                <SectionTitle>
                    Wymieniam*
                </SectionTitle>
                <Type
                    name="cash"
                    type="number"
                    placeholder="kwota"
                    step="0.01"
                    autoFocus
                    required
                    min="0.01"
                    value={amount}
                    onChange={({ target }) => setAmount(target.value.slice(0, 13))}
                />
                <Selection
                    name="currencyHave"
                    value={conversionData.currencyHave}
                    onChange={({ target }) => setConversionData({
                        ...conversionData, currencyHave: target.value
                    })}
                >
                    {currencies.map(currency => (
                        <option
                            key={currency.short}
                            value={currency.short}
                        >
                            {currency.name}
                        </option>
                    ))}
                </Selection>
            </Section>

            <TwoColumnSection>
                <SectionTitle>
                    Na
                </SectionTitle>
                <Selection
                    name="currencyGet"
                    value={conversionData.currencyGet}
                    onChange={({ target }) => setConversionData({
                        ...conversionData, currencyGet: target.value
                    })}
                >
                    {currencies.map(currency => (
                        <option
                            key={currency.short}
                            value={currency.short}
                        >
                            {currency.name}
                        </option>
                    ))}
                </Selection>
            </TwoColumnSection>

            <ExpendedSection>
                <Button type="submit">
                    Przelicz
                </Button>
            </ExpendedSection>
            {result !== null && (
                <Result
                    conversionedAmount={initialAmount}
                    amount={result}
                    currencyGet={currencyGet}
                    currencyHave={currencyHave}
                />
            )}
        </Frame>
    );
};

export default Form;
