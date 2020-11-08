import API from "../../../services/API.js";

export default {
  async loadProducts(context) {
    // Make the API call
    const { status, data } = await API.getProducts();
    // Ensure we called it successfully
    if (status !== 200) {
      console.error("Network Error");
      return;
    }
    // Commit the mutation
    context.commit("setProducts", data);
  }
};
