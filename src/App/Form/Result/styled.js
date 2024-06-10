import styled from "styled-components";

export const Container = styled.div`
    text-align: center;
`;

export const Content = styled.p`
    font-size: 20px;
    font-weight: bold;
    margin: 15px 0;
`;

export const SmallContent = styled(Content)`
    font-size: 10px;
    word-break: normal;
    line-height: 1.5;
`;

export const Separator = styled.span`
    margin: 0 20px;
`;