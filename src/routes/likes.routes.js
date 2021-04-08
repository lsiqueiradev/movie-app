import React from 'react';

//navigation
import { createStackNavigator } from '@react-navigation/stack';

//config
import HeaderThemeConfig from '~/config/configHeader';

//components

//pages
import Likes from '~/screens/private/Likes';

const Stack = createStackNavigator();

function LikesRoutes() {
    return (
        <Stack.Navigator
            initialRouteName="likesScreen"
            headerMode="screen"
            screenOptions={{
                ...HeaderThemeConfig,
            }}
        >
            <Stack.Screen name="likesScreen" component={Likes} />
        </Stack.Navigator>
    );
}

export default LikesRoutes;
