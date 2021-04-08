import React from 'react';

//navigation
import { createStackNavigator } from '@react-navigation/stack';

//config
import HeaderThemeConfig from '~/config/configHeader';

//pages
import Home from '~/screens/private/Home';

const Stack = createStackNavigator();

function HomeRoutes() {
    return (
        <Stack.Navigator
            initialRouteName="homeScreen"
            headerMode="screen"
            screenOptions={{
                ...HeaderThemeConfig,
            }}
        >
            <Stack.Screen name="homeScreen" component={Home} />
        </Stack.Navigator>
    );
}

export default HomeRoutes;
