import "./style.css";

const Result = ({ amount, currencyGet, currencyHave, conversionedAmount }) => {
    const resultText = (
        <>
            <span>{conversionedAmount} {currencyHave}</span>
            <span className="result__separator"> = </span>
            <span>{amount} {currencyGet}</span>
        </>
    );

    return (
        <div className="result">
            <p className="result__text">{resultText}</p>
            <p className="result__text result__text--smollerText">Kursy pochodzą ze strony nbp.pl z tabeli nr 102/A/NBP/2024 z dnia 2024-05-27</p>
        </div>
    );
};

export default Result;
