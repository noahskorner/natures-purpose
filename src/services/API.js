import axios from "axios";
import Vue from "vue";

const apiClient = axios.create({
  baseURL: "http://localhost:8000",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
export default {
  getProducts() {
    return apiClient.get("/store/get-products/");
  },
  getCart(payload) {
    return apiClient.post("/store/get-cart/", payload);
  },
  updateCart(payload) {
    return apiClient.post("/store/update-cart/", payload);
  },
  login(payload) {
    return apiClient.post("/store/auth/login/", payload);
  },
  register(payload) {
    return apiClient.post("/store/auth/register/", payload);
  },
  logout() {
    // Get token from state
    const token = Vue.$cookies.get("auth").token;

    // Headers
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    // If token, add to headers config
    if (token) {
      config.headers["Authorization"] = `Token ${token}`;
    }

    return axios.post("http://localhost:8000/store/auth/logout/", null, config);
  },
};
