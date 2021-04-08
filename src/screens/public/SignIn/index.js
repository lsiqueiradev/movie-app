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
    InputPasswordContent,
    InputPassword,
    ChangeVisibilityPassword,
    ChangeVisibilityPasswordText,
    ForgotPassword,
    ForgotPasswordButton,
    ForgotPasswordText,
    ButtonSubmit,
    HaveAccount,
    HaveAccountText,
    HaveAccountButton,
    HaveAccountButtonText,
} from './styles';

function SignIn() {
    const navigation = useNavigation();
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const passwordRef = useRef();

    function handleChangeVisibilityPassword() {
        setShowPassword(!showPassword);
    }

    function handleToForgotPassword() {
        navigation.navigate('authNavigator', {
            screen: 'forgotPasswordScreen',
        });
    }

    function handleToSignUp() {
        navigation.goBack();
        setTimeout(() => {
            navigation.navigate('authNavigator', {
                screen: 'signUpScreen',
            });
        }, 200);
    }

    function handleSubmit() {
        setLoading(true);

        if (email === 'siqueira228@gmail.com' && password === '123456') {
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
            <Heading>Fazer login</Heading>
            <Container>
                <Description>
                    Use seu e-mail e senha para fazer login
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
                    <ForgotPassword>
                        <ForgotPasswordButton onPress={handleToForgotPassword}>
                            <ForgotPasswordText>
                                Esqueci a senha
                            </ForgotPasswordText>
                        </ForgotPasswordButton>
                    </ForgotPassword>
                    <ButtonSubmit loading={loading} onPress={handleSubmit}>
                        Entrar
                    </ButtonSubmit>
                    <HaveAccount>
                        <HaveAccountText>Não tem uma conta?</HaveAccountText>
                        <HaveAccountButton onPress={handleToSignUp}>
                            <HaveAccountButtonText>
                                Cadastrar-se
                            </HaveAccountButtonText>
                        </HaveAccountButton>
                    </HaveAccount>
                </Form>
            </Container>
        </Background>
    );
}

export default SignIn;
