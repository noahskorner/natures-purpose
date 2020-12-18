import Vue from "vue";
import Vuex from "vuex";
import productsModule from "./modules/products/index";
import cartModule from "./modules/cart/index";
import userModule from './modules/user/index';
import checkoutModule from './modules/checkout/index';
import alertModule from './modules/alert/index';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    products: productsModule,
    cart: cartModule,
    user: userModule,
    checkout: checkoutModule,
    alert: alertModule
  }
});
