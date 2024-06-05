import React, { useState, useEffect } from "react";
import "./style.css";

const Clock = () => {

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timerID = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timerID);
    }, []);

    const formattedDate = time.toLocaleDateString("pl-PL", {
        weekday: "long",
        day: "numeric",
        month: "long",
    });

    const formattedTime = time.toLocaleTimeString();

    return (
        <div className="form__date">
            <div>Dzisiaj jest &nbsp;</div>
            <div>
                {formattedDate},&nbsp;
                {formattedTime}
            </div>
        </div>
    );
};

export default Clock;
