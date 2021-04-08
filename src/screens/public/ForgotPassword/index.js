import React, { useState, useRef } from 'react';

//navigation
import { useNavigation } from '@react-navigation/native';

//components
import Background from '~/components/Background';
import Heading from '~/components/Heading';

//notifications
import { showMessage } from 'react-native-flash-message';

//react native
import {
    Container,
    Description,
    Form,
    InputEmail,
    ButtonSubmit,
    HaveAccount,
    HaveAccountText,
    HaveAccountButton,
    HaveAccountButtonText,
} from './styles';

function ForgotPassword() {
    const navigation = useNavigation();
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const passwordRef = useRef();

    function handleToSignIn() {
        navigation.goBack();
    }

    function handleSubmit() {
        setLoading(true);
        setTimeout(() => {
            showMessage({
                message: 'Verifique sua caixa de entrada!',
                description: `Enviamos um link para redefinir sua senha para ${email}`,
                type: 'success',
                backgroundColor: '#ffffff', // background color
                color: '#000000', // text color
                duration: 5000,
            });
            setLoading(false);
        }, 1000);
    }
    return (
        <Background>
            <Heading>Redefinir</Heading>
            <Container>
                <Description>
                    Insira o endereço de email associado à sua conta e nós
                    enviaremos um link de redefinição para você
                </Description>
                <Form>
                    <InputEmail
                        icon="mail-outline"
                        placeholder="Email"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        autoCorrect={false}
                        returnKeyType="next"
                        onSubmitEditing={() => {
                            passwordRef.current.focus();
                        }}
                        onChangeText={setEmail}
                    />
                    <ButtonSubmit loading={loading} onPress={handleSubmit}>
                        Enviar link
                    </ButtonSubmit>
                    <HaveAccount>
                        <HaveAccountText>Lembrou a senha?</HaveAccountText>
                        <HaveAccountButton onPress={handleToSignIn}>
                            <HaveAccountButtonText>
                                Logar-se
                            </HaveAccountButtonText>
                        </HaveAccountButton>
                    </HaveAccount>
                </Form>
            </Container>
        </Background>
    );
}

export default ForgotPassword;
