import "./style.css";

const Result = ({ amount, currencyGet, currencyHave, conversionedAmount }) => {
    const resultText = `${conversionedAmount} ${currencyHave} = ${amount} ${currencyGet}`
    return (
        < p className="form__result" >
            <strong className="form__labelText">{resultText}</strong>
        </p >
    );
};

export default Result;