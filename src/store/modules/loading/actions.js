export function changeLoading(status) {
    return {
        type: status ? '@loading/LOADING_ON' : '@loading/LOADING_OFF',
    };
}
