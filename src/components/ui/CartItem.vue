<template>
  <div class="w-full d-flex flex-column mx-4 my-2">
    <div class="d-flex justify-content-between">
      <h6 class="pr-0">{{ name }}</h6>
      <h6>$ {{ size.price }}</h6>
    </div>
    <div class="">
      <p class="font-italic">with {{ getRecipeStr()(id)}}</p>
    </div>
    <div class="d-flex justify-content-between align-items-center">
      <h6 class="mb-0">{{ size.name }}</h6>
      <div>
        <button class="btn btn-danger btn-sm mr-2" @click="deleteFromCart()">
          Remove
        </button>
        <div class="btn-group">
          <button class="btn btn-dark btn-sm" @click="removeOneFromCart()">
            <i class="fas fa-minus"></i>
          </button>
          <div
            class="size-btn-sm d-flex justify-content-center align-items-center"
          >
            <p class="d-block my-auto">{{ quantity }}</p>
          </div>
          <button class="btn btn-success btn-sm" @click="addOneToCart()">
            <i class="fas fa-plus"></i>
          </button>
        </div>
      </div>
    </div>
    <div class="w-full hr mt-2"></div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  props: ["id", "name", "quantity", "size"],
  methods: {
    ...mapGetters("products", ["getRecipeStr"]),
    ...mapActions("cart", ["updateCart"]),
    ...mapActions("products", ["loadProducts"]),
    async addOneToCart() {
      const payload = {
        action: "add",
        productId: this.id,
        size: this.size,
        quantity: 1,
      };
      await this.updateCart(payload);
    },
    async removeOneFromCart() {
      const payload = {
        action: "remove",
        productId: this.id,
        size: this.size,
        quantity: 1,
      };
      await this.updateCart(payload);
    },
    async deleteFromCart() {
      const payload = {
        action: "delete",
        productId: this.id,
        size: this.size,
        quantity: this.quantity,
      };
      await this.updateCart(payload);
    },
  },
  async mounted() {
    await this.loadProducts();
  }
};
</script>

<style scoped>
.header-border {
  border-bottom: 1px solid var(--light-grey);
  padding-bottom: 5px;
  padding-right: 11rem;
}

.size-btn-sm {
  width: 30px;
  height: 30px;
}

.btn-danger:focus,
.btn-danger:active {
  background: var(--danger);
  outline: none !important;
  box-shadow: none !important;
}

.btn:active {
  background: black;
}
</style>