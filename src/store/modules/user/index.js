import API from "../../../services/API.js";
import Vue from "vue";
import cookie from "vue-cookies";

export default {
  namespaced: true,
  state() {
    return {
      isAuthenticated: cookie.get("isAuthenticated") == "true",
      auth: cookie.get("auth"),
      device: cookie.get("device"),
    };
  },
  actions: {
    async login(context, payload) {
      // Make the API call
      const { status, data } = await API.login(payload);
      // Ensure we called it successfully
      if (status !== 200) {
        console.error("Network Error");
        return;
      }
      // Commit the mutation
      context.commit("login", data);
    },
    async register(context, payload) {
      // Make the API call
      const { status, data } = await API.register(payload);
      // Ensure we called it successfully
      if (status !== 200) {
        console.error("Network Error");
        return;
      }
      // This does nothing after registering the user (for now)

      console.log(data);
    },
    async logout(context) {
      // Make the API call
      const { status, data } = await API.logout();
      // Ensure we called it successfully
      if (status !== 204) {
        console.log(data);
        console.error("Network Error");
        return;
      }
      // Commit the mutation
      context.commit("logout");
    },
  },
  getters: {
    isAuthenticated(state) {
      return state.isAuthenticated;
    },
    getAuth(state) {
      return state.auth;
    },
    getDevice(state) {
      return state.device;
    },
  },
  mutations: {
    login(state, payload) {
      Vue.$cookies.set("isAuthenticated", true);
      Vue.$cookies.set("auth", payload);
      state.isAuthenticated = true;
      state.auth = payload;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.auth = "";
      Vue.$cookies.set("isAuthenticated", false);
      Vue.$cookies.set("auth", "");
    },
  },
};
