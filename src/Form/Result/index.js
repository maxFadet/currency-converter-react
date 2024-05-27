import "./style.css";

const Result = ({ amount, currencyGet }) => {
    return (
        < p className="form__result" >
            <span className="form__labelText">Otrzymam:</span>
            <strong className="form__labelText">{amount}</strong>
            <span className="form__labelText">{currencyGet}</span>
        </p >
    );
};

export default Result;