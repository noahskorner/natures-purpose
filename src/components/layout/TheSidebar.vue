<template>
  <div class="position-absolute">
    <div
      class="position-absolute outside-menu"
      @click="$emit('toggle-sidebar')"
    ></div>
    <div
      class="menu position-relative"
      :class="windowWidth > 768 ? 'border-right' : 'border-none'"
      :style="{ height: windowHeight + 'px' }"
    >
      <div class="w-100">
        <div class="d-flex justify-content-between bg-cream header">
          <div
            class="d-flex flex-col justify-content-center align-items-center"
          >
            <h3
              class="m-2 ml-4 font-secondary text-uppercase font-weight-normal align-middle"
            >
              Menu
            </h3>
          </div>

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
    </div>
  </div>
</template>
  
<script>
import { useWindowSize } from "vue-window-size";
export default {
  setup() {
    const { width, height } = useWindowSize();
    return {
      windowWidth: width,
      windowHeight: height,
    };
  },
  methods: {
    closeSidebarAndRoute(route){
      this.$emit('toggle-sidebar')
      this.$router.push(route)
    }
  }
};
</script>

<style scoped>
.outside-menu {
  backdrop-filter: blur(4px);
  width: 100vw;
  height: 100vh;
  z-index: 100;
}
.menu {
  background-color: white;
  width: 100vw;
  z-index: 100;
}

.wrapper {
  top: 0;
  left: 0;
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
}
</style>