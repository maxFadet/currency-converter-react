import "./style.css";

const Input = () => (
    <p>
        <label>
            <span className="form__labelText">
                Wymieniam*
            </span>
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
);

export default Input;