import styled from "styled-components";

export const Frame = styled.form`
  display: grid;
  grid-gap: ${({ theme }) => theme.spacing.large};
  border: ${({ theme }) => theme.border.borderNone};
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.border.boxShadow};
  border-radius: ${({ theme }) => theme.border.borderRadius};
  padding: ${({ theme }) => theme.spacing.extraLarge};
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSizes.large};
  text-align: center;
  margin-top: 0;
`;

export const Section = styled.label`
  display: grid;
  grid-template-columns: 1fr 1fr auto;
  grid-gap: ${({ theme }) => theme.spacing.large};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

export const TwoColumnSection = styled(Section)`
  grid-template-columns: auto 65%;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

export const ExpendedSection = styled(Section)`
  grid-template-columns: 1fr;
`;

export const SectionTitle = styled.span`
  margin: ${({ theme }) => theme.spacing.medium} 0;
`;

export const Type = styled.input`
  border: ${({ theme }) => theme.border.borderLine} ${({ theme }) => theme.colors.grey};
  padding: ${({ theme }) => theme.spacing.small};
  border-radius: ${({ theme }) => theme.border.borderRadius};

  &:required {
    border-color: ${({ theme }) => theme.colors.grey};
  }
`;

export const Selection = styled.select`
  border: 
  ${({ theme }) => theme.border.borderLine} ${({ theme }) => theme.colors.lightGrey};
  padding: ${({ theme }) => theme.spacing.small};
  border-radius: ${({ theme }) => theme.border.borderRadius};
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.white};
`;

export const Button = styled.button`
  border: ${({ theme }) => theme.border.borderNone};
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing.medium};
  border-radius: ${({ theme }) => theme.border.borderRadius};
  transition: 0.4s;
  cursor: ${({ theme }) => theme.cursor.cursorPointer};

  &:hover {
    transform: scale(1.010);
    background: ${({ theme }) => theme.colors.buttonHover};
  }

  &:active {
    transform: scale(1);
    transition: 0.09s ease;
    background: ${({ theme }) => theme.colors.buttonActive};
  }
`;
