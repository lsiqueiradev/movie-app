import styled from 'styled-components/native';

//components
import Input from '~/components/Input';
import Button from '~/components/Button';

//utils
import Normalize from '~/utils/Normalize';

//dimensions device
import { border } from '~/utils/DimensionsScreen';

export const Description = styled.Text`
    font-family: 'font_regular';
    font-size: ${Normalize(13)}px;
    color: ${(props) => props.theme.textPrimary};
    margin-bottom: 30px;
`;

export const Container = styled.View`
    padding: 20px ${border}px 0;
`;

export const Form = styled.View``;

export const InputEmail = styled(Input)`
    margin-bottom: 15px;
`;

export const InputPasswordContent = styled.View`
    position: relative;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const InputPassword = styled(Input)`
    width: 100%;
    margin-bottom: 5px;
`;
export const ChangeVisibilityPassword = styled.TouchableOpacity.attrs({
    activeOpacity: 0.9,
})`
    margin-left: -100%;
    margin-right: 18px;
    margin-top: -5px;
`;

export const ChangeVisibilityPasswordText = styled.Text`
    font-family: 'font_medium';
    font-size: ${Normalize(12)}px;
    color: ${(props) => props.theme.inputColorPasswordVisibility};
    text-decoration-line: underline;
    text-decoration-style: solid;
    text-decoration-color: ${(props) =>
        props.theme.inputColorPasswordVisibility};
`;

export const ForgotPassword = styled.View`
    flex-direction: row;
    justify-content: flex-end;
    margin-bottom: 15px;
`;

export const ForgotPasswordButton = styled.TouchableOpacity.attrs({
    activeOpacity: 0.8,
})``;

export const ForgotPasswordText = styled.Text`
    font-family: 'font_light';
    font-size: ${Normalize(10)}px;
    color: ${(props) => props.theme.textPrimary};
`;

export const ButtonSubmit = styled(Button)``;

export const HaveAccount = styled.View`
    flex-direction: row;
    justify-content: center;
    margin-top: 30px;
`;

export const HaveAccountText = styled.Text`
    font-family: 'font_light';
    font-size: ${Normalize(12)}px;
    color: ${(props) => props.theme.textPrimary};
`;

export const HaveAccountButton = styled.TouchableOpacity.attrs({
    activeOpacity: 0.8,
})`
    margin-left: 5px;
`;

export const HaveAccountButtonText = styled.Text`
    font-size: ${Normalize(12)}px;
    font-family: 'font_light';
    color: ${(props) => props.theme.color_main};
`;
