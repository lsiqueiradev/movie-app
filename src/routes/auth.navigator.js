import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { useTheme } from '@react-navigation/native';

// icons
import { Ionicons } from '@expo/vector-icons';

//react native
import { TouchableOpacity } from 'react-native';

//config
import HeaderThemeConfig from '~/config/configHeader';

//screens
import Welcome from '~/screens/public/Welcome';
import SignIn from '~/screens/public/SignIn';
import SignUp from '~/screens/public/SignUp';
import ForgotPassword from '~/screens/public/ForgotPassword';

const AuthStack = createStackNavigator();

function AuthNavigator() {
    const { colors } = useTheme();
    return (
        <AuthStack.Navigator
            initialRouteName="welcomeScreen"
            mode="modal"
            screenOptions={{
                ...HeaderThemeConfig,
                headerTransparent: false,
                headerTitle: null,
            }}
        >
            <AuthStack.Screen name="welcomeScreen" component={Welcome} />
            <AuthStack.Screen
                name="signInScreen"
                component={SignIn}
                options={({ navigation }) => ({
                    headerLeft: () => (
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Ionicons
                                name="close"
                                size={34}
                                color={colors.text}
                            />
                        </TouchableOpacity>
                    ),
                })}
            />
            <AuthStack.Screen
                name="signUpScreen"
                component={SignUp}
                options={({ navigation }) => ({
                    headerLeft: () => (
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Ionicons
                                name="close"
                                size={34}
                                color={colors.text}
                            />
                        </TouchableOpacity>
                    ),
                })}
            />
            <AuthStack.Screen
                name="forgotPasswordScreen"
                component={ForgotPassword}
                options={({ navigation }) => ({
                    headerLeft: () => (
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Ionicons
                                name="close"
                                size={34}
                                color={colors.text}
                            />
                        </TouchableOpacity>
                    ),
                })}
            />
        </AuthStack.Navigator>
    );
}

export default AuthNavigator;
