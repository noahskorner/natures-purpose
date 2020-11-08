<template>
  <nav>
    <section class="max-width-1440 mx-auto d-flex justify-content-between">
      <div class="d-flex justify-content-around align-items-center">
        <router-link
          to="/"
          tag="div"
          class="router-link font-secondary font-weight-normal"
          >About</router-link
        >
        <router-link
          to="/"
          tag="div"
          class="router-link font-secondary font-weight-normal"
          >Menu</router-link
        >
        <router-link
          to="/"
          tag="div"
          class="router-link font-secondary font-weight-normal"
          >Catering</router-link
        >
      </div>
      <div class="d-flex justify-content-around align-items-center">
        <router-link
          to="/order"
          tag="div"
          class="router-link font-secondary font-weight-normal"
          >Order</router-link
        >
        <router-link
          to="/"
          tag="div"
          class="router-link font-secondary font-weight-normal"
          >Login</router-link
        >
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
    </section>
  </nav>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters("cart", ["getDisableCart"])
  },
  methods: {
    ...mapActions("cart", ["toggleShowCart"])
  }
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
  margin: 0 0.5rem;
}

svg:hover {
  color: var(--success) !important;
  cursor: pointer;
}
</style>
