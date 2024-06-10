import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: end;
    color: ${({ theme }) => theme.colors.grey};
    font-family: "Courier Prime", monospace;
    font-weight: ${({ theme }) => theme.fontWeight.normal};
    font-style: normal;
    font-size: smaller;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        flex-direction: column;
    }
`;