<template>
  <div id="app">
    <the-sidebar
      v-if="showSidebar"
      @toggle-sidebar="toggleSidebar()"
    ></the-sidebar>
    <the-header @toggle-sidebar="toggleSidebar()" />
    <router-view />
    <the-cart v-show="getShowCart" />
  </div>
</template>

<script>
import TheSidebar from "./components/layout/TheSidebar";
import TheHeader from "./components/layout/TheHeader";
import TheCart from "@/components/layout/TheCart.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    TheSidebar,
    TheHeader,
    TheCart,
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
    toggleSidebar() {
      this.showSidebar = !this.showSidebar;
    },
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
}

body {
  background-color: var(--bg-cream) !important;
}

a {
  text-decoration: none;
}

#app {
  overflow-x: hidden;
}

.btn:focus,
.btn:active {
  outline: none !important;
  box-shadow: none !important;
}
</style>
