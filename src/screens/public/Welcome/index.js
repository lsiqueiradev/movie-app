import React from 'react';

//navigation
import { useNavigation } from '@react-navigation/native';
import { useHeaderHeight } from '@react-navigation/stack';

//components
import Background from '~/components/Background';

//styles
import {
    Container,
    LogoContent,
    Logo,
    Body,
    Title,
    Description,
    ContentButtons,
    SignInButton,
    SignUpButton,
} from './styles';

//react-native
import { useColorScheme } from 'react-native';

function Welcome() {
    const colorScheme = useColorScheme();
    const navigation = useNavigation();
    const headerHeight = useHeaderHeight();

    function handleToSignIn() {
        navigation.navigate('authNavigator', {
            screen: 'signInScreen',
        });
    }

    function handleToSignUp() {
        navigation.navigate('authNavigator', {
            screen: 'signUpScreen',
        });
    }
    return (
        <Background>
            <Container style={{ paddingTop: headerHeight }}>
                <LogoContent>
                    <Logo
                        source={
                            colorScheme === 'light'
                                ? require('~/assets/logo-dark.png')
                                : require('~/assets/logo-light.png')
                        }
                        resizeMode="contain"
                    />
                </LogoContent>
                <Body>
                    <Title>Bem-vindo ao MOVIE</Title>
                    <Description>
                        Assista filmes, séries e animes da onde estiver de graça
                    </Description>
                </Body>
                <ContentButtons>
                    <SignInButton onPress={handleToSignIn}>Login</SignInButton>
                    <SignUpButton onPress={handleToSignUp}>
                        Cadastrar
                    </SignUpButton>
                </ContentButtons>
            </Container>
        </Background>
    );
}

export default Welcome;
