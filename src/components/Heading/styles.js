import styled from 'styled-components/native';

//utils
import { border } from '~/utils/DimensionsScreen';
import Normalize from '~/utils/Normalize';

export const Container = styled.View`
    padding: 0 ${border}px;
    margin-bottom: 15px;
`;

export const Title = styled.Text`
    color: ${(props) => props.theme.textPrimary};
    font-size: ${Normalize(34)}px;
    font-family: 'font_semibold';
`;
