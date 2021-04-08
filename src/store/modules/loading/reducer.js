import produce from 'immer';

const INICIAL_STATE = {
    loading: false,
};

export default function loading(state = INICIAL_STATE, action) {
    return produce(state, (draft) => {
        switch (action.type) {
            case '@loading/LOADING_ON': {
                draft.loading = true;
                break;
            }
            case '@loading/LOADING_OFF': {
                draft.loading = false;
                break;
            }
            default:
        }
    });
}
