import styled from 'styled-components/native';

//elements
import { Animated } from 'react-native';

const Container = styled(Animated.View)`
    background-color: #1a1a1a;
    height: ${(props) => props.height};
`;

export default Container;
