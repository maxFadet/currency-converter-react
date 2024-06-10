import { Container, Content, Separator, SmallContent } from "./styled"

const Result = ({
    amount,
    currencyGet,
    currencyHave,
    conversionedAmount
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
                Kursy pochodzą ze strony nbp.pl z tabeli nr 102/A/NBP/2024 z dnia 2024-05-27
            </SmallContent>
        </Container>
    );
};

export default Result;
