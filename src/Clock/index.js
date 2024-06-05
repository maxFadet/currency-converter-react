import React from "react";
import "./style.css";

const Clock = () => {
    const now = new Date();
    const dateString = now.toLocaleDateString("pl-PL", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    });
    const timeString = now.toLocaleTimeString();

    return (
        <div className="form__date">
            Dzisiaj jest <span>{dateString}, {timeString}</span>
        </div>
    );
};

export default Clock;
