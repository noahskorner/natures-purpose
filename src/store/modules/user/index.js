import actions from "./actions.js";
import getters from "./getters.js";
import mutations from "./mutations.js";
import cookie from 'vue-cookies';

export default {
  namespaced: true,
  state() {
    return {
      isAuthenticated: cookie.get('auth'),
      auth: cookie.get('auth')
    };
  },
  actions,
  getters,
  mutations
};
