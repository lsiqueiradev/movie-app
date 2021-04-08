export function updateProfileRequest(data) {
    return {
        type: '@user/UPDATE_PROFILE_REQUEST',
        payload: { data },
    };
}

export function updatePushToken(token, id, next) {
    return {
        type: '@user/UPDATE_PUSH_TOKEN',
        payload: { token, id, next },
    };
}

export function updatePushTokenSuccess(token) {
    return {
        type: '@user/UPDATE_PUSH_TOKEN_SUCCESS',
        payload: { token },
    };
}

export function updateProfileSucess(profile) {
    return {
        type: '@user/UPDATE_PROFILE_SUCESS',
        payload: { profile },
    };
}

export function updateProfileFailured() {
    return {
        type: '@user/UPDATE_PROFILE_FAILURED',
    };
}

export function changeNotification(status) {
    return {
        type: '@user/CHANGE_NOTIFICATION',
        payload: { status },
    };
}
