import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
    height: 50px;
    background: ${(props) => (props.color ? props.color : '#000000')};
    border-radius: 4px;
    align-items: center;
    justify-content: center;
`;

export const ButtonText = styled.Text`
    color: ${(props) => (props.colorText ? props.colorText : '#ffffff')};
    font-family: 'font_bold';
    font-size: 16px;
`;
