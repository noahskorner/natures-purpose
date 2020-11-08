<template>
  <div class="product-card col-xl-3 col-md-4 col-sm-6 col-12 p-2">
    <div class="text-center h-100 d-flex flex-column justify-content-between">
      <router-link
        tag="div"
        class="link"
        :to="{
          name: link,
          params: { name: convertToKebabCase(name), id: id }
        }"
      >
        <img :src="imageURL" :alt="name + 'Image'" />
        <h6 class="text-uppercase mt-1 mb-0 font-secondary font-weight-normal">{{ name }}</h6>
        <p class="font-sm font-italic mb-1">with {{ recipeStr(id) }}</p>
      </router-link>
      <div>
        <div class="d-flex align-items-center justify-content-center">
          <div class="d-flex align-items-center justify-content-start">
            <div class="font-sm font-secondary font-weight-normal">
              Size:
            </div>
            <button
              v-for="(sizeObj, index) in sizes"
              :key="index"
              class="btn btn-outline-success btn-sm mx-1 size-btn text-uppercase"
              :class="getSizeBtnClass(sizeObj.id)"
              @click="selectSize(sizeObj)"
            >
              {{ sizeObj.name.charAt(0) }}
            </button>
          </div>
          <h6 class="my-auto ml-1">${{ size.price.toFixed(2) }}</h6>
        </div>
        <div class="justify-content-between mt-1">
          <router-link
            tag="button"
            class="btn btn-dark btn-sm mx-1"
            :to="{
              name: link,
              params: { name: convertToKebabCase(name), id: id }
            }"
            >View</router-link
          >
          <button class="btn btn-success btn-sm mx-1" @click="addToCart()">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  props: ["link", "id", "name", "recipes", "imageURL", "sizes"],
  data() {
    return {
      size: this.sizes[0]
    };
  },
  computed: {},
  methods: {
    convertToKebabCase(string) {
      return string.replace(/\s+/g, "-").toLowerCase();
    },
    ...mapGetters("products", ["getRecipeStr"]),
    ...mapActions("cart", ["updateCart", "toggleShowCart"]),
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
    async addToCart(){
      const payload = {
        action: 'add',
        device : this.$cookies.get("device"),
        productId: this.id,
        size: this.size,
        quantity: 1
      }
      await this.updateCart(payload);
      this.toggleShowCart();
    }
  }
};
</script>

<style scoped>
.product-card:hover {
  color: var(--success);
  padding: 0 !important;
}

.link:hover {
  cursor: pointer;
}
img {
  width: 100%;
  border-radius: 8px;
}

.size-btn {
  height: 30px;
  width: 30px;
}
</style>
