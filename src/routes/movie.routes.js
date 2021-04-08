import React from 'react';

//navigation
import { createStackNavigator } from '@react-navigation/stack';

//config
import HeaderThemeConfig from '~/config/configHeader';

//pages
import Movie from '~/screens/private/Movie';

const Stack = createStackNavigator();

function MovieRoutes() {
    return (
        <Stack.Navigator
            initialRouteName="movieScreen"
            headerMode="screen"
            screenOptions={{
                ...HeaderThemeConfig,
            }}
        >
            <Stack.Screen name="movieScreen" component={Movie} />
        </Stack.Navigator>
    );
}

export default MovieRoutes;
