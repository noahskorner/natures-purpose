<template>
  <nav>
    <section class="d-flex justify-content-between">
      <div class="d-flex justify-content-around align-items-center">
        <div class="link">
          <router-link
            to="/"
            tag="div"
            class="router-link font-secondary font-weight-normal"
            >About</router-link
          >
        </div>

        <div class="link">
          <router-link
            to="/"
            tag="div"
            class="router-link font-secondary font-weight-normal"
            >Menu</router-link
          >
        </div>

        <div class="link">
          <router-link
            to="/"
            tag="div"
            class="router-link font-secondary font-weight-normal"
            >Catering</router-link
          >
        </div>
      </div>
      <div class="d-flex justify-content-around align-items-center">
        <div class="link">
          <router-link
            to="/order"
            tag="div"
            class="router-link font-secondary font-weight-normal"
            >Order</router-link
          >
        </div>
        <div class="link">
          <router-link
            to="/login"
            tag="div"
            v-if="!isAuthenticated"
            class="router-link font-secondary font-weight-normal"
            >Login</router-link
          >
           <svg
           v-if="isAuthenticated"
            width="2rem"
            height="2rem"
            viewBox="0 0 16 16"
            class="bi bi-person"
            fill="currentColor"
            @click="logout()"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm6 5c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"
            />
          </svg>
        </div>
        <div class="link">
          <svg
            width="1.75rem"
            height="1.75rem"
            viewBox="0 0 16 16"
            class="bi bi-bag"
            v-if="$route.path !== '/checkout'"
            @click="toggleShowCart()"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M8 1a2.5 2.5 0 0 0-2.5 2.5V4h5v-.5A2.5 2.5 0 0 0 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V5H2z"
            />
          </svg>
        </div>
      </div>
    </section>
  </nav>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters("cart", ["getDisableCart"]),
    ...mapGetters("user", ["isAuthenticated"]),
  },
  methods: {
    ...mapActions("cart", ["toggleShowCart"]),
    ...mapActions("user", ["logout"]),
    async logoutUser() {
      await this.logout().then().then(this.$router.push("/order"));
    },
  },
};
</script>

<style scoped>
nav {
  background-color: white;
  border-bottom: 1px solid var(--light-grey);
}

nav section {
  height: 4rem;
}

.router-link {
  color: var(--dark-grey) !important;
  font-size: 2rem;
  margin: 0 0.5rem;
}

.router-link:hover {
  color: var(--success) !important;
  cursor: pointer;
  text-decoration: none;
}

svg {
  color: var(--dark-grey) !important;
}

svg:hover {
  color: var(--success) !important;
  cursor: pointer;
}

.link {
  margin: 0 0.5rem;
  text-align: center;
}
</style>
