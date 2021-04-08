import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default (reducers) => {
    const persistedReducer = persistReducer(
        {
            key: 'velosoapp',
            storage: AsyncStorage,
            whitelist: ['auth', 'user', 'map'],
        },
        reducers
    );

    return persistedReducer;
};
