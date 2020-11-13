<template>
  <section>
    <!-- Product Grid -->
    <product-grid>
      <template #header>
        <h1 class="text-uppercase font-secondary font-weight-normal">
          Signature Meals
        </h1>
      </template>
      <template #products v-if="products.length">
        <product-card
          v-for="product in products"
          link="signature-meals"
          :key="product.id"
          :id="product.id"
          :name="product.name"
          :recipes="product.recipes"
          :imageURL="product.imageURL"
          :sizes="product.sizes"
        />
      </template>
      <div v-else>Loading...</div>
    </product-grid>
  </section>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      products: []
    };
  },
  computed: {
    ...mapGetters("products", ["getSignatureMeals"])
  },
  methods: {
    ...mapActions("products", ["loadProducts"])
  },
  async mounted() {
    await this.loadProducts();
    this.products = this.getSignatureMeals;
  }
};
</script>

<style scoped>
</style>
