import Vue from "vue";
import VueCookies from 'vue-cookies'
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductCard from "./components/ui/ProductCard.vue";
import ProductGrid from "./components/ui/ProductGrid.vue";
import BaseCard from "./components/ui/BaseCard.vue";
import UUID, { uuid } from "vue-uuid";
 
Vue.config.productionTip = false;
Vue.component("product-card", ProductCard);
Vue.component("product-grid", ProductGrid);
Vue.component("base-card", BaseCard);
Vue.use(VueCookies)
Vue.use(UUID);

// set default config
Vue.$cookies.config('14d')

// set global cookie
if(Vue.$cookies.get('device') === null || Vue.$cookies.get('device') === undefined){
  Vue.$cookies.set('device', uuid.v4());
};

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
