import { Container, Content, Separator, SmallContent } from "./styled"

const Result = ({
    amount,
    currencyGet,
    currencyHave,
    conversionedAmount,
    date
}) => {

    return (
        <Container>
            <Content>
                <span>
                    {conversionedAmount}
                    {currencyHave}
                </span>
                <Separator>
                    =
                </Separator>
                <strong>
                    {amount}
                    {currencyGet}
                </strong>
            </Content>
            <SmallContent>
                Kursy walut pobierane są z Europejskiego Banku Centralnego.
                Aktualne na dzień: &nbsp;
                <strong>
                    {date.toLocaleDateString()}
                </strong>
            </SmallContent>
        </Container>
    );
};

export default Result;