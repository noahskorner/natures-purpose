<template>
  <section class="mx-auto p-2">
    <!-- PUT TAGS HERE -->
    <div class="row" v-if="selectedProduct !== null">
      <div class="col-12">
        <div
          v-for="tag in selectedProduct.tags"
          :key="tag.id"
          class="position-relative d-inline-block"
        >
          <div class="tag">
            {{ tag.name }}
          </div>
        </div>
      </div>
      <div class="col-lg-5 col-sm-6 col-12 m-0">
        <img :src="selectedProduct.imageURL" alt="" />
        <!-- Macros -->
        <base-card>
          <h4 class="font-secondary font-weight-normal">Macros</h4>
          <hr class="my-2" />
          <div class="d-flex justify-content-around">
            <div
              class="d-flex flex-column justify-content-center align-items-center"
            >
              <h4 class="m-0 p-0">{{ size.macro_protein.toFixed(2) }}g</h4>
              <p class="font-weight-light text-left m-0">Protein</p>
            </div>
            <div
              class="d-flex flex-column justify-content-center align-items-center"
            >
              <h4 class="m-0 p-0">{{ size.macro_carbs.toFixed(2) }}g</h4>
              <p class="font-weight-light m-0">Carbs</p>
            </div>
            <div
              class="d-flex flex-column justify-content-center align-items-center"
            >
              <h4 class="m-0 p-0">{{ size.macro_fat.toFixed(2) }}g</h4>
              <p class="font-weight-light m-0">Fat</p>
            </div>
          </div>
        </base-card>
      </div>
      <div class="col-lg-7 col-sm-6 col-12">
        <base-card>
          <h4 class="font-secondary font-weight-normal">
            {{ selectedProduct.name }}
          </h4>
          <p class="font-italic m-0 font-weight-light">
            with {{ getRecipeStr(selectedProduct.id) }}
          </p>
          <hr class="mb-0 mt-1" />
          <div class="my-2">
            <h6 class="font-weight-normal font-secondary">Size:</h6>
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
            <h6 class="font-weight-normal font-secondary">Qty:</h6>
            <div class="btn-group mt-2">
              <button class="btn btn-sm btn-dark" @click="quantityDown()">
                <i class="fas fa-minus"></i>
              </button>
              <div
                class="size-btn-lg text-center d-flex justify-content-center align-items-center"
              >
                <div>{{ quantity }}</div>
              </div>
              <button class="btn btn-sm btn-success" @click="quantityUp()">
                <i class="fas fa-plus"></i>
              </button>
            </div>
          </div>
          <div class="my-2 d-flex justify-start">
            <div class="mr-5">
              <h6 class="font-weight-light">Weight:</h6>
              <h4 class="my-2 font-weight-normal font-secondary">
                {{ size.weight }}oz
              </h4>
            </div>
            <div>
              <h6 class="font-weight-light">Unit Price:</h6>
              <h4 class="my-2 font-weight-normal font-secondary">
                ${{ size.price.toFixed(2) }}
              </h4>
            </div>
          </div>
          <button
            class="btn btn-block btn-success font-secondary"
            @click="addToCart()"
          >
            Add To Cart
          </button>
        </base-card>
        <!-- Ingredients -->
        <base-card>
          <h4 class="font-secondary font-weight-normal">Ingredients</h4>
          <hr class="my-2" />
          <p class="font-italic font-weight-light">
            {{ getIngredientStr(selectedProduct.id) }}
          </p>
        </base-card>
      </div>
    </div>
    <!-- Loading -->
    <div class="d-flex justify-content-center mt-5" v-else>
      <div class="spinner-border" role="status">
        <span class="sr-only">Loading...</span>
      </div>
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
      size: null,
    };
  },
  computed: {
    ...mapGetters("products", [
      "getProducts",
      "getRecipeStr",
      "getIngredientStr",
    ]),
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
        return [
          "btn",
          "btn-sm",
          "btn-outline-success",
          "mr-2",
          "mt-2",
          "active",
        ];
      }
    },
    async addToCart() {
      const payload = {
        action: "add",
        productId: this.id,
        size: this.size,
        quantity: this.quantity,
      };
      await this.updateCart(payload);
      this.toggleShowCart();
    },
  },
  async mounted() {
    await this.loadProducts();
    this.selectedProduct = this.getProducts.find(
      (product) => product.id === Number(this.id)
    );
    this.size = this.selectedProduct.sizes[0];
  },
};
</script>

<style scoped>
section {
  max-width: 1080px;
}

img {
  width: 100%;
  margin-top: 1rem;
}

h6 {
  margin-bottom: 0 !important;
}

.size-btn-lg {
  width: 30px;
  height: 30px;
}

.tag {
  background-color: #cff0cc;
  padding: 3px 7px;
  color: black;
  border-radius: 10px;
  font-size: 0.8rem;
  margin: 0.15rem;
  min-width: 25px;
  text-align: center;
}
</style>
