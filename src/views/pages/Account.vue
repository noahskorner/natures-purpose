<template>
  <div class="max-width-1440 mx-auto">
    <div class="row w-100 p-0 m-0">
      <div class="col-lg-6 col-12 p-0 m-0">
        <base-card class="m-2">
          <div class="w-100 text-center font-secondary">Past Orders</div>
          <hr />
          <table class="table table-sm table-striped">
            <thead>
              <tr>
                <th scope="col">Order</th>
                <th scope="col">Total</th>
                <th scope="col">Status</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="order in pastOrders" :key="order.id">
                <td>Order #{{ order.id }}</td>
                <td>${{ parseFloat(order.cart_total).toFixed(2) }}</td>
                <td>
                  {{ order.status }}
                </td>
                <td class="text-right">
                  <button
                    class="btn btn-sm btn-success text-uppercase font-secondary"
                    @click="reorder(order.id)"
                  >
                    <i class="fas fa-redo"></i>&nbsp;&nbsp;Reorder
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          <div v-if="pastOrders.length === 0" class="text-center">
            No past orders.
            <router-link :to="'/order'">Order here now!</router-link>
          </div>
        </base-card>
      </div>
      <div class="col-lg-6 col-12 p-0 m-0">
        <base-card class="m-2">
          <div class="w-100 text-center font-secondary">Account Settings</div>
          <hr />
          <div class="d-flex justify-content-between align-items-center">
            <div class="d-flex justify-content-center align-items-center">
              <h6 class="font-secondary text-uppercase font-weight-normal">
                Email:
              </h6>
              <h6 class="font-weight-normal mx-1">{{ email }}</h6>
            </div>
            <button class="btn btn-sm btn-outline-primary w-25">
              Update email
            </button>
          </div>
          <div class="d-flex justify-content-between align-items-center my-1">
            <div class="d-flex justify-content-center align-items-center">
              <h6 class="font-secondary text-uppercase font-weight-normal">
                Username:
              </h6>
              <h6 class="font-weight-normal mx-1">{{ username }}</h6>
            </div>
            <button class="btn btn-sm btn-outline-primary w-25">
              Change username
            </button>
          </div>
          <hr />
          <div class="d-flex justify-content-end">
            <button class="btn btn-sm btn-danger w-25">Change password</button>
          </div>
        </base-card>
        <base-card class="m-2">
          <div class="w-100 text-center font-secondary">Rewards</div>
          <hr />
          <div class="d-flex justify-content-center align-items-center mb-3">
            <i class="fas fa-gift fa-4x mr-4"></i>
            <h4 class="font-secondary">1000 points</h4>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              <a href="#">How do I earn rewards points?</a>
            </li>
            <li class="list-group-item">
              <a href="#">How do I spend my rewards points?</a>
            </li>
          </ul>
        </base-card>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import axios from "axios";
import Vue from 'vue';
import API from "@/services/API.js";
export default {
  data() {
    return {
      email: "",
      username: "",
      pastOrders: [],
    };
  },
  computed: {
    ...mapGetters("user", ["isAuthenticated"]),
  },
  methods: {
    ...mapActions("cart", ["setShowCart"]),
    async reorder(orderId){
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

    const payload = { 'orderId' : orderId }

    const { status } = await axios.post(`${API.baseURL}/store/reorder/`, payload, config);

    if ( status === 200 ){
      this.setShowCart(true)
    }
    else{
      console.log("Something went wrong when trying to reorder...")
    }
    }
  },
  async mounted() {
    if (!this.$cookies.get("auth")) {
      this.$router.push("/login");
      return;
    }
    // Get token from state
    const token = this.$cookies.get("auth").token;

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

    const { status, data } = await axios.post(
      `${API.baseURL}/store/get-account/`,
      null,
      config
    );
    if (status !== 200) {
      this.$router.push("/login");
      return;
    } else {
      this.email = data.email;
      this.username = data.username;
      this.pastOrders = data.pastOrders;
    }
  },
};
</script>

<style scoped>
tr {
  text-align: center;
}
</style>