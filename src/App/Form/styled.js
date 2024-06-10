import styled from "styled-components";

export const Frame = styled.form`
    background: white;
    display: grid;
    grid-gap: 20px;
    border: none;
    background-color: #ffffff;
    box-shadow: 0px -1px 20px 12px rgb(0 0 0 / 65%);
    border-radius: 10px;
    padding: 25px;
`;

export const Title = styled.h1`
    color: #132433;
    font-size: 25px;
    text-align: center;
    margin-top: 0;
`;

export const Section = styled.label`
    display: grid;
    grid-template-columns: 1fr 1fr auto;
    grid-gap: 20px;

    @media (max-width: 767px) {
        grid-template-columns: 1fr;
    }
`;

export const TwoColumnSection = styled(Section)`
    grid-template-columns: auto 65%;

    @media (max-width: 767px) {
        grid-template-columns: 1fr;
    }
`;

export const ExpendedSection = styled(Section)`
    grid-template-columns: 1fr;
`;

export const SectionTitle = styled.span`
    margin: 15px 0;
`;

export const Type = styled.input`
    border: 2px solid #bdbdbd;
    padding: 10px;
    border-radius: 10px;

    &:required {
        border-color: rgb(128, 128, 128);
    }
`;

export const Selection = styled.select`
    border: 2px solid #bdbdbd;
    padding: 10px;
    border-radius: 10px;
    background-color: #0177a9;
    color: white;
`;

export const Button = styled.button`
    border: none;
    background: #132433;
    color: white;
    padding: 12px;
    border-radius: 10px;
    transition: 0.4s;

    &:hover {
        transform: scale(1.010);
        background: hsl(208.13deg 45.71% 35%);
    }

    &:active {
        transform: scale(1);
        transition: 0.09s ease;
        background: hsl(208.13deg 45.71% 15%);
    }
`;