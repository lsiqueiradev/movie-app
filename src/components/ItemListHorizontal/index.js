import React, { useEffect, useState } from 'react';

// api
import api from '~/services/api';

//components
import Item from '~/components/Item';

import { List } from './styles';

function ItemListHorizontal() {
    const [data, setData] = useState([]);
    useEffect(() => {
        async function getMovies() {
            const response = await api.get(
                '/discover/movie?api_key=fcdb9db3eee5d59211a5e2a25cd2edc9&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1'
            );

            const { results } = response.data;
            setData(results);
        }

        getMovies();
    }, []);

    return (
        <List>
            {data.map((item, index) => (
                <Item
                    key={index}
                    item={item}
                    margin={index !== data.length - 1 ? 10 : 0}
                />
            ))}
        </List>
    );
}

export default ItemListHorizontal;
