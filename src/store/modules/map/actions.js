export function changeMapStyle(style) {
    return {
        type: '@map/CHANGE_MAP',
        payload: { style },
    };
}

export function changeExhibition(status) {
    return {
        type: '@map/CHANGE_EXHIBITION_TAG',
        payload: { status },
    };
}

export function setDateStart(date) {
    return {
        type: '@map/SET_DATE_START',
        payload: { date },
    };
}

export function setDateEnd(date) {
    return {
        type: '@map/SET_DATE_END',
        payload: { date },
    };
}

export function setBoatsFavorite(boatsFavorites) {
    return {
        type: '@map/SET_BOATS_FAVORITE',
        payload: { boatsFavorites },
    };
}

export function setTypesFavorite(typesFavorite) {
    return {
        type: '@map/SET_TYPES_FAVORITE',
        payload: { typesFavorite },
    };
}

export function changeTypeDateFilter(status) {
    return {
        type: '@map/CHANGE_TYPE_DATE_FILTER',
        payload: { status },
    };
}

export function clearFilterRequest() {
    return {
        type: '@map/CLEAR_FILTER_REQUEST',
    };
}

export function clearFilterSuccess(boats) {
    return {
        type: '@map/CLEAR_FILTER_SUCCESS',
        payload: { boats },
    };
}

export function markersFilterRequest(boatsFavorite, typesFavorite) {
    return {
        type: '@map/MARKERS_FILTER_REQUEST',
        payload: { boatsFavorite, typesFavorite },
    };
}

export function markersFilterSuccess(boats) {
    return {
        type: '@map/MARKERS_FILTER_SUCCESS',
        payload: { boats },
    };
}

export function getMarkersRequest() {
    return {
        type: '@map/GET_MARKERS_REQUEST',
    };
}

export function getMarkersSuccess(ports, boats) {
    return {
        type: '@map/GET_MARKERS_SUCCESS',
        payload: { ports, boats },
    };
}

export function getRefreshRequest() {
    return {
        type: '@map/GET_REFRESH_REQUEST',
    };
}

export function getRefreshSuccess(ports, boats) {
    return {
        type: '@map/GET_REFRESH_SUCCESS',
        payload: { ports, boats },
    };
}

export function GetBoatsClickRequest(boat_id, filter, dateStart, dateEnd) {
    return {
        type: '@map/GET_BOATS_CLICK_REQUEST',
        payload: { boat_id, filter, dateStart, dateEnd },
    };
}

export function GetBoatsClickSuccess(markers, boat_id, dateStart, dateEnd) {
    return {
        type: '@map/GET_BOATS_CLICK_SUCCESS',
        payload: { markers, boat_id, dateStart, dateEnd },
    };
}
