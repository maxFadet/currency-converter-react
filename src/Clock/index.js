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
        year: "numeric"
    });

    const formattedTime = time.toLocaleTimeString();

    return (
        <div className="form__date">
            <div>Dzisiaj jest</div>
            <div>{formattedDate}</div>
            <div>{formattedTime}</div>
        </div>
    );
};

export default Clock;
