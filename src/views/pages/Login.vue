<template>
  <div class="container">
    <base-card class="max-width-720">
      <h1 class="text-uppercase font-secondary font-weight-normal text-center">
        Login
      </h1>
      <div class="row">
        <div lass="col-12" v-if="error">
          <div
            class="alert alert-danger alert-dismissible fade show"
            role="alert"
          >
            {{ error }}
            <button
              type="button"
              class="close"
              data-dismiss="alert"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        </div>
        <div class="col-12">
          <div class="form-group">
            <label for="username">Username or Email</label>
            <input
              type="text"
              class="form-control"
              id="username"
              v-model="username"
              placeholder="Enter username or email"
            />
          </div>
        </div>
        <div class="col-12">
          <div class="form-group">
            <label for="password">Password</label>
            <input
              type="password"
              class="form-control"
              id="password"
              v-model="password"
              placeholder="Enter Password"
            />
          </div>
        </div>
      </div>

      <button class="btn btn-block btn-success" @click="loginUser()">
        Login
      </button>

      <p class="mt-3 text-muted">
        Don't have an account?
        <router-link :to="'/register'">Register here</router-link>
      </p>
    </base-card>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import API from "@/services/API.js";
export default {
  data() {
    return {
      username: "",
      password: "",
      error: "",
    };
  },
  computed: {
    ...mapGetters["user", ["isAuthenticated"]]
  },
  methods: {
    ...mapActions("user", ["login"]),
    ...mapActions("cart", ["loadCart"]),
    ...mapActions("alert", ["addAlert"]),
    async loginUser() {
      this.error = "";
      if(!this.username){
        this.error = "Please enter your username or email."
        return;
      }
      if(!this.password){
        this.error = "Please enter your password."
        return;
      }
      const payload = {
        username: this.username,
        password: this.password,
      };
      try {
        // Make the API call
        const { status, data } = await API.login(payload);
        // Ensure we called it successfully
        if (status !== 200) {
          console.error("Network Error");
          return;
        }
        // Commit the mutation (logged in successfully)
        this.login(data);
        this.addAlert({message: "Login successful!", color: "alert-success"})
        return;
      } catch {
        this.error = "Invalid username or password.";
        return;
      }
    },
  }
};
</script>

<style scoped>
</style>