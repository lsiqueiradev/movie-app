import produce from 'immer';

const INICIAL_STATE = {
    id: null,
    notificationStatus: '',
    deviceId: null,
    pushToken: null,
    profile: null,
};

export default function user(state = INICIAL_STATE, action) {
    return produce(state, (draft) => {
        switch (action.type) {
            case '@auth/SUCCESS_SET_DEVICE_ID': {
                draft.id = action.payload.id;
                draft.deviceId = action.payload.deviceId;
                break;
            }
            case '@auth/SIGN_IN_SUCESS': {
                draft.profile = action.payload.user;
                break;
            }
            case '@user/UPDATE_PROFILE_SUCESS': {
                draft.profile = action.payload.profile;
                break;
            }
            case '@user/UPDATE_PUSH_TOKEN': {
                draft.pushToken = action.payload.token;
                break;
            }
            case '@user/UPDATE_PUSH_TOKEN_SUCCESS': {
                draft.pushToken = action.payload.token;
                break;
            }
            case '@user/CHANGE_NOTIFICATION': {
                draft.notificationStatus = action.payload.status;
                break;
            }
            case '@auth/SIGNOUT': {
                draft.profile = null;
                break;
            }
            default:
        }
    });
}
