import { useCurrentDate } from "./useCurrentDate";
import { Container } from "./styled";

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
        <Container>
            <div>Dzisiaj jest &nbsp;</div>
            <div>
                {formattedDate(time)}
            </div>
        </Container>
    );
};

export default Clock;