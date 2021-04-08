import styled from 'styled-components/native';
import { Animated } from 'react-native';

export const Container = styled(Animated.View)`
    width: 25px;
    height: 25px;
    padding: 0;
    border-width: 2.8px;
    border-top-color: rgba(220, 220, 220, 0.3);
    border-right-color: rgba(220, 220, 220, 0.3);
    border-bottom-color: rgba(220, 220, 220, 0.3);
    border-left-color: #d9d8dd;
    border-radius: 20px;
`;
