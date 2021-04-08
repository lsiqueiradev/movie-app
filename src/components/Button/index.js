import React from 'react';

//components
import Loader from '~/components/Loader';

//react native
import { Container, ButtonText } from './styles';

export default function Button({
    children,
    loading,
    color,
    colorText,
    ...rest
}) {
    return (
        <Container color={color} {...rest}>
            {loading ? (
                <Loader />
            ) : (
                <ButtonText colorText={colorText}>{children}</ButtonText>
            )}
        </Container>
    );
}
