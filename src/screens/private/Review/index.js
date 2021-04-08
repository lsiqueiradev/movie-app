/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef, useEffect } from 'react';

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

//styles
import { Container } from './styles';

function Reviews() {
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
            title: 'Comentários',
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

    return (
        <Background>
            <Container
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
            >
                <Heading>Comentários</Heading>
            </Container>
        </Background>
    );
}

export default Reviews;
