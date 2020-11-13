<template>
  <div class="container">
    <base-card class="max-width-720">
      <h1 class="text-uppercase font-secondary font-weight-normal text-center">
        login
      </h1>
      <div class="row">
        <div class="col-12">
          <div class="form-group">
            <label for="username">Username</label>
            <input
              type="text"
              class="form-control"
              id="username"
              v-model="username"
              placeholder="Enter username"
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
import { mapActions } from "vuex";
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    ...mapActions("user", ["login"]),
    async loginUser() {
      const payload = {
        username: this.username,
        password: this.password,
      };

      await this.login(payload).then().then(this.$router.push("/order"));
    },
  },
};
</script>

<style scoped>
</style>