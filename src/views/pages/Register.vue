<template>
  <div class="container">
    <base-card class="max-width-720">
      <h1 class="text-uppercase font-secondary font-weight-normal text-center">
        Register
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
            <label for="email">Email</label>
            <input
              type="text"
              class="form-control"
              id="email"
              v-model="email"
              placeholder="Enter email"
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
      <button class="btn btn-block btn-success" @click="registerUser()">
        Register
      </button>
    </base-card>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      username: "",
      email: "",
      password: ""
    };
  },
  methods: {
    ...mapActions("user", ["register"]),
    async registerUser() {
      const payload = {
        username: this.username,
        email: this.email,
        password: this.password,
      };

      await this.register(payload)
        .then()
        .then(this.$router.push("/login"));
    }
  }
};
</script>

<style scoped>
</style>