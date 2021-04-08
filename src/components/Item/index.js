import React, { useRef } from 'react';

// react-native
import { Animated } from 'react-native';

// navigation
import { useNavigation } from '@react-navigation/native';

//styles
import { Container, Image, Name, Status, Star, Info } from './styles';

function Item({ item, margin }) {
    const fade = useRef(new Animated.Value(0)).current;
    const navigation = useNavigation();

    const onLoad = () => {
        // Will change fadeAnim value to 1 in 5 seconds
        Animated.timing(fade, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true,
        }).start();
    };

    return (
        <Container
            margin={margin}
            onPress={() =>
                navigation.navigate('movieRoutes', {
                    screen: 'movieScreen',
                    params: {
                        id: item.id,
                    },
                })
            }
        >
            <Image
                source={{
                    uri:
                        'https://www.themoviedb.org/t/p/w220_and_h330_face' +
                        item.poster_path,
                }}
                style={[{ opacity: fade }]}
                onLoad={onLoad}
            />
            <Name numberOfLines={1}>{item.original_title}</Name>
            <Status>
                <Star />
                <Info>{item.vote_average}</Info>
            </Status>
        </Container>
    );
}

export default Item;
