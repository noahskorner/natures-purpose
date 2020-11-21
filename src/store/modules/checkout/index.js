import API from '@/services/API.js'

export default {
  namespaced: true,
  state() {
    return { affiliates: {} };
  },
  actions: {
    async loadAffiliates(context) {
      let { status, data } = await API.getAffiliates();

      if (status !== 200) {
        console.log("Network Error");
        return;
      }
      context.commit('setAffiliates', data)
    },
  },
  getters: {
      getAffiliates(state) {
          return state.affiliates;
      }
  },
  mutations: {
      setAffiliates(state, payload) {
          state.affiliates = payload
      }
  },
};
