/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef, useEffect, useMemo } from 'react';

//navigation
import { useHeaderHeight } from '@react-navigation/stack';
import {
    useTheme,
    useScrollToTop,
    useNavigation,
} from '@react-navigation/native';

//components react native
import { Animated } from 'react-native';

//components
import Background from '~/components/Background';
import BackgroundHeader from '~/components/BackgroundHeader';
import Heading from '~/components/Heading';
import ListHorizontal from '~/components/ListHorizontal';

//styles
import { Container } from './styles';

function Home() {
    const { colors } = useTheme();
    const navigation = useNavigation();
    const offset = useRef(new Animated.Value(0)).current;
    const height = useHeaderHeight();

    const titleOpacity = offset.interpolate({
        inputRange: [0, 46],
        outputRange: [0, 1],
        extrapolate: 'clamp',
    });

    const headerOpacity = offset.interpolate({
        inputRange: [0, 20],
        outputRange: [0, 1],
        extrapolate: 'clamp',
    });

    const headerBorderHeight = offset.interpolate({
        inputRange: [0, 20],
        outputRange: [0, 0.5],
        extrapolate: 'clamp',
    });

    useEffect(() => {
        navigation.setOptions({
            title: 'Explorar',
            headerTitleStyle: {
                opacity: titleOpacity,
            },
            headerBackground: () => (
                <BackgroundHeader
                    style={[
                        {
                            height: height,
                            borderWidth: headerBorderHeight,
                            borderColor: colors.border,
                            backgroundColor: colors.card,
                        },
                        {
                            opacity: headerOpacity,
                        },
                    ]}
                />
            ),
        });
    }, [headerOpacity]);

    useScrollToTop(offset);

    const { data } = useMemo(() => {
        const items = [
            {
                key: 'PAGE_HEADING',
                render: () => <Heading>Explorar</Heading>,
            },
            { key: 'C1', render: () => <ListHorizontal /> },

            // {
            //     key: 'LIVE_CHANNELS',
            //     render: () => <Title>Live Channels</Title>,
            //     isTitle: true,
            // },
            // { key: 'C2', render: () => <StreamList /> },

            // {
            //     key: 'CONTINUE_WATCHING',
            //     render: () => <View />,
            //     isTitle: true,
            // },
            // { key: 'C3', render: () => <View /> },

            // {
            //     key: 'OFFLINE_CHANNELS',
            //     render: () => <Title>Offline Channels</Title>,
            //     isTitle: true,
            // },
            // { key: 'C4', render: () => <ChannelList /> },
        ];

        // const indices = [];

        return {
            data: items,
        };
    }, []);

    return (
        <Background>
            <Container
                data={data}
                renderItem={({ item }) => item.render()}
                contentContainerStyle={{ paddingTop: height }}
                ref={offset}
                scrollEventThrottle={16}
                onScroll={Animated.event(
                    [
                        {
                            nativeEvent: { contentOffset: { y: offset } },
                        },
                    ],
                    { useNativeDriver: false }
                )}
            />
        </Background>
    );
}

export default Home;
