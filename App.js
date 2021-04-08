import React from 'react';
import './src/config/ReactotronConfig';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, headerDark, headerLight } from '~/styles/theme';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from '~/services/RootNavigation';
import AppLoading from 'expo-app-loading';

import App from './src';
import { persistor, store } from './src/store';
import FlashMessage from 'react-native-flash-message';

import { useColorScheme } from 'react-native';
import { StatusBar } from 'expo-status-bar'; // automatically switches bar style based on theme!

import {
    useFonts,
    Poppins_100Thin,
    Poppins_200ExtraLight,
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Poppins_800ExtraBold,
    Poppins_900Black,
} from '@expo-google-fonts/poppins';

export default function Index() {
    const colorScheme = useColorScheme();

    let [fontsLoaded] = useFonts({
        font_thin: Poppins_100Thin,
        font_extralight: Poppins_200ExtraLight,
        font_light: Poppins_300Light,
        font_regular: Poppins_400Regular,
        font_medium: Poppins_500Medium,
        font_semibold: Poppins_600SemiBold,
        font_bold: Poppins_700Bold,
        font_extrabold: Poppins_800ExtraBold,
        font_black: Poppins_900Black,
    });
    if (!fontsLoaded) {
        return <AppLoading />;
    }
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <NavigationContainer
                    ref={navigationRef}
                    theme={colorScheme === 'light' ? headerLight : headerDark}
                >
                    <ThemeProvider
                        theme={colorScheme === 'light' ? lightTheme : darkTheme}
                    >
                        <App />
                        <StatusBar />
                        <FlashMessage floating position="top" />
                    </ThemeProvider>
                </NavigationContainer>
            </PersistGate>
        </Provider>
    );
}
