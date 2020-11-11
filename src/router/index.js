import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/pages/Home.vue";
import About from "../views/pages/About.vue";
import Login from "../views/pages/Login.vue";
import Register from "../views/pages/Register.vue";
import Order from "../views/store/Order.vue";
import SignatureMeals from "../views/store/SignatureMeals.vue";
import Product from "../views/store/Product.vue";
import Checkout from "../views/store/Checkout.vue";
import NotFound from "../views/NotFound.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/about",
    component: About
  },
  {
    path: "/login",
    component: Login
  },
  {
    path: "/register",
    component: Register
  },
  {
    path: "/order",
    component: Order
  },
  {
    path: "/checkout",
    component: Checkout
  },
  {
    path: "/signature-meals",
    component: SignatureMeals
  },
  {
    path: "/signature-meals/:name/:id",
    name: "signature-meals",
    props: true,
    component: Product
  },
  {
    path: "/:notFound(.*)",
    component: NotFound
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
