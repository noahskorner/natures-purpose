import API from "../../../services/API.js";
import store from "../../../store"
import Vue from 'vue'

export default {
  async toggleShowCart(context) {
    // Commit the mutation
    context.commit("toggleShowCart");
  },
  async loadCart(context) {
    const payload = {
      isAuthenticated: Vue.$cookies.get('isAuthenticated'),
      auth: store.getters['user/getAuth'],
      device: Vue.$cookies.get('device')
    }
    let { status, data } = await API.getCart(payload);

    if (status !== 200) {
      console.log("Network Error");
      return;
    }
    context.commit("setCart", data);
  },
  async updateCart(context, order){
    const payload = {
      order: order,
      isAuthenticated: Vue.$cookies.get('isAuthenticated'),
      auth: store.getters['user/getAuth'],
      device: Vue.$cookies.get('device')
    }

    console.log(payload)
    let { status, data } = await API.updateCart(payload);

    if (status !== 200) {
      console.log("Network Error");
      return;
    }

    context.commit("setCart", data)
  },
  toggleDisableCart(context) {
    context.commit("toggleDisableCart");
  }
};
