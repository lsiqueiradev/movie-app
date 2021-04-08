import styled from 'styled-components/native';
import { width, border } from '~/utils/DimensionsScreen';
import Normalize from '~/utils/Normalize';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

export const Container = styled.ScrollView.attrs({
    contentContainerStyle: {
        paddingBottom: 40,
    },
})`
    flex: 1;
    background-color: ${(props) => props.theme.background};
`;

export const ButtonClose = styled.TouchableOpacity`
    background-color: ${(props) => props.theme.background};
    border-radius: 35px;
    width: 35px;
    height: 35px;
    align-items: center;
    justify-content: center;
`;
export const Banner = styled.ImageBackground`
    width: 100%;
    height: ${width}px;
`;

export const Header = styled.View`
    padding: 0 ${border}px;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    margin-top: -90px;
    flex: 1;
`;

export const LeftSide = styled.View``;

export const RightSide = styled.View`
    flex: 1;
    padding-left: ${border}px;
`;

export const Poster = styled.Image`
    width: 115px;
    height: 160px;
    border-radius: 3px;
`;

export const Title = styled.Text`
    color: ${(props) => props.theme.textPrimary};
    font-family: 'font_semibold';
    font-size: ${Normalize(17)}px;
    max-width: 100%;
`;

export const Year = styled.Text``;

export const DescItem = styled.View`
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin-top: 4px;
`;

export const DescItemText = styled.Text`
    color: ${(props) => props.theme.textPrimary};
    font-family: 'font_regular';
    font-size: ${Normalize(11)}px;
    margin-left: 4px;
`;

export const DescItemIcon = styled(Ionicons).attrs((props) => ({
    color: props.theme.textPrimary,
    size: 20,
}))`
    margin-right: 4px;
`;

export const Imdb = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    margin-top: 18px;
`;

export const ImdbIcon = styled(Ionicons).attrs({
    name: 'star',
    size: 20,
    color: '#FFCD3C',
})`
    position: relative;
    top: -2px;
`;

export const ImdbNumber = styled.Text`
    color: ${(props) => props.theme.textPrimary};
    font-family: 'font_semibold';
    font-size: ${Normalize(15)}px;
    margin-left: 7px;
`;

export const ImdbText = styled.Text`
    color: ${(props) => props.theme.textPrimary};
    font-family: 'font_regular';
    font-size: ${Normalize(13)}px;
`;

export const Overlay = styled(LinearGradient).attrs((props) => ({
    colors: ['transparent', props.theme.background],
}))`
    width: 100%;
    height: 100%;
`;

export const Body = styled.View`
    padding: 15px 0;
`;

export const TitleSection = styled.Text`
    font-size: ${Normalize(18)}px;
    color: ${(props) => props.theme.textPrimary};
    font-family: font_bold;
    margin-bottom: 4px;
    padding: 0 ${border}px;
`;

export const DescriptionSection = styled.Text`
    font-size: ${Normalize(12)}px;
    color: ${(props) => props.theme.textPrimary};
    font-family: font_regular;
    line-height: 23px;
    padding: 0 ${border}px;
    margin-bottom: 20px;
`;

export const GenresContent = styled.ScrollView.attrs({
    contentContainerStyle: {
        paddingLeft: border,
        paddingRight: border,
    },
    showsHorizontalScrollIndicator: false,
    horizontal: true,
})`
    padding-bottom: 10px;
    margin-bottom: 20px;
`;

export const GenresItem = styled.View`
    background-color: #27272a;
    border-radius: 2px;
    padding: 10px;
    margin-right: 10px;
`;

export const GenresText = styled.Text`
    color: ${(props) => props.theme.textPrimary};
    font-family: font_regular;
`;

export const CastsContent = styled.ScrollView.attrs({
    contentContainerStyle: {
        paddingLeft: border,
        paddingRight: border,
    },
    showsHorizontalScrollIndicator: false,
    horizontal: true,
})`
    margin-bottom: 20px;
`;

export const RecommendationsContent = styled.ScrollView.attrs({
    contentContainerStyle: {
        paddingLeft: border,
        paddingRight: border,
    },
    showsHorizontalScrollIndicator: false,
    horizontal: true,
})`
    margin-top: 10px;
    margin-bottom: 20px;
`;
