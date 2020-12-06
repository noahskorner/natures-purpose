import API from "@/services/API.js";

export default {
  namespaced: true,
  state() {
    return { affiliates: {}, deliveryDays: {} };
  },
  getters: {
    getAffiliates(state) {
      return state.affiliates;
    },
    getDeliveryDays(state) {
      return state.deliveryDays;
    }
  },
  actions: {
    async loadAffiliates(context) {
      let { status, data } = await API.getAffiliates();

      if (status !== 200) {
        console.log("Network Error");
        return;
      }
      context.commit("setAffiliates", data);
    },
    async loadDeliveryDays(context) {
      let { status, data } = await API.getDeliveryDays();

      if (status !== 200) {
        console.log("Network Error");
        return;
      }
      context.commit("setDeliveryDays", data);
    },
  },
  mutations: {
    setAffiliates(state, payload) {
      state.affiliates = payload;
    },
    setDeliveryDays(state, payload) {
      state.deliveryDays = payload;
    }
  },
};
