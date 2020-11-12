import axios from "axios";
import Vue from "vue";

const apiClient = axios.create({
  baseURL: "http://localhost:8000/store",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
export default {
  getProducts() {
    return apiClient.get("/get-products/");
  },
  getCart(payload) {
    return apiClient.post("/get-cart/", payload);
  },
  updateCart(payload) {
    return apiClient.post("/update-cart/", payload);
  },
  login(payload) {
    return apiClient.post("/auth/login/", payload);
  },
  register(payload) {
    return apiClient.post("/auth/register/", payload);
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
