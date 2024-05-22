
import "./style.css";


const Select = ({ name, defaultValue = "1", otherColor = false }) => (
  <p>
    <label>
      <span className="form__labelText">{name === "currencyGet" ? "Na" : ""}</span>
      <select
        className={`form__textArea ${otherColor ? "form__textArea--otherColor" : ""}`}
        name={name}
        defaultValue={defaultValue}
      >
        <option value="1">PLN</option>
        <option value="4.17">USD</option>
        <option value="4.59">EUR</option>
      </select>
    </label>
  </p>
);

export default Select;


// const [count, setCount] = useState(0);
// <p>Licznik: {count}</p>
// <button onClick={() => setCount(count => count + 1)}> +1</button>