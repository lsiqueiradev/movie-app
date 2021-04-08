import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AnimatedTabBar from '@gorhom/animated-tabbar';
import { useTheme } from '@react-navigation/native';

import HomeSVG from '~/components/BottomTabIcons/HomeSVG';
import LikeSVG from '~/components/BottomTabIcons/LikeSVG';
import SearchSVG from '~/components/BottomTabIcons/SearchSVG';
import ProfileSVG from '~/components/BottomTabIcons/ProfileSVG';

import HomeStack from '~/routes/home.routes';
import LikesStack from '~/routes/likes.routes';
import SearchStack from '~/routes/search.routes';
import ProfileStack from '~/routes/profile.routes';

const Tab = createBottomTabNavigator();

function BottomTabs() {
    const { colors } = useTheme();

    const tabs = {
        homeTab: {
            labelStyle: {
                color: colors.text,
            },
            icon: {
                component: HomeSVG,
                color: 'rgba(63,62,69,1)',
            },
            indicator: {
                color: 'rgba(91,55,183,0.5)',
            },
        },
        likesTab: {
            labelStyle: {
                color: colors.text,
            },
            icon: {
                component: LikeSVG,
                color: 'rgba(63,62,69,1)',
            },
            indicator: {
                color: 'rgba(201,55,157,0.5)',
            },
        },
        searchTab: {
            labelStyle: {
                color: colors.text,
            },
            icon: {
                component: SearchSVG,
                color: 'rgba(63,62,69,1)',
            },
            indicator: {
                color: 'rgba(230,169,25,0.5)',
            },
        },
        profileTab: {
            labelStyle: {
                color: colors.text,
            },
            icon: {
                component: ProfileSVG,
                color: 'rgba(63,62,69,1)',
            },
            indicator: {
                color: 'rgba(17,148,170,0.5)',
            },
        },
    };
    return (
        <>
            <Tab.Navigator
                tabBar={(props) => (
                    <AnimatedTabBar
                        preset="flashy"
                        style={{
                            backgroundColor: colors.background,
                            borderTopColor: colors.borderBottomTab,
                            borderTopWidth: 1,
                        }}
                        tabs={tabs}
                        {...props}
                    />
                )}
                initialRouteName="homeTab"
                sceneAnimationEnabled={false}
            >
                <Tab.Screen
                    name="homeTab"
                    options={{ title: 'Início' }}
                    component={HomeStack}
                />
                <Tab.Screen
                    name="likesTab"
                    options={{ title: 'Salvos' }}
                    component={LikesStack}
                />
                <Tab.Screen
                    name="searchTab"
                    options={{ title: 'Buscar' }}
                    component={SearchStack}
                />
                <Tab.Screen
                    name="profileTab"
                    options={{ title: 'Perfil' }}
                    component={ProfileStack}
                />
            </Tab.Navigator>
        </>
    );
}

export default BottomTabs;
