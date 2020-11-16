export default {
    isAuthenticated(state) {
        return state.isAuthenticated;
    },
    getAuth(state) {
        return state.auth;
    },
    getDevice(state) {
        return state.device;
    }
};
