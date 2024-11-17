import styled from "styled-components";

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const CenteredContent = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Footer = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
  padding: 30px;
  margin-top: auto;
`;

export const Link = styled.a`
  text-decoration: underline;
  text-underline-offset: 3px;
  color: ${({ theme }) => theme.colors.white};
  margin-left: 5px;
  &:hover {
    text-decoration: underline;
  }
`;