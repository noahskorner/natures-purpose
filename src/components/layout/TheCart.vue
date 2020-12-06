<template>
  <section>
    <div
      class="modal d-flex justify-content-between"
      :style="{ height: windowHeight }"
    >
      <div class="w-100 d-none d-md-block" @click="toggleShowCart()"></div>
      <div
        class="cart border-left d-flex flex-column justify-content-start position-relative"
      >
        <div class="w-100">
          <div class="d-flex justify-content-between bg-cream header">
            <div
              class="d-flex flex-col justify-content-center align-items-center"
            >
              <h3
                class="m-2 ml-4 font-secondary text-uppercase font-weight-normal align-middle"
              >
                Cart
              </h3>
            </div>

            <button
              class="btn pr-4 h-100 d-flex justify-content-center align-items-center"
              @click="toggleShowCart()"
            >
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
        <div class="mb-5"></div>

        <div
          class="position-absolute checkout-section w-100 bg-cream border-top"
        >
          <div class="d-flex justify-content-between align-items-center">
            <h3
              class="m-2 ml-4 font-secondary text-uppercase font-weight-normal align-middle"
            >
              Items:
            </h3>
            <h3 class="font-weight-normal font-secondary pt-2 pr-4">
              {{ getCart.cart_num_items }}
            </h3>
          </div>
          <div
            class="d-flex justify-content-between align-items-center border-top"
          >
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
            @click="$router.push('/checkout')"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
// import { router } from 'vue-router';
import CartItem from "../ui/CartItem";
export default {
  data() {
    return {
      windowHeight: window.innerHeight,
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
    onResize() {
      this.windowHeight = window.innerHeight;
    },
  },
  async mounted() {
    this.$nextTick(() => {
      window.addEventListener("resize", this.onResize);
    });
    await this.loadCart();
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.onResize);
  },
};
</script>

<style scoped>
.modal {
  /** background-color: var(--bg-cream); **/
  display: block;
  width: 100vw;
  position: fixed;
  backdrop-filter: blur(4px);
}

.cart {
  background-color: white;
  width: 100%;
}

.header {
  height: 4rem;
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
