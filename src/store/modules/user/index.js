import API from "../../../services/API.js";
import Vue from "vue";
import cookie from "vue-cookies";
import router from "@/router/index.js";

export default {
  namespaced: true,
  state() {
    return {
      isAuthenticated: false,
      auth: cookie.get("auth"),
      device: cookie.get("device"),
    };
  },
  actions: {
    async login(context, payload) {
      // Commit the mutation (logged in successfully)
      context.commit("login", payload);
      context.dispatch("cart/loadCart", {}, { root: true });
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
      context.dispatch("cart/loadCart", {}, { root: true });
      router.push("/");
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
      Vue.$cookies.set("auth", payload);
      state.isAuthenticated = true;
      state.auth = payload;
      router.push("/order");
    },
    logout(state) {
      state.isAuthenticated = false;
      state.auth = "";
      Vue.$cookies.set("auth", "");
    },
  },
};
