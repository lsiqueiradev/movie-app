import { Dimensions } from 'react-native';

const width = Dimensions.get('screen').width;

export default function Padding() {
    let widthReturn = width * 0.05;
    return widthReturn;
}
