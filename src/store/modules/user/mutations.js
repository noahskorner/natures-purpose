import Vue from "vue";

export default {
    login(state, payload) {
        Vue.$cookies.set('isAuthenticated', true);
        Vue.$cookies.set('auth', payload);
        state.isAuthenticated = true;
        state.auth = payload.auth;
    },
    logout(state) {
        state.isAuthenticated = false;
        state.auth = "";
        Vue.$cookies.set('isAuthenticated', false);
        Vue.$cookies.set('auth', "");
    }
};
