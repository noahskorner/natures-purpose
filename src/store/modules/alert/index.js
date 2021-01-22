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
      setTimeout(function () {
        context.commit("removeAlert")
      }, 5000);
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
    removeAlert(state) {
      state.alerts.shift()
    }
  },
};
