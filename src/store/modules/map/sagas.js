import { all, takeLatest, call, put, delay } from 'redux-saga/effects';
import { Alert } from 'react-native';
import api from '~/services/api';
import * as RootNavigation from '~/services/RootNavigation.js';

import {
    markersFilterSuccess,
    clearFilterSuccess,
    getMarkersSuccess,
    getRefreshSuccess,
    GetBoatsClickSuccess,
} from './actions';

import { changeLoading } from '../loading/actions';

export function* boatsFilter({ payload }) {
    try {
        const { boatsFavorite, typesFavorite } = payload;

        const response = yield call(api.post, '/boats/filter', {
            boatsFavorite,
            typesFavorite,
        });

        const { boats } = response.data;
        yield put(markersFilterSuccess(boats));
        RootNavigation.goBack();
    } catch (err) {
        Alert.alert('Houve um erro', 'Falha para obter novos dados!');
    }
}

export function* getBoatClick({ payload }) {
    try {
        const { boat_id, filter, dateStart, dateEnd } = payload;
        let sendFilter = '';
        if (filter !== 'stipulated') {
            sendFilter = filter;
        } else {
            sendFilter = {
                startDate: dateStart,
                endDate: dateEnd,
            };
        }

        const response = yield call(api.post, 'boats/boat-click', {
            boat_id,
            filter: sendFilter,
        });
        const { markers } = response.data;

        yield put(GetBoatsClickSuccess(markers, boat_id, dateStart, dateEnd));
    } catch (err) {
        Alert.alert('Houve um erro', 'Falha para obter novos dados!');
    }
}

export function* clearFilter() {
    try {
        const response = yield call(api.get, '/boats', {});

        yield put(clearFilterSuccess(response.data));
    } catch (err) {
        Alert.alert('Houve um erro', 'Falha para obter novos dados!');
    }
}

export function* getMarkers() {
    try {
        const response = yield call(api.get, '/boats', {});

        const { ports, boats } = response.data;
        yield put(getMarkersSuccess(ports, boats));
    } catch (err) {
        Alert.alert('Houve um erro', 'Falha para obter novos dados!');
    }
}

export function* getRefresh() {
    yield put(changeLoading(true));
    try {
        const response = yield call(api.get, '/boats', {});

        const { ports, boats } = response.data;

        yield put(getRefreshSuccess(ports, boats));
        yield delay(500);
        yield put(changeLoading(false));
    } catch (err) {
        Alert.alert('Houve um erro', 'Falha para obter novos dados!');
    }
}

export default all([
    takeLatest('@map/MARKERS_FILTER_REQUEST', boatsFilter),
    takeLatest('@map/CLEAR_FILTER_REQUEST', clearFilter),
    takeLatest('@map/GET_MARKERS_REQUEST', getMarkers),
    takeLatest('@map/GET_BOATS_CLICK_REQUEST', getBoatClick),
    takeLatest('@map/GET_REFRESH_REQUEST', getRefresh),
]);
