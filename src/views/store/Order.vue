<template>
  <section>
    <!-- Product Grid -->
    <product-grid class="px-4">
      <template #header>
        <h1 class="text-uppercase font-secondary font-weight-normal">Order</h1>
      </template>
      <template #products>
        <div class="product-card col-xl-3 col-md-4 col-6 p-2">
          <div
            class="text-center h-100 d-flex flex-column justify-content-between"
          >
            <router-link
              tag="div"
              class="link"
              :to="'/signature-meals/'"
            >
              <img src="https://picsum.photos/300/300" alt="none" />
              <h6
                class="text-uppercase mt-1 mb-0 font-secondary font-weight-normal"
              >
                Signature Meals
              </h6>
              <p class="font-sm font-italic mb-1">Handpicked, protein packed meals ready to be eaten</p>
            </router-link>
          </div>
        </div>
        <div class="product-card col-xl-3 col-md-4 col-6 p-2">
          <div
            class="text-center h-100 d-flex flex-column justify-content-between"
          >
            <router-link
              tag="div"
              class="link"
              :to="'#'"
            >
              <img src="https://picsum.photos/300/300" alt="none" />
              <h6
                class="text-uppercase mt-1 mb-0 font-secondary font-weight-normal"
              >
                Custom Meals
              </h6>
              <p class="font-sm font-italic mb-1">Made-to-order, fresh, 100% custom meals</p>
            </router-link>
          </div>
        </div>
        <div class="product-card col-xl-3 col-md-4 col-6 p-2">
          <div
            class="text-center h-100 d-flex flex-column justify-content-between"
          >
            <router-link
              tag="div"
              class="link"
              :to="'#'"
            >
              <img src="https://picsum.photos/300/300" alt="none" />
              <h6
                class="text-uppercase mt-1 mb-0 font-secondary font-weight-normal"
              >
                Just Protein
              </h6>
              <p class="font-sm font-italic mb-1">8, 12, or 18 oz of our finest cooked protein meals</p>
            </router-link>
          </div>
        </div>
        <div class="product-card col-xl-3 col-md-4 col-6 p-2">
          <div
            class="text-center h-100 d-flex flex-column justify-content-between"
          >
            <router-link
              tag="div"
              class="link"
              :to="'#'"
            >
              <img src="https://picsum.photos/300/300" alt="none" />
              <h6
                class="text-uppercase mt-1 mb-0 font-secondary font-weight-normal"
              >
                Just Sides
              </h6>
              <p class="font-sm font-italic mb-1">No meat? No problem.</p>
            </router-link>
          </div>
        </div>
        <div class="product-card col-xl-3 col-md-4 col-6 p-2">
          <div
            class="text-center h-100 d-flex flex-column justify-content-between"
          >
            <router-link
              tag="div"
              class="link"
              :to="'#'"
            >
              <img src="https://picsum.photos/300/300" alt="none" />
              <h6
                class="text-uppercase mt-1 mb-0 font-secondary font-weight-normal"
              >
                Soups
              </h6>
              <p class="font-sm font-italic mb-1">Our finest soups</p>
            </router-link>
          </div>
        </div>
        <div class="product-card col-xl-3 col-md-4 col-6 p-2">
          <div
            class="text-center h-100 d-flex flex-column justify-content-between"
          >
            <router-link
              tag="div"
              class="link"
              :to="'#'"
            >
              <img src="https://picsum.photos/300/300" alt="none" />
              <h6
                class="text-uppercase mt-1 mb-0 font-secondary font-weight-normal"
              >
                Sauces
              </h6>
              <p class="font-sm font-italic mb-1">I got lazy with the captions</p>
            </router-link>
          </div>
        </div>
      </template>
    </product-grid>
  </section>
</template>

<script>
export default {};
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
