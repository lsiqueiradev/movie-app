import { combineReducers } from 'redux';

import auth from './auth/reducer';
import user from './user/reducer';
import loading from './loading/reducer';
import map from './map/reducer';

export default combineReducers({
    auth,
    user,
    loading,
    map,
});
