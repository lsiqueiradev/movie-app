import React from 'react';

import { Container, Title } from './styles';

function Heading({ children }) {
    return (
        <Container>
            <Title>{children}</Title>
        </Container>
    );
}

export default Heading;
