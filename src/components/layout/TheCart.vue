<template>
  <div
    v-if="$route.path !== '/checkout'"
    class="cart d-flex flex-column justify-content-start position-absolute"
    :style="{ height: windowHeight + 'px' }"
  >
    <div class="w-100">
      <div
        class="d-flex justify-content-between align-items-center bg-cream header"
      >
        <button
          class="btn pl-4 h-100 d-flex justify-content-center align-items-center"
          @click="setShowCart(false)"
        >
          <i class="fas fa-times fa-2x"></i>
        </button>
        <div class="font-secondary text-uppercase" style="font-size: 2rem">
          Cart
        </div>
        <div style="width: 60px;"></div>
      </div>
      <div class="hr"></div>
    </div>
    <div
      v-if="getCart.sub_total < orderMinimum"
      class="mx-auto my-0 py-0 text-danger text-center border-bottom"
      style="width: 95%"
    >
      <i class="fas fa-exclamation-circle"></i>
      Your order does not meet the order minimum of ${{ orderMinimum }}.
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
      <div class="test"></div>
    </div>

    <div
      class="position-fixed checkout-section w-100 bg-cream border-top"
      ref="checkoutSection"
    >
      <div>
        <!-- Number of items -->
        <div class="mt-1 d-flex justify-content-between align-items-center">
          <h6
            class="m-0 ml-4 font-secondary text-uppercase font-weight-normal align-middle"
          >
            Items:
          </h6>
          <h6 class="font-weight-light font-secondary pt-2 pr-4">
            {{ getCart.cart_num_items }}
          </h6>
        </div>
        <!-- Sub total -->
        <div class="d-flex justify-content-between align-items-center">
          <h6
            class="m-0 ml-4 font-secondary text-uppercase font-weight-normal align-middle"
          >
            Sub Total:
          </h6>
          <h6 class="font-weight-light font-secondary pt-2 pr-4">
            ${{ parseFloat(getCart.sub_total).toFixed(2) }}
          </h6>
        </div>
        <!-- Shipping -->
        <div class="d-flex justify-content-between align-items-center">
          <h6
            class="m-0 ml-4 font-secondary text-uppercase font-weight-normal align-middle"
          >
            Delivery:
          </h6>
          <h6 class="font-weight-light font-secondary pt-2 pr-4">
            ${{ parseFloat(getCart.shipping_total).toFixed(2) }}
          </h6>
        </div>
        <!-- Shipping -->
        <div class="d-flex justify-content-between align-items-center mb-1">
          <h6
            class="m-0 ml-4 font-secondary text-uppercase font-weight-normal align-middle"
          >
            Tax:
          </h6>
          <h6 class="font-weight-light font-secondary pt-2 pr-4">
            ${{ parseFloat(getCart.tax_total).toFixed(2) }}
          </h6>
        </div>
        <!-- Total -->
        <div
          class="d-flex justify-content-between align-items-center border-top"
        >
          <h3
            class="m-2 ml-4 font-secondary text-uppercase font-weight-normal align-middle"
          >
            Total:
          </h3>
          <h3 class="font-weight-normal font-secondary pr-4">
            ${{ parseFloat(getCart.cart_total).toFixed(2) }}
          </h3>
        </div>
      </div>

      <button
        class="rounded-0 btn btn-success btn-block text-uppercase btn-lg font-secondary"
        :disabled="getCart.sub_total < orderMinimum"
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
import constants from "@/constants/index.js";
export default {
  emits: ["close-overlay"],
  data() {
    return {
      orderMinimum: constants.ORDER_MINIMUM,
    };
  },
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
    ...mapActions("cart", ["setShowCart", "loadCart"]),
    ...mapActions("products", ["loadProducts"]),
    getCheckoutSectionHeight() {
      if (this.$route.path !== "/checkout") {
        this.checkoutSectionHeight = this.$refs.checkoutSection.clientHeight;
      }
    },
    closeCartAndRoute(route) {
      this.setShowCart(false);
      this.$router.push(route);
    },
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
  height: 4rem;
}

.cart-items {
  overflow-y: scroll !important;
}

.cart-items::-webkit-scrollbar {
  -webkit-appearance: none;
}

.cart-items::-webkit-scrollbar:vertical {
  width: 11px;
}

.cart-items::-webkit-scrollbar:horizontal {
  height: 11px;
}

.cart-items::-webkit-scrollbar-thumb {
  border-radius: 8px;
  border: 2px solid white; /* should match background, can't be transparent */
  background-color: rgba(0, 0, 0, 0.5);
}

.checkout-section {
  bottom: 0;
  z-index: 10;
}

@media (min-width: 768px) {
  .cart {
    max-width: 480px;
  }

  .checkout-section {
    max-width: 480px;
  }
}
</style>
