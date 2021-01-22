<template>
  <div class="product-card col-xl-3 col-md-4 col-sm-6 col-12 p-sm-2 p-0">
    <div
      class="text-center h-100 d-flex flex-column justify-content-between card"
      v-if="windowWidth > 575"
    >
      <router-link
        tag="div"
        class="link"
        :to="{
          name: link,
          params: { name: convertToKebabCase(name), id: id },
        }"
      >
        <img :src="imageURL" :alt="'Image of ' + name + ' product.'" />
        <h6 class="text-uppercase mt-1 mb-0 font-secondary font-weight-normal">
          {{ name }}
        </h6>
        <p class="font-sm font-italic mb-1">with {{ recipeStr(id) }}</p>
      </router-link>
      <div>
        <div class="d-flex align-items-center justify-content-center">
          <h6 class="my-auto ml-1">${{ size.price.toFixed(2) }}</h6>
        </div>
        <div class="d-flex justify-content-around mb-3">
          <div>
            <button
              v-for="(sizeObj, index) in sizes"
              :key="index"
              class="btn btn-outline-dark btn-sm mx-1 size-btn text-uppercase"
              :class="getSizeBtnClass(sizeObj.id)"
              @click="selectSize(sizeObj)"
            >
              {{ sizeObj.name.charAt(0) }}
            </button>
          </div>

          <button class="btn btn-success btn-sm mx-1" @click="addToCart()">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
    <div v-else class="bg-white border-bottom">
      <router-link
        tag="div"
        class="link"
        :to="{
          name: link,
          params: { name: convertToKebabCase(name), id: id },
        }"
      >
        <div class="row">
          <div class="col-3">
            <img :src="imageURL" :alt="name + 'Image'" class="my-2 ml-4" />
          </div>
          <div class="col-9 text-left">
            <div class="h-100 d-flex flex-column justify-content-between">
              <!-- Text -->
              <div>
                <div class="d-flex justify-content-between">
                  <h6
                    class="text-uppercase mt-2 mb-0 font-secondary font-weight-normal"
                  >
                    {{ name }}
                  </h6>
                  <div class="d-flex align-items-center justify-content-center">
                    <h6 class="my-auto mr-4">${{ size.price.toFixed(2) }}</h6>
                  </div>
                </div>

                <p class="font-sm font-italic mb-1">with {{ recipeStr(id) }}</p>
              </div>

              <!-- Buttons -->
              <div class="d-flex justify-content-between mb-2">
                <div>
                  <button
                    v-for="(sizeObj, index) in sizes"
                    :key="index"
                    class="btn btn-outline-dark btn-sm mx-1 size-btn text-uppercase"
                    :class="getSizeBtnClass(sizeObj.id)"
                    @click.prevent="selectSize(sizeObj)"
                  >
                    {{ sizeObj.name.charAt(0) }}
                  </button>
                </div>

                <button
                  class="btn btn-success btn-sm mx-4"
                  @click.prevent="addToCart()"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { useWindowSize } from "vue-window-size";
export default {
  props: ["link", "id", "name", "recipes", "imageURL", "sizes"],
  data() {
    return {
      size: this.sizes[0],
    };
  },
  setup() {
    const { width, height } = useWindowSize();
    return {
      windowWidth: width,
      windowHeight: height,
    };
  },
  computed: {},
  methods: {
    convertToKebabCase(string) {
      return string.replace(/\s+/g, "-").toLowerCase();
    },
    ...mapGetters("products", ["getRecipeStr"]),
    ...mapActions("cart", ["updateCart", "toggleShowCart"]),
    ...mapActions("alert", ["addAlert"]),
    recipeStr() {
      const recipeStr = this.getRecipeStr(this.id);
      return recipeStr(this.id);
    },
    selectSize(size) {
      this.size = size;
    },
    getSizeBtnClass(id) {
      if (this.size.id !== id) {
        return [""];
      } else {
        return ["active"];
      }
    },
    async addToCart() {
      const payload = {
        action: "add",
        productId: this.id,
        size: this.size,
        quantity: 1,
      };
      await this.updateCart(payload);
      this.toggleShowCart();
    },
  },
};
</script>

<style scoped>
.link:hover {
  cursor: pointer;
}
img {
  width: 100%;
}

.size-btn {
  height: 30px;
  width: 30px;
}

.card {
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
}

@media (min-width: 768px) {
  .product-card:hover {
    color: var(--success);
    padding-left: 0 !important;
    padding-right: 0 !important;
    padding-top: 0 !important;
  }
}
</style>
