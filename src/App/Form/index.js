import React, { useRef } from "react";
import Clock from "../Clock";
import Result from "./Result";
import {
    Frame,
    Title,
    Section,
    Selection,
    TwoColumnSection,
    ExpendedSection,
    SectionTitle,
    Type,
    Button,
    Loading,
    Error
} from "./styled";
import { useFetchCurrencies } from "./useFetchCurrencies";
import { useCurrencyForm } from "./useCurrencyForm";
import { useCalculateResult } from "./useCalculateResult";

const Form = () => {
    const inputRef = useRef(null);
    const { currencies, loading, error } = useFetchCurrencies();
    const {
        amount, setAmount,
        initialAmount, setInitialAmount,
        currencyHave, setCurrencyHave,
        currencyGet, setCurrencyGet,
        conversionData, setConversionData,
        initializeCurrencies
    } = useCurrencyForm(currencies);

    const { result, calculateResult } = useCalculateResult(currencies, conversionData, amount);

    const onFormSubmit = (event) => {
        event.preventDefault();
        setInitialAmount(amount);
        setCurrencyHave(conversionData.currencyHave);
        setCurrencyGet(conversionData.currencyGet);
        calculateResult();
    };

    const focusInput = () => {
        inputRef.current.focus();
    };

    if (currencies.length > 0 && !conversionData.currencyHave && !conversionData.currencyGet) {
        initializeCurrencies();
        calculateResult();
    }

    return (
        <Frame onSubmit={onFormSubmit}>
            <Clock />
            <Title>Kalkulator walutowy</Title>
            {loading && <Loading>Please wait. Currency loading in progress...</Loading>}
            {error && <Error>Sorry, we couldn't fetch the currency rates at the moment.
                Please check your internet connection and try again later.</Error>}
            {!loading && !error && (
                <>
                    <Section>
                        <SectionTitle>Wymieniam*</SectionTitle>
                        <Type
                            ref={inputRef}
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
                        <SectionTitle>Na</SectionTitle>
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
                        <Button type="submit" onClick={focusInput}>
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
                </>
            )}
        </Frame>
    );
};

export default Form;
