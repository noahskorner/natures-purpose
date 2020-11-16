import actions from "./actions.js";
import getters from "./getters.js";
import mutations from "./mutations.js";
import cookie from 'vue-cookies';

export default {
  namespaced: true,
  state() {
    return {
      isAuthenticated: (cookie.get('isAuthenticated') == 'true'),
      auth: cookie.get('auth'),
      device: cookie.get('device')
    };
  },
  actions,
  getters,
  mutations
};
