<template>
  <section>
    <div class="modal d-flex justify-content-between">
      <div class="w-100 d-none d-md-block" @click="toggleShowCart()"></div>
      <div class="cart border-left d-flex flex-column justify-content-start position-relative">
        <div class="w-100">
          <div class="d-flex justify-content-between bg-cream">
            <h3
              class="m-2 ml-4 font-secondary text-uppercase font-weight-normal"
            >
              Cart
            </h3>
            <button class="btn" @click="toggleShowCart()">
              <i class="fas fa-times fa-2x"></i>
            </button>
          </div>
          <div class="hr"></div>
        </div>
        <div class="cart-items w-100 mb-5">
          <cart-item
            v-for="item in getCart.order_items"
            :key="item.id"
            :id="item.product.id"
            :name="item.product.name"
            :quantity="item.quantity"
            :size="item.size"
          />
        </div>

        <button
          class="rounded-0 btn btn-success btn-block text-uppercase btn-lg font-secondary position-absolute checkout-btn"
          @click="$router.push('/checkout')"
        >
          Checkout
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
// import { router } from 'vue-router';
import CartItem from "../ui/CartItem";
export default {
  components: {
    CartItem,
  },
  computed: {
    ...mapGetters("cart", ["getCart"]),
  },
  methods: {
    ...mapActions("cart", ["toggleShowCart", "loadCart"]),
  },
  async mounted() {
    const payload = { device: this.$cookies.get("device") };
    await this.loadCart(payload);
  },
};
</script>

<style scoped>
.modal {
  /** background-color: var(--bg-cream); **/
  display: block;
  min-height: 100vh;
  width: 100vw;
  position: fixed;
  backdrop-filter: blur(4px);
}

.cart {
  background-color: white;
  min-height: 100vh;
  width: 100%;
}

.cart-items {
  overflow-y: scroll;
}

.checkout-btn{
  bottom: 0;
}

@media (min-width: 768px) {
  .cart {
    max-width: 480px;
  }
}
</style>
