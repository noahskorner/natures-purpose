import API from "../../../services/API.js";
export default {
  async login(context, payload) {
    // Make the API call
    const { status, data } = await API.login(payload);
    // Ensure we called it successfully
    if (status !== 200) {
      console.error("Network Error");
      return;
    }
    // Commit the mutation

    context.commit("login", data)
  },
  async register(context, payload) {
    // Make the API call
    const { status, data } = await API.register(payload);
    // Ensure we called it successfully
    if (status !== 200) {
      console.error("Network Error");
      return;
    }
    // This does nothing after registering the user (for now)

    console.log(data);
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
    context.commit('logout')
  }
};
