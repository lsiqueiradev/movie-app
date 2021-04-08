import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import TabRoutes from './bottomTabs.routes';

const RootStack = createStackNavigator();

function AppNavigator() {
    return (
        <RootStack.Navigator initialRouteName="tabRoutes" headerMode="none">
            <RootStack.Screen name="tabRoutes" component={TabRoutes} />
        </RootStack.Navigator>
    );
}

export default AppNavigator;
