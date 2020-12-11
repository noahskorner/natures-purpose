<template>
  <div
    v-if="$route.path !== '/checkout'"
    class="cart d-flex flex-column justify-content-start position-absolute"
    :class="windowWidth > 768 ? 'border-left' : 'border-none'"
    :style="{ height: windowHeight + 'px' }"
  >
    <div class="w-100">
      <div
        class="d-flex justify-content-between align-items-center bg-cream header"
      >
        <button
          class="btn pl-4 h-100 d-flex justify-content-center align-items-center"
          @click="toggleShowCart()"
        >
          <i class="fas fa-times fa-2x"></i>
        </button>
        <div class="font-secondary text-uppercase pr-4" style="font-size: 2rem">
          Cart
        </div>
        <div></div>
      </div>
      <div class="hr"></div>
    </div>
    <div
      class="cart-items w-100"
      :style="{ marginBottom: checkoutSectionHeight + 'px' }"
    >
      <cart-item
        v-for="item in getCart.order_items"
        :key="item.id"
        :id="item.product.id"
        :name="item.product.name"
        :quantity="item.quantity"
        :size="item.size"
      />
    </div>

    <div
      class="position-absolute checkout-section w-100 bg-cream border-top"
      ref="checkoutSection"
    >
      <!-- Number of items -->
      <div class="d-flex justify-content-between align-items-center">
        <h6
          class="m-2 ml-4 font-secondary text-uppercase font-weight-normal align-middle"
        >
          Items:
        </h6>
        <h6 class="font-weight-normal font-secondary pt-2 pr-4">
          {{ getCart.cart_num_items }}
        </h6>
      </div>
      <!-- Sub total -->
      <div class="d-flex justify-content-between align-items-center">
        <h6
          class="m-2 ml-4 font-secondary text-uppercase font-weight-normal align-middle"
        >
          Sub Total:
        </h6>
        <h6 class="font-weight-normal font-secondary pt-2 pr-4">
          ${{ parseFloat(getCart.sub_total).toFixed(2) }}
        </h6>
      </div>
      <!-- Shipping -->
      <div class="d-flex justify-content-between align-items-center">
        <h6
          class="m-2 ml-4 font-secondary text-uppercase font-weight-normal align-middle"
        >
          Delivery:
        </h6>
        <h6 class="font-weight-normal font-secondary pt-2 pr-4">
          ${{ parseFloat(getCart.shipping_total).toFixed(2) }}
        </h6>
      </div>
      <!-- Shipping -->
      <div class="d-flex justify-content-between align-items-center">
        <h6
          class="m-2 ml-4 font-secondary text-uppercase font-weight-normal align-middle"
        >
          Tax:
        </h6>
        <h6 class="font-weight-normal font-secondary pt-2 pr-4">
          ${{ parseFloat(getCart.tax_total).toFixed(2) }}
        </h6>
      </div>
      <!-- Total -->
      <div class="d-flex justify-content-between align-items-center border-top">
        <h3
          class="m-2 ml-4 font-secondary text-uppercase font-weight-normal align-middle"
        >
          Total:
        </h3>
        <h3 class="font-weight-normal font-secondary pt-2 pr-4">
          ${{ parseFloat(getCart.cart_total).toFixed(2) }}
        </h3>
      </div>

      <button
        class="rounded-0 btn btn-success btn-block text-uppercase btn-lg font-secondary"
        @click="closeCartAndRoute('/checkout')"
      >
        Checkout
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { useWindowSize } from "vue-window-size";
import CartItem from "../ui/CartItem";
export default {
  emits: ["close-overlay"],
  setup() {
    const { width, height } = useWindowSize();
    return {
      windowWidth: width,
      windowHeight: height,
      checkoutSectionHeight: 0,
    };
  },
  components: {
    CartItem,
  },
  computed: {
    ...mapGetters("cart", ["getCart"]),
  },
  methods: {
    ...mapActions("cart", ["toggleShowCart", "loadCart"]),
    ...mapActions("products", ["loadProducts"]),
    getCheckoutSectionHeight() {
      this.checkoutSectionHeight = this.$refs.checkoutSection.clientHeight;
    },
    closeCartAndRoute(route){
      this.toggleShowCart();
      this.$router.push(route)
    }
  },
  async mounted() {
    await this.loadCart();
    await this.loadProducts();
    this.getCheckoutSectionHeight();
  },
};
</script>

<style scoped>
.cart {
  background-color: white;
  width: 100vw;
  z-index: 100;
  right: 0;
  top: 0;
}

.header {
  height: 5rem;
}

.cart-items {
  overflow-y: scroll;
}

.checkout-section {
  bottom: 0;
  z-index: 10;
}

@media (min-width: 768px) {
  .cart {
    max-width: 480px;
  }
}
</style>
