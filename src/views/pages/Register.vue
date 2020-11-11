<template>
  <div class="d-flex justify-content-center align-items-center flex-column">
    <div class="max-width-1400">
      <h1 class="text-uppercase font-secondary font-weight-normal text-center">
        Register
      </h1>
      <div class="row">
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

      <button class="btn btn-block btn-success">
        Register
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    ...mapActions("user", ["login"]),
    async userLogin() {
      const payload = {
        username: this.username,
        password: this.password
      };

      await this.login(payload)
        .then()
        .then(this.$router.push("/order"));
    }
  }
};
</script>

<style>
</style>