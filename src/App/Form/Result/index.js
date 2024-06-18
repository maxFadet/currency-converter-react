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
                <span>
                    {amount}
                    {currencyGet}
                </span>
            </Content>
            <SmallContent>
                <p>
                    Kursy pochodzą ze strony nbp.pl z tabeli nr 102/A/NBP/2024 z dnia &nbsp;
                    <strong>
                        {date.toLocaleDateString()}
                    </strong>
                </p>
            </SmallContent>
        </Container>
    );
};

export default Result;
