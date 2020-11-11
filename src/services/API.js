import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:8000/store",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

export default {
  getProducts() {
    return apiClient.get("/get-products/");
  },
  getCart(payload) {
    return apiClient.post("/get-cart/", payload);
  },
  updateCart(payload) {
    return apiClient.post("/update-cart/", payload)
  },
  login(payload) {
    return apiClient.post("/login/", payload)
  }
};
