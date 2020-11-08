import API from "../../../services/API.js";
export default {
  async toggleShowCart(context) {
    // Commit the mutation
    context.commit("toggleShowCart");
  },
  async loadCart(context, payload) {
    let { status, data } = await API.getCart(payload);

    if (status !== 200) {
      console.log("Network Error");
      return;
    }
    context.commit("setCart", data);
  },
  async updateCart(context, payload){
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
