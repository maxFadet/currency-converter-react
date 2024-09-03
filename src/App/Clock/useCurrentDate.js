import { useState, useEffect } from "react";

export const useCurrentDate = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timerID = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(timerID)
        };
    }, []);

    return time;
};