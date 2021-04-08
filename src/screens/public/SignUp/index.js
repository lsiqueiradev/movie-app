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
    InputName,
    InputEmail,
    InputPasswordContent,
    InputPassword,
    ChangeVisibilityPassword,
    ChangeVisibilityPasswordText,
    ButtonSubmit,
    HaveAccount,
    HaveAccountText,
    HaveAccountButton,
    HaveAccountButtonText,
} from './styles';

function SignUp() {
    const navigation = useNavigation();
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(true);
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const passwordRef = useRef();
    const emailRef = useRef();

    function handleChangeVisibilityPassword() {
        setShowPassword(!showPassword);
    }

    function handleToSignIn() {
        navigation.goBack();
        setTimeout(() => {
            navigation.navigate('authNavigator', {
                screen: 'signInScreen',
            });
        }, 200);
    }

    function handleSubmit() {
        setLoading(true);

        if (
            name === 'Lucas Siqueira' &&
            email === 'siqueira228@gmail.com' &&
            password === '123456'
        ) {
            setTimeout(() => {
                showMessage({
                    message: 'Credenciais de login válidas',
                    description: 'Aproveite o aplicativo ao máximo.',
                    type: 'success',
                });
                setLoading(false);
            }, 1000);
        } else {
            setTimeout(() => {
                showMessage({
                    message: 'Credenciais de login inválidas',
                    description: 'Por favor tente novamente.',
                    type: 'danger',
                });
                setLoading(false);
            }, 1000);
        }
    }
    return (
        <Background>
            <Heading>Cadastrar-se</Heading>
            <Container>
                <Description>
                    Preencha as informações necessárias abaixo para concluir com
                    cadastro
                </Description>
                <Form>
                    <InputName
                        icon="person-outline"
                        placeholder="Nome"
                        autoCapitalize="none"
                        autoCorrect={false}
                        returnKeyType="next"
                        onSubmitEditing={() => {
                            emailRef.current.focus();
                        }}
                        onChangeText={setName}
                    />
                    <InputEmail
                        icon="mail-outline"
                        placeholder="Email"
                        ref={emailRef}
                        keyboardType="email-address"
                        autoCapitalize="none"
                        autoCorrect={false}
                        returnKeyType="next"
                        onSubmitEditing={() => {
                            passwordRef.current.focus();
                        }}
                        onChangeText={setEmail}
                    />
                    <InputPasswordContent>
                        <InputPassword
                            icon="lock-closed-outline"
                            placeholder="Senha"
                            secureTextEntry={showPassword}
                            ref={passwordRef}
                            returnKeyType="send"
                            onSubmitEditing={handleSubmit}
                            onChangeText={setPassword}
                        />
                        <ChangeVisibilityPassword
                            onPress={handleChangeVisibilityPassword}
                        >
                            <ChangeVisibilityPasswordText>
                                {!showPassword ? 'Ocultar' : 'Mostrar'}
                            </ChangeVisibilityPasswordText>
                        </ChangeVisibilityPassword>
                    </InputPasswordContent>
                    <ButtonSubmit loading={loading} onPress={handleSubmit}>
                        Cadastrar
                    </ButtonSubmit>
                    <HaveAccount>
                        <HaveAccountText>Já tem uma conta?</HaveAccountText>
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

export default SignUp;
