<template>
  <section class="mx-auto p-2">
    <!-- PUT TAGS HERE -->
    <div class="row" v-if="selectedProduct !== null">
      <div class="col-lg-5 col-sm-6 col-12">
        <img :src="selectedProduct.imageURL" alt="" />
      </div>
      <div class="col-lg-7 col-sm-6 col-12">
        <base-card>
          <h4 class="font-secondary font-weight-normal">{{ selectedProduct.name }}</h4>
          <hr class="mt-0" />
          <p class="font-italic">with {{ getRecipeStr(selectedProduct.id) }}</p>
          <div class="my-2">
            <h6>Select size:</h6>
            <button
              v-for="size in selectedProduct.sizes"
              :key="size.id"
              @click="selectSize(size)"
              :class="getSizeBtnClass(size.id)"
            >
              {{ size.name }}
            </button>
          </div>
          <div class="my-2">
            <h6>Quantity:</h6>
            <div class="btn-group mt-2">
              <button class="btn btn-dark" @click="quantityDown()">
                <i class="fas fa-minus"></i>
              </button>
              <div class="size-btn-lg text-center">
                <div class="pt-2">{{ quantity }}</div>
              </div>
              <button class="btn btn-success" @click="quantityUp()">
                <i class="fas fa-plus"></i>
              </button>
            </div>
          </div>
          <div class="my-2 d-flex justify-start">
            <div class="mr-5">
              <h6>Weight:</h6>
              <h4 class="my-2">{{ size.weight }}oz</h4>
            </div>
            <div>
              <h6>Unit Price:</h6>
              <h4 class="my-2">${{ size.price.toFixed(2) }}</h4>
            </div>
          </div>
          <button class="btn btn-block btn-success font-secondary" @click="addToCart()">Add To Cart</button>
        </base-card>
        <!-- Ingredients -->
        <base-card>
          <h4 class="font-secondary font-weight-normal">Ingredients</h4>
          <p>{{ getIngredientStr(selectedProduct.id) }}</p>
        </base-card>
        <!-- Macros -->
        <base-card>
          <h4 class="font-secondary font-weight-normal">Macros</h4>
          <div class="d-flex justify-content-around">
            <div class="d-flex flex-column justify-content-center align-items-center mt-3">
              <h4>{{ size.macro_protein.toFixed(2) }}g</h4>
              <p class="font-secondary text-uppercase font-weight-light">Protein</p>
            </div>
            <div class="border-right"></div>
            <div class="d-flex flex-column justify-content-center align-items-center mt-3">
              <h4>{{ size.macro_carbs.toFixed(2) }}g</h4>
              <p class="font-secondary text-uppercase font-weight-light">carbs</p>
            </div>           <div class="border-left"></div> <div class="d-flex flex-column justify-content-center align-items-center mt-3">
              <h4>{{ size.macro_fat.toFixed(2) }}g</h4>
              <p class="font-secondary text-uppercase font-weight-light">fat</p>
            </div>
          </div>
        </base-card>
      </div>
    </div>
    <!-- Loading -->
    <div v-else>
      Loading...
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  props: ["name", "id"],
  data() {
    return {
      selectedProduct: null,
      quantity: 1,
      size: null
    };
  },
  computed: {
    ...mapGetters("products", [
      "getProducts",
      "getRecipeStr",
      "getIngredientStr"
    ])
  },
  methods: {
    ...mapActions("products", ["loadProducts"]),
    ...mapActions("cart", ["updateCart", "toggleShowCart"]),
    quantityUp() {
      this.quantity++;
    },
    quantityDown() {
      if (this.quantity !== 1) this.quantity--;
    },
    selectSize(size) {
      this.size = size;
    },
    getSizeBtnClass(id) {
      if (this.size.id !== id) {
        return ["btn", "btn-sm", "btn-outline-success", "mr-2", "mt-2"];
      } else {
        return ["btn", "btn-sm", "btn-outline-success", "mr-2", "mt-2", "active"];
      }
    },
    async addToCart(){
      const payload = {
        action: 'add',
        productId: this.id,
        size: this.size,
        quantity: this.quantity
      }
      await this.updateCart(payload);
      this.toggleShowCart();
    }
  },
  async mounted() {
    await this.loadProducts();
    this.selectedProduct = this.getProducts.find(
      product => product.id === Number(this.id)
    );
    this.size = this.selectedProduct.sizes[0];
  }
};
</script>

<style scoped>
section {
  max-width: 1080px;
}

img {
  width: 100%;
  border-radius: 8px;
  margin-top: 1rem;
}

h6 {
  margin-bottom: 0 !important;
}

.size-btn-lg {
  width: 40px;
  height: 40px;
}
</style>
