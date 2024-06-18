import styled from "styled-components";

export const Container = styled.div`
    text-align: center;
`;

export const Content = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  margin: ${({ theme }) => theme.spacing.medium} 0;
`;

export const SmallContent = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.small};
  line-height: 1.5;
`;

export const Separator = styled.span`
  margin: 0 ${({ theme }) => theme.spacing.large};
`;