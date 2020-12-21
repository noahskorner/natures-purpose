<template>
  <nav>
    <section class="d-flex justify-content-between">
      <div class="d-flex justify-content-around align-items-center">
        <button class="btn link" @click="$emit('toggle-sidebar')">
          <i class="fas fa-bars"></i>
        </button>
      </div>
      <div class="d-flex justify-content-around align-items-center">
        <router-link
          to="/order"
          tag="div"
          class="link router-link font-secondary font-weight-normal"
          v-show="windowWidth > 768"
          >Order</router-link
        >
        <router-link
          to="/login"
          tag="div"
          v-if="!isAuthenticated"
          class="link router-link font-secondary font-weight-normal"
          v-show="windowWidth > 768"
          >Login</router-link
        >
        <div
          tag="div"
          v-if="isAuthenticated"
          class="link router-link font-secondary font-weight-normal"
          v-show="windowWidth > 768"
          @click="logout()"
          >Logout</div
        >


        <div
          class="link d-flex flex-col justify-items-center align-items-center position-relative"
        >
          <svg
            width="2rem"
            height="2rem"
            viewBox="0 0 16 16"
            class="bi bi-bag"
            v-if="$route.path !== '/checkout'"
            @click="setShowCart(true)"
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
import { useWindowSize } from "vue-window-size";
export default {
  emits: ["toggle-sidebar"],
  setup() {
    const { width, height } = useWindowSize();
    return {
      windowWidth: width,
      windowHeight: height,
    };
  },
  computed: {
    ...mapGetters("cart", ["getDisableCart", "getCart"]),
    ...mapGetters("user", ["isAuthenticated"]),
  },
  methods: {
    ...mapActions("cart", ["setShowCart"]),
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
  height: 5rem;
  z-index: 10;
}

.link {
  color: var(--dark-grey) !important;
  font-size: 2rem;
  margin: 0 1rem;
}

.link:hover {
  color: var(--success) !important;
  cursor: pointer;
}
</style>
