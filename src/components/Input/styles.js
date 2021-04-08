import styled from 'styled-components/native';
//icons
import { Ionicons } from '@expo/vector-icons';

export const Container = styled.View`
    padding: 0 15px;
    height: 50px;
    background: ${(props) => props.theme.inputBackground};
    border-radius: 4px;
    flex-direction: row;
    align-items: center;
`;

export const TextInput = styled.TextInput.attrs((props) => ({
    placeholderTextColor: props.theme.inputColorPlaceholder,
}))`
    flex: 1;
    font-size: 15px;
    margin-left: 10px;
    color: ${(props) => props.theme.inputColor};
    font-family: 'font_medium';
`;

export const IconInput = styled(Ionicons).attrs((props) => ({
    size: 20,
    color: props.theme.inputIcon,
}))``;
