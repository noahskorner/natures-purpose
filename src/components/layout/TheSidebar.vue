<template>
  <div class="menu position-absolute" :style="{ height: windowHeight + 'px' }">
    <div class="w-100">
      <div class="d-flex justify-content-end bg-cream header">
        <button
          class="btn pr-4 h-100 d-flex justify-content-center align-items-center"
          @click="$emit('toggle-sidebar')"
        >
          <i class="fas fa-times fa-2x"></i>
        </button>
      </div>
      <div class="hr"></div>
    </div>
    <div class="w-100">
      <div class="d-flex flex-column justify-content-start align-items-left">
        <button
          class="btn link router-link font-secondary font-weight-normal text-left"
          @click="closeSidebarAndRoute('/')"
        >
          Home
        </button>
        <button
          class="btn link router-link font-secondary font-weight-normal text-left"
          @click="closeSidebarAndRoute('/order')"
        >
          Order
        </button>
        <button
          v-if="!isAuthenticated"
          class="btn link router-link font-secondary font-weight-normal text-left"
          @click="closeSidebarAndRoute('/login')"
        >
          Login
        </button>
        <button
          v-if="isAuthenticated"
          class="btn link router-link font-secondary font-weight-normal text-left"
          @click="closeSidebarAndRoute('/account')"
        >
          Account
        </button>
      </div>
    </div>
    <div class="w-100 fixed-bottom footer bg-cream border-top">
      <div class="text-center font-secondary my-1">
        <h4 class="font-weight-normal">Nature's Purpose</h4>
        <hr class="mx-4 my-0">
      </div>
      <div class="d-flex justify-content-center">
        <a href="" class="social-tag"> <i class="fab fa-facebook fa-2x"></i></a>
        <a href="" class="social-tag"> <i class="fab fa-instagram fa-2x"></i></a>
        <a href="" class="social-tag"> <i class="fab fa-yelp fa-2x"></i></a>
      </div>
    </div>
  </div>
</template>
  
<script>
import { useWindowSize } from "vue-window-size";
import { mapGetters } from "vuex";
export default {
  setup() {
    const { width, height } = useWindowSize();
    return {
      windowWidth: width,
      windowHeight: height,
    };
  },
  computed: {
    ...mapGetters("user", ["isAuthenticated"]),
  },
  methods: {
    closeSidebarAndRoute(route) {
      this.$emit("toggle-sidebar");
      this.$router.push(route);
    },
  },
};
</script>

<style scoped>
.menu {
  background-color: white;
  width: 100vw;
  z-index: 100;
}

.social-tag {
  color: var(--dark-grey) !important;
  margin: 5px 15px;
}

.social-tag:hover {
  color: var(--success) !important;
}

.header {
  height: 5rem;
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

@media (min-width: 768px) {
  .menu {
    max-width: 480px;
  }

  .footer {
    max-width: 480px;
  }
}
</style>