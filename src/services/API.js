import axios from "axios";
import Vue from "vue";

const apiClient = axios.create({
  baseURL: "https://npdelivered-backend.herokuapp.com",
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

    return axios.post("https://npdelivered-backend.herokuapp.com/store/auth/logout/", null, config);
  },
  getAffiliates() {
    return apiClient.get("/store/get-affiliates/");
  },
  placeOrder(orderDetails) {
    // Get auth from cookies
    const auth = Vue.$cookies.get("auth");
    const device = Vue.$cookies.get("device");

    const payload = {
      auth,
      device,
      orderDetails
    }

    return apiClient.post("/store/place-order/", payload);
  },
};
