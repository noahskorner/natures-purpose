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
    console.log(data)
  }
};
