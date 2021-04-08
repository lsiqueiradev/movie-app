import React from 'react';

import { Container, Image, Name } from './styles';

function PeopleItem({ item }) {
    let image = item.profile_path
        ? {
              uri:
                  'https://www.themoviedb.org/t/p/w138_and_h175_face' +
                  item.profile_path,
          }
        : require('~/assets/empty-people.jpg');
    return (
        <Container>
            <Image source={image} />
            <Name>{item.name}</Name>
        </Container>
    );
}

export default PeopleItem;
