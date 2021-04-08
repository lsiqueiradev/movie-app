import React from 'react';

//navigation
import { createStackNavigator } from '@react-navigation/stack';

//config
import HeaderThemeConfig from '~/config/configHeader';

//pages
import Review from '~/screens/private/Review';

const Stack = createStackNavigator();

function ReviewRoutes() {
    return (
        <Stack.Navigator
            initialRouteName="reviewScreen"
            headerMode="screen"
            screenOptions={{
                ...HeaderThemeConfig,
            }}
        >
            <Stack.Screen name="reviewScreen" component={Review} />
        </Stack.Navigator>
    );
}

export default ReviewRoutes;
