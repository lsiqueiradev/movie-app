/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef, useEffect, useState } from 'react';

//navigation
import { useHeaderHeight } from '@react-navigation/stack';
import {
    useTheme,
    useScrollToTop,
    useNavigation,
} from '@react-navigation/native';

// icons
import { Ionicons, Entypo } from '@expo/vector-icons';

//components react native
import { Animated } from 'react-native';

//utils
import { width } from '~/utils/DimensionsScreen';
import FormatHour from '~/utils/FormatHour';
import FormatDate from '~/utils/FormatDate';

// api
import api from '~/services/api';

//components
import Background from '~/components/Background';
import BackgroundHeader from '~/components/BackgroundHeader';
import LoaderView from '~/components/LoaderView';
import PeopleItem from '~/components/PeopleItem';
import Item from '~/components/Item';

//styles
import {
    Container,
    ButtonClose,
    Banner,
    Header,
    LeftSide,
    RightSide,
    Title,
    Poster,
    Overlay,
    DescItem,
    DescItemText,
    DescItemIcon,
    Imdb,
    ImdbIcon,
    ImdbNumber,
    ImdbText,
    Body,
    TitleSection,
    DescriptionSection,
    GenresContent,
    GenresItem,
    GenresText,
    CastsContent,
    RecommendationsContent,
} from './styles';

function Movie({ route }) {
    const { colors } = useTheme();
    const navigation = useNavigation();
    const offset = useRef(new Animated.Value(0)).current;
    const height = useHeaderHeight();
    const [loading, setLoading] = useState(true);
    const [item, setItem] = useState([]);
    const [casts, setCasts] = useState([]);
    const [recommendations, setRecommendations] = useState([]);

    const { id } = route.params;

    const titleOpacity = offset.interpolate({
        inputRange: [0, 46],
        outputRange: [0, 1],
        extrapolate: 'clamp',
    });

    const headerOpacity = offset.interpolate({
        inputRange: [0, width / 2],
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
            title: item.original_title,
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

            headerLeft: () => (
                <ButtonClose onPress={() => navigation.goBack()}>
                    <Ionicons name="close" size={34} color={colors.text} />
                </ButtonClose>
            ),
            headerRight: () => (
                <ButtonClose>
                    <Entypo name="heart" size={26} color="#f00" />
                </ButtonClose>
            ),
        });
    }, [headerOpacity, item]);

    useScrollToTop(offset);

    useEffect(() => {
        (async () => {
            const [movie, cast, recommendation] = await Promise.all([
                api.get(
                    `/movie/${id}?api_key=fcdb9db3eee5d59211a5e2a25cd2edc9&language=pt-BR`
                ),
                api.get(
                    `/movie/${id}/credits?api_key=fcdb9db3eee5d59211a5e2a25cd2edc9&language=pt-BR`
                ),
                api.get(
                    `/movie/${id}/recommendations?api_key=fcdb9db3eee5d59211a5e2a25cd2edc9&language=pt-BR&page=1`
                ),
            ]);
            setItem(movie.data);
            setCasts(cast.data.cast);
            setRecommendations(recommendation.data.results);
            setLoading(false);
        })();
    }, []);

    if (loading) {
        return <LoaderView />;
    }

    return (
        <Background>
            <Container
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
                <Banner
                    source={{
                        uri:
                            'https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/' +
                            item.backdrop_path,
                    }}
                >
                    <Overlay intensity={100} />
                </Banner>
                <Header>
                    <LeftSide>
                        <Poster
                            source={{
                                uri:
                                    'https://www.themoviedb.org/t/p/w220_and_h330_face' +
                                    item.poster_path,
                            }}
                        />
                    </LeftSide>
                    <RightSide>
                        <Title numberOfLines={1}>{item.title}</Title>
                        <DescItem>
                            <DescItemIcon name="time" />
                            <DescItemText>
                                {FormatHour(item.runtime)}
                            </DescItemText>
                        </DescItem>
                        <DescItem>
                            <DescItemIcon name="calendar-sharp" />
                            <DescItemText>
                                {item.release_date &&
                                    FormatDate(item.release_date)}
                            </DescItemText>
                        </DescItem>
                        <Imdb>
                            <ImdbIcon />
                            <ImdbNumber>{item.vote_average}</ImdbNumber>
                        </Imdb>
                        <ImdbText>IMDb</ImdbText>
                    </RightSide>
                </Header>
                <Body>
                    <TitleSection>Sinopse</TitleSection>
                    <DescriptionSection>{item.overview}</DescriptionSection>
                    <TitleSection>Gêneros</TitleSection>
                    <GenresContent>
                        {item.genres.map((genre) => (
                            <GenresItem>
                                <GenresText>{genre.name}</GenresText>
                            </GenresItem>
                        ))}
                    </GenresContent>
                    <TitleSection>Elenco</TitleSection>
                    <CastsContent>
                        {casts.map((cast) => (
                            <PeopleItem item={cast} />
                        ))}
                    </CastsContent>
                    <TitleSection>Recomendações</TitleSection>
                    <RecommendationsContent>
                        {recommendations.map((recommendation, index) => (
                            <Item
                                item={recommendation}
                                margin={
                                    index !== recommendations.length - 1
                                        ? 10
                                        : 0
                                }
                            />
                        ))}
                    </RecommendationsContent>
                </Body>
            </Container>
        </Background>
    );
}

export default Movie;
