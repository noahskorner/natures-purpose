export default {
  namespaced: true,
  state() {
    return {
      alerts: [],
    };
  },
  actions: {
    addAlert(context, payload) {
      context.commit("addAlert", payload);
    },
    removeAlert(context, payload) {
      context.commit("removeAlert", payload)
    }
  },
  getters: {
    getAlerts(state) {
      return state.alerts;
    },
  },
  mutations: {
    addAlert(state, payload) {
      state.alerts.push(payload);
    },
    removeAlert(state, index) {
      state.alerts.splice(index, 1)
    }
  },
};
