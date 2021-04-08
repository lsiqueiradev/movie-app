import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import user from './user/sagas';
import map from './map/sagas';
import loading from './loading/sagas';

export default function* rootSaga() {
    return yield all([auth, user, loading, map]);
}
