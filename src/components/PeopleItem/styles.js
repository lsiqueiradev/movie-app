import styled from 'styled-components/native';

export const Container = styled.View`
    width: 100px;
    align-items: center;
    margin-right: 10px;
`;

export const Image = styled.Image`
    width: 80px;
    height: 80px;
    border-radius: 80px;
`;

export const Name = styled.Text`
    text-align: center;
    margin-top: 10px;
    font-family: font_regular;
    color: ${(props) => props.theme.textPrimary};
`;
