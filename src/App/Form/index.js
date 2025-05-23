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
    Error,
    ResultContainer,
    Container,
} from "./styled";
import { useFetchCurrencies } from "./useFetchCurrencies";
import { useCurrencyForm } from "./useCurrencyForm";
import { useCalculateResult } from "./useCalculateResult";

const Form = () => {
    const inputRef = useRef(null);
    const {
        data:
        currencies,
        loading,
        error,
        date
    } = useFetchCurrencies();
    const {
        amount,
        initialAmount,
        currencyHave,
        currencyGet,
        conversionData,
        handleAmountChange,
        handleCurrencyHaveChange,
        handleCurrencyGetChange,
        onFormSubmit,
    } = useCurrencyForm(currencies);
    const { result, calculateResult } = useCalculateResult(currencies, conversionData, amount);

    const focusInput = () => {
        inputRef.current.focus();
    };

    return (
        <Container>
            <Frame onSubmit={(event) => onFormSubmit(event, calculateResult)}>
                <Clock />
                <Title>
                    Kalkulator walutowy
                </Title>
                {loading && (
                    <Loading>
                        Please wait. Currency loading in progress...
                    </Loading>
                )}
                {error && (
                    <Error>
                        Sorry, we couldn't fetch the currency rates at the moment.
                        Please check your internet connection and try again later.
                    </Error>
                )}
                {!loading && !error && currencies && (
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
                                onChange={({ target }) => handleAmountChange(target.value)}
                            />
                            <Selection
                                name="currencyHave"
                                value={conversionData.currencyHave}
                                onChange={({ target }) => handleCurrencyHaveChange(target.value)}
                            >
                                {Object.keys(currencies).map((currency) => (
                                    <option key={currency} value={currency}>
                                        {currency}
                                    </option>
                                ))}
                            </Selection>
                        </Section>

                        <TwoColumnSection>
                            <SectionTitle>Na</SectionTitle>
                            <Selection
                                name="currencyGet"
                                value={conversionData.currencyGet}
                                onChange={({ target }) => handleCurrencyGetChange(target.value)}
                            >
                                {Object.keys(currencies).map((currency) => (
                                    <option key={currency} value={currency}>
                                        {currency}
                                    </option>
                                ))}
                            </Selection>
                        </TwoColumnSection>

                        <ExpendedSection>
                            <Button type="submit" onClick={focusInput}>
                                Przelicz
                            </Button>
                        </ExpendedSection>

                        <ResultContainer>
                            {result !== null && (
                                <Result
                                    date={date}
                                    conversionedAmount={initialAmount}
                                    amount={result}
                                    currencyGet={currencyGet}
                                    currencyHave={currencyHave}
                                />
                            )}
                        </ResultContainer>
                    </>
                )}
            </Frame>
        </Container>
    );
};

export default Form;