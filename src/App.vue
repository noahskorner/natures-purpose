<template>
  <div id="app">
    <div class="overlay" v-if="(getShowCart || showSidebar) && $route.path !== '/checkout'" @click="closeOverlay()"> </div>
    <transition name="slide-right">
      <the-sidebar
        v-if="showSidebar"
        @toggle-sidebar="toggleSidebar()"
      ></the-sidebar>
    </transition>
    <the-header @toggle-sidebar="toggleSidebar()" />
    <the-alert></the-alert>
    <router-view />
    <transition name="slide-left">
      <the-cart v-if="getShowCart" @close-overlay="closeOverlay()"/>
    </transition>
  </div>
</template>

<script>
import TheSidebar from "./components/layout/TheSidebar";
import TheHeader from "./components/layout/TheHeader";
import TheCart from "@/components/layout/TheCart.vue";
import TheAlert from "@/components/layout/TheAlert.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  components: {
    TheSidebar,
    TheHeader,
    TheCart,
    TheAlert,
  },
  data() {
    return {
      showSidebar: false,
    };
  },
  computed: {
    ...mapGetters("cart", ["getShowCart"]),
  },
  methods: {
    ...mapActions("cart", ["toggleShowCart"]),
    toggleSidebar() {
      this.showSidebar = !this.showSidebar;
    },
    closeOverlay() {
      if (this.showSidebar) {
        this.toggleSidebar();
      }
      else if(this.getShowCart){
        this.toggleShowCart();
      }
    }
  },
};
</script>

<style>
@import url("./assets/styles/main.css");

* {
  padding: 0px;
  margin: 0px;
  box-sizing: border-box;
}
body,
html {
  width: 100%;
  height: 100%;
  overflow-x: hidden;
}

body {
  background-color: var(--bg-cream) !important;
}

a {
  text-decoration: none;
}

#app {
  overflow-x: hidden !important;
}

.btn:focus,
.btn:active {
  outline: none !important;
  box-shadow: none !important;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin-bottom: 0 !important;
}

button:focus {
  outline: none !important;
  box-shadow: none !important;
}

.slide-right-enter-active {
  transition: 0.5s ease-in;
}
.slide-right-leave-active {
  transition: 0.5s ease-out;
}

.slide-right-enter {
  transform: translate(-100%, 0);
}
.slide-right-leave-to {
  transform: translate(-100%, 0);
}

.slide-left-enter-active {
  transition: 0.5s ease-out;
}
.slide-left-leave-active {
  transition: 0.5s ease-in;
}

.slide-left-enter {
  transform: translate(100%, 0);
}
.slide-left-leave-to {
  transform: translate(100%, 0);
}

.overlay {
  position: absolute;
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(4px);
  z-index: 50;
}
</style>
