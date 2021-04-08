import React from 'react';

//navigation
import { createStackNavigator } from '@react-navigation/stack';

//config
import HeaderThemeConfig from '~/config/configHeader';

//pages
import Search from '~/screens/private/Search';

const Stack = createStackNavigator();

function SearchRoutes() {
    return (
        <Stack.Navigator
            initialRouteName="searchScreen"
            screenOptions={{
                ...HeaderThemeConfig,
            }}
        >
            <Stack.Screen name="searchScreen" component={Search} />
        </Stack.Navigator>
    );
}

export default SearchRoutes;
