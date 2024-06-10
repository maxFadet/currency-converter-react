import styled from "styled-components";

const Container = styled.main`
    margin: ${({ theme }) => theme.spacing.containerMargin};
    padding: ${({ theme }) => theme.spacing.medium};
    max-width: ${({ theme }) => theme.dimensions.containerMaxWidth};
`;

export default Container;