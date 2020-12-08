<template>
  <section>
    <!-- Product Grid -->
    <product-grid>
      <template #header>
        <h1 class="text-uppercase font-secondary font-weight-normal mt-4">
          Signature Meals
        </h1>
        <hr />
      </template>
      <template #filters>
        <div
          class="w-100 d-flex justify-content-between align-items-center mb-2 px-1"
        >
          <div class="d-flex justify-content-start align-items-center">
            <div v-if="windowWidth > 768" class="d-flex flex-col align-items-center">
                          <h6 class="font-secondary text-uppercase h-100 font-weight-normal">
              Filters: 
            </h6>
                          <button
              class="btn btn-sm btn-outline-success mx-1"
              v-for="tag in tags"
              @click="toggleFilter(tag)"
              :class="getTagClass(tag)"
              :key="tag"
            >
              {{ tag }}
            </button>
            </div>
            <div v-else class="px-1 text-left">
            <div class="dropdown">
              <button class="btn btn-sm btn-outline-dark font-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Filters:
              </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <p
                  class="dropdown-item mb-0"
                  v-for="tag in tags"
                  @click="toggleFilter(tag)"
                  :class="getTagClass(tag)"
                  :key="tag"
                >
                  {{ tag }}
                        </p>
              </div>
            </div>
            </div>
          </div>

          <button
            class="btn btn-sm btn-outline-danger ml-5 text-nowrap"
            @click="removeFilters()"
          >
            Remove filters ({{ filters.length}})
          </button>
        </div>
        <hr>
      </template>
      <template #products v-if="products.length">
        <product-card
          v-for="(product, index) in getFilteredProducts"
          link="signature-meals"
          :key="product.id"
          :id="product.id"
          :tags="product.tags"
          :name="product.name"
          :recipes="product.recipes"
          :imageURL="product.imageURL"
          :sizes="product.sizes"
          :class="{ 'border-top': index === 0 && windowWidth <= 575 }"
        />
      </template>
      <div v-else>Loading...</div>
    </product-grid>
  </section>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { useWindowSize } from "vue-window-size";

export default {
  data() {
    return {
      products: [],
      filters: [],
      tags: [],
    };
  },
  setup() {
    const { width, height } = useWindowSize();
    return {
      windowWidth: width,
      windowHeight: height,
    };
  },
  computed: {
    ...mapGetters("products", ["getSignatureMeals", "getSignatureMealsTags"]),
    getFilteredProducts() {
      if (this.filters.length === 0) {
        return this.products;
      } else {
        let filteredProducts = [];
        this.products.forEach((product) => {
          this.filters.forEach((filter) => {
            let containsTag = false;
            product.tags.forEach((tag) => {
              if (tag.name === filter) {
                containsTag = true;
              }
            });
            if (containsTag) {
              if (!filteredProducts.includes(product)) {
                filteredProducts.push(product);
              }
            }
          });
        });
        return filteredProducts;
      }
    },
  },
  methods: {
    ...mapActions("products", ["loadProducts"]),
    toggleFilter(tag) {
      if (!this.filters.includes(tag)) {
        this.filters.push(tag);
      } else {
        const index = this.filters.indexOf(tag);
        if (index > -1) {
          this.filters.splice(index, 1);
        }
      }
    },
    getTagClass(tag) {
      if (this.filters.includes(tag)) {
        return ["active"];
      } else {
        return [];
      }
    },
    removeFilters() {
      this.filters = [];
    },
  },
  async mounted() {
    await this.loadProducts();
    this.products = this.getSignatureMeals;
    this.tags = this.getSignatureMealsTags;
  },
};
</script>

<style scoped>
  .dropdown-item:active, .dropdown-item.active{
    background-color: var(--success) !important;
  }
</style>
