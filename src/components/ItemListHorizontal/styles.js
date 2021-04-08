import styled from 'styled-components/native';

import { border } from '~/utils/DimensionsScreen';

export const List = styled.ScrollView.attrs({
    contentContainerStyle: {
        paddingLeft: border,
        paddingRight: border,
    },
    showsHorizontalScrollIndicator: false,
    horizontal: true,
})``;
