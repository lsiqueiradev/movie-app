import styled from 'styled-components/native';

export const Container = styled.FlatList`
    flex: 1;
    background-color: ${(props) => props.theme.background};
`;

export const Text = styled.Text`
    color: ${(props) => props.theme.textPrimary};
`;

export const Button = styled.TouchableOpacity``;
