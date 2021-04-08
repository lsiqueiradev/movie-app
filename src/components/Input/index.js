import React, { forwardRef } from 'react';

//styles
import { Container, TextInput, IconInput } from './styles';

function Input({ icon, style, ...rest }, ref) {
    return (
        <Container style={style}>
            {icon && <IconInput name={icon} />}
            <TextInput {...rest} ref={ref} />
        </Container>
    );
}

export default forwardRef(Input);
