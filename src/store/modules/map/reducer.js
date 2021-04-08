import produce from 'immer';

const INICIAL_STATE = {
    map_type: 'standard',
    boats: [],
    ports: [],
    markers: [],
    boatsFavorite: [],
    typesFavorite: [],
    boatSelected: null,
    dateStart: null,
    dateEnd: null,
    typeDateFilter: null,
    isTag: false,
};

export default function map(state = INICIAL_STATE, action) {
    return produce(state, (draft) => {
        switch (action.type) {
            case '@map/CHANGE_EXHIBITION_TAG': {
                draft.isTag = action.payload.status;
                break;
            }
            case '@map/GET_BOATS_CLICK_SUCCESS': {
                draft.markers = action.payload.markers;
                draft.boatSelected = action.payload.boat_id;
                draft.dateStart = action.payload.dateStart;
                draft.dateEnd = action.payload.dateEnd;
                break;
            }
            case '@map/CHANGE_MAP': {
                draft.map_type = action.payload.style;
                break;
            }
            case '@map/CHANGE_TYPE_DATE_FILTER': {
                draft.typeDateFilter = action.payload.status;
                break;
            }
            case '@map/SET_DATE_START': {
                draft.dateStart = action.payload.date;
                break;
            }
            case '@map/SET_DATE_END': {
                draft.dateEnd = action.payload.date;
                break;
            }
            case '@map/SET_BOATS_FAVORITE': {
                draft.boatsFavorite = action.payload.boatsFavorites;
                break;
            }
            case '@map/SET_TYPES_FAVORITE': {
                draft.typesFavorite = action.payload.typesFavorite;
                break;
            }

            case '@map/MARKERS_FILTER_SUCCESS': {
                draft.boats = action.payload.boats;
                draft.markers = [];
                break;
            }
            case '@map/GET_MARKERS_SUCCESS': {
                draft.ports = action.payload.ports;
                draft.boats = action.payload.boats;
                draft.markers = [];
                draft.dateStart = null;
                draft.dateEnd = null;
                draft.typeDateFilter = null;
                draft.boatsFavorite = [];
                draft.boatSelected = null;
                draft.typesFavorite = [];
                break;
            }
            case '@map/GET_REFRESH_SUCCESS': {
                draft.ports = action.payload.ports;
                draft.boats = action.payload.boats;
                draft.markers = [];
                draft.dateStart = null;
                draft.dateEnd = null;
                draft.typeDateFilter = null;
                draft.boatsFavorite = [];
                break;
            }
            case '@map/CLEAR_FILTER_SUCCESS': {
                draft.boats = action.payload.boats;
                draft.markers = [];
                draft.dateStart = null;
                draft.dateEnd = null;
                draft.typeDateFilter = null;
                draft.boatsFavorite = [];
                draft.typesFavorite = [];
                draft.boatSelected = null;
                break;
            }
            default:
        }
    });
}
