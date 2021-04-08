import { all, takeLatest, call, put } from 'redux-saga/effects';
import { Alert } from 'react-native';
import * as RootNavigation from '~/services/RootNavigation.js';

import api from '~/services/api';
import {
    updateProfileSucess,
    updateProfileFailured,
    updatePushTokenSuccess,
} from './actions';

export function* updateProfile({ payload }) {
    try {
        const { name, email, ...rest } = payload.data;

        const profile = Object.assign(
            { name, email },
            rest.oldPassword ? rest : {}
        );

        const response = yield call(api.put, '/users', profile);

        Alert.alert('Sucesso', 'Perfil atualizado com Sucesso');

        yield put(updateProfileSucess(response.data));
    } catch (err) {
        Alert.alert('Falha na atualização', 'Verifique seus dados');
        yield put(updateProfileFailured());
    }
}

export function* updateToken({ payload }) {
    try {
        const { token, id, next } = payload;

        yield call(api.put, `/users/update/${id}`, {
            token,
        });
        if (next) {
            RootNavigation.reset('tutorial');
        }
        yield put(updatePushTokenSuccess());
    } catch (err) {
        Alert.alert('Ocorreu alguma falha Interna', err.data);
    }
}

export default all([
    takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile),
    takeLatest('@user/UPDATE_PUSH_TOKEN', updateToken),
]);
