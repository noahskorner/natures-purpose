import API from "@/services/API.js";

export default {
  namespaced: true,
  state() {
    return { affiliates: {}, deliveryDays: {}, cutoffDay: "", cutoffTime: ""};
  },
  getters: {
    getAffiliates(state) {
      return state.affiliates;
    },
    getDeliveryDays(state) {
      return state.deliveryDays;
    },
    getCutoffDay(state) {
      return state.cutoffDay;
    },
    getCutoffTime(state) {
      return state.cutoffTime;
    },
  },
  actions: {
    async loadCheckoutInformation(context) {
      let { status, data } = await API.getCheckoutInformation();

      if (status !== 200) {
        console.log("Network Error");
        return {};
      }
      
      context.commit('setAffiliates', data.affiliates);
      context.commit('setDeliveryDays', data.delivery_days);
      context.commit('setCutoffDay', data.cutoff_day);
      context.commit('setCutoffTime', data.cutoff_time);
    },
  },
  mutations: {
    setAffiliates(state, payload) {
      state.affiliates = payload;
    },
    setDeliveryDays(state, payload) {
      state.deliveryDays = payload;
    },
    setCutoffDay(state, payload) {
      state.cutoffDay = payload;
    },
    setCutoffTime(state, payload) {
      state.cutoffTime = payload;
    },
  },
};
