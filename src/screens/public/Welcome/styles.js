import styled from 'styled-components/native';

//components
import Button from '~/components/Button';

// utils
import Normalize from '~/utils/Normalize';

//dimensions device
import { width, border } from '~/utils/DimensionsScreen';

export const Container = styled.View`
    padding: 0 ${border}px;
    align-self: stretch;
    flex: 1;
    align-items: flex-start;
    justify-content: space-between;
`;

export const LogoContent = styled.View`
    width: ${(width / 4) * 2}px;
    height: 50px;
`;

export const Logo = styled.Image`
    width: 100%;
    height: 100%;
`;

export const Body = styled.View`
    flex: 1;
    margin-bottom: 100px;
    justify-content: center;
`;

export const Title = styled.Text`
    font-size: ${Normalize(24)}px;
    font-family: 'font_bold';
    color: ${(props) => props.theme.textPrimary};
`;

export const Description = styled.Text`
    font-size: ${Normalize(12)}px;
    font-family: 'font_regular';
    color: ${(props) => props.theme.textPrimary};
`;

export const ContentButtons = styled.View`
    width: 100%;
`;

export const SignInButton = styled(Button).attrs({
    color: '#5a5a53',
})`
    margin-bottom: 15px;
`;

export const SignUpButton = styled(Button).attrs({
    color: '#1c1c1e',
})``;
