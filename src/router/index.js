import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/pages/Home.vue";
import About from "../views/pages/About.vue";
import Account from "../views/pages/Account.vue";
import Login from "../views/pages/Login.vue";
import Register from "../views/pages/Register.vue";
import Order from "../views/store/Order.vue";
import CustomMeals from "../views/store/CustomMeals.vue";
import SignatureMeals from "../views/store/SignatureMeals.vue";
import JustProtein from "../views/store/JustProtein.vue";
import JustSides from "../views/store/JustSides.vue";
import Soups from "../views/store/Soups.vue";
import Sauces from "../views/store/Sauces.vue";
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
    path: "/account",
    component: Account
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
    path: "/custom-meals",
    component: CustomMeals
  },
  {
    path: "/signature-meals",
    component: SignatureMeals
  },
  {
    path: "/signature-meals/:name/:id",
    name: 'signature-meals',
    props: true,
    component: Product
  },
  {
    path: "/just-protein",
    component: JustProtein
  },
  {
    path: "/just-protein/:name/:id",
    props: true,
    component: Product
  },
  {
    path: "/just-sides",
    component: JustSides
  },
  {
    path: "/just-sides/:name/:id",
    props: true,
    component: Product
  },
  {
    path: "/sauces",
    component: Sauces
  },
  {
    path: "/sauces/:name/:id",
    props: true,
    component: Product
  },
  {
    path: "/soups",
    component: Soups
  },
  {
    path: "/soups/:name/:id",
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
