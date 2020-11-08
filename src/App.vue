<template>
  <div id="app">
    <the-header />
    <router-view />
    <the-cart v-if="getShowCart" />
  </div>
</template>

<script>
import TheHeader from "./components/layout/TheHeader";
import TheCart from "@/components/layout/TheCart.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    TheHeader,
    TheCart
  },
  computed: {
    ...mapGetters("cart", ["getShowCart"])
  }
};
</script>

<style>
@import url("./assets/styles/main.css");

body {
  background-color: var(--bg-cream) !important;
}

a {
  text-decoration: none;
}
</style>
