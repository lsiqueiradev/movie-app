import styled from 'styled-components/native';

// react-native
import { Animated } from 'react-native';

// icons
import { Ionicons } from '@expo/vector-icons';

export const Container = styled.TouchableOpacity`
    margin-right: ${(props) => props.margin}px;
`;

export const Separator = styled.View`
    width: 10px;
`;

export const Image = styled(Animated.Image)`
    width: 115px;
    height: 160px;
    border-radius: 3px;
`;

export const Name = styled.Text`
    margin-top: 5px;
    max-width: 98px;
    color: ${(props) => props.theme.textPrimary};
    font-family: font_bold;
    font-size: 13.5px;
`;

export const Status = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const Star = styled(Ionicons).attrs({
    name: 'star',
    size: 14,
    color: '#FFCD3C',
})``;

export const Info = styled.Text`
    margin-left: 4px;
    color: gray;
    font-family: font_light;
`;
