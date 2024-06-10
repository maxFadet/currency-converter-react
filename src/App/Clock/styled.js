import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: end;
    color: grey;
    font-family: "Courier Prime", monospace;
    font-weight: 400;
    font-style: normal;
    font-size: smaller;

    @media (max-width: 767px) {
        flex-direction: column;
    }
`;