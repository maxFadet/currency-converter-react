import React, { useState, useEffect } from "react";
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

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timerID = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(timerID)
        };
    }, []);

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
