import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import AppNavigator from './app.navigator';
import AuthNavigator from './auth.navigator';
import MovieRoutes from './movie.routes';
import reviewRoutes from './review.routes';

const RootStack = createStackNavigator();

function RootNavigator() {
    const isSigned = true;
    return (
        <RootStack.Navigator initialRouteName="appNavigator" mode="modal">
            {isSigned ? (
                <>
                    <RootStack.Screen
                        name="appNavigator"
                        component={AppNavigator}
                        options={{
                            headerShown: false,
                        }}
                    />
                    <RootStack.Screen
                        name="movieRoutes"
                        component={MovieRoutes}
                        options={{
                            headerShown: false,
                        }}
                    />
                    <RootStack.Screen
                        name="reviewRoutes"
                        component={reviewRoutes}
                        options={{
                            headerShown: false,
                        }}
                    />
                </>
            ) : (
                <RootStack.Screen
                    name="authNavigator"
                    mode="modal"
                    component={AuthNavigator}
                    options={{
                        headerShown: false,
                    }}
                />
            )}
        </RootStack.Navigator>
    );
}

export default RootNavigator;
