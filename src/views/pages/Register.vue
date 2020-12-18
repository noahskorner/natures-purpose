<template>
  <div class="container">
    <base-card class="max-width-720">
      <h1 class="text-uppercase font-secondary font-weight-normal text-center">
        Register
      </h1>
      <div class="row">
        <div class="col-12 mt-2" v-if="error">
          <div
            class="alert alert-danger alert-dismissible fade show"
            role="alert"
          >
            {{ error }}
          </div>
        </div>
        <div class="col-12" v-if="userSuccessfullyCreated">
          <div
            class="alert alert-success alert-dismissible fade show"
            role="alert"
          >
            User successfully created.
            <router-link
              :to="'/login'"
              tag="span"
              class="font-weight-bold"
              style="cursor: pointer;"
              >Login here now!</router-link
            >
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
            <label for="username">Username</label>
            <input
              type="text"
              class="form-control"
              id="username"
              name="username"
              v-model="username"
              placeholder="Enter username"
              required
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
              name="email"
              v-model="email"
              placeholder="Enter email"
              required
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
              name="password"
              v-model="password"
              placeholder="Enter Password"
              required
            />
          </div>
          <ul class="ml-5 text-muted">
            <li>
              Your password can’t be too similar to your other personal
              information.
            </li>
            <li>Your password must contain at least 8 characters.</li>
            <li>Your password can’t be a commonly used password.</li>
            <li>Your password can’t be entirely numeric.</li>
          </ul>
        </div>
        <div class="col-12">
          <div class="form-group">
            <label for="password2">Confirm Password</label>
            <input
              type="password"
              class="form-control"
              id="password2"
              name="password2"
              v-model="password2"
              placeholder="Enter Password"
              required
            />
          </div>
        </div>
      </div>
      <button class="btn btn-block btn-success" @click="registerUser()">
        Register
      </button>
      <p class="mt-3 text-muted">
        Already have an account?
        <router-link :to="'/login'">Login here</router-link>
      </p>
    </base-card>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import API from '@/services/API.js'
export default {
  data() {
    return {
      username: "",
      email: "",
      password: "",
      password2: "",
      error: "",
      userSuccessfullyCreated: false,
    };
  },
  methods: {
    ...mapActions("user", ["register"]),
    async registerUser() {
      if(this.username == ""){
        this.error = "Username is required."
        return;
      }
      if(this.email == ""){
        this.error = "Email is required."
        return;
      }
      if(this.password == ""){
        this.error = "Password is required."
        return;
      }
      if(this.password2 == ""){
        this.error = "Must confirm password."
        return;
      }
      const payload = {
        username: this.username,
        email: this.email,
        password: this.password,
        password2: this.password2,
      };

      const response = await fetch(
        `${API.baseURL}/store/auth/register/`,
        {
          method: "POST", // or 'PUT'
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      )
        .then((response) => {
          if (response.status == 200) {
            this.username = "";
            this.email = "";
            this.password = "";
            this.password2 = "";
            this.error = "";
            this.userSuccessfullyCreated = true;
            return;
          } else {
            return response.json();
          }
        })
        .catch((error) => {
          console.log(error);
          return;
        });
      this.error = response[Object.keys(response)][0];
    },
  },
};
</script>

<style scoped>
</style>