import { useCurrentDate } from "./useCurrentDate";
import "./style.css";

const formattedDate = (time) => time.toLocaleDateString(undefined, {
    weekday: "long",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    day: "numeric",
    month: "long"
});

const Clock = () => {
    const time = useCurrentDate();


    return (
        <div className="form__date">
            <div>Dzisiaj jest &nbsp;</div>
            <div>
                {formattedDate(time)}
            </div>
        </div>
    );
};

export default Clock;
