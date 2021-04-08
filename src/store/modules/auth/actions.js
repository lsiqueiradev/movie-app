export function setDeviceId(deviceId) {
    return {
        type: '@auth/SET_DEVICE_ID',
        payload: { deviceId },
    };
}

export function SuccessSetDeviceId(deviceId, id) {
    return {
        type: '@auth/SUCCESS_SET_DEVICE_ID',
        payload: { deviceId, id },
    };
}

export function setFirstAccess() {
    return {
        type: '@auth/SET_FIRST_ACCESS',
    };
}

// export function signInRequest(email, password) {
//     return {
//         type: '@auth/SIGN_IN_REQUEST',
//         payload: { email, password },
//     };
// }

// export function signInSucess(token, user) {
//     return {
//         type: '@auth/SIGN_IN_SUCESS',
//         payload: { token, user },
//     };
// }

// export function signUpRequest(name, email, password) {
//     return {
//         type: '@auth/SIGN_UP_REQUEST',
//         payload: { name, email, password },
//     };
// }

// export function signFailure() {
//     return {
//         type: '@auth/SIGN_FAILURED',
//     };
// }

// export function signOut() {
//     return {
//         type: '@auth/SIGNOUT',
//     };
// }
