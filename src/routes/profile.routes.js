import React from 'react';

//navigation
import { createStackNavigator } from '@react-navigation/stack';

//config
import HeaderThemeConfig from '~/config/configHeader';

//pages
import Profile from '~/screens/private/Profile';

const Stack = createStackNavigator();

function ProfileRoutes() {
    return (
        <Stack.Navigator
            initialRouteName="profileScreen"
            headerMode="screen"
            screenOptions={{
                ...HeaderThemeConfig,
            }}
        >
            <Stack.Screen name="profileScreen" component={Profile} />
        </Stack.Navigator>
    );
}

export default ProfileRoutes;
