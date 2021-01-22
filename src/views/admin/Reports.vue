<template>
  <div class="d-flex justify-content-center">
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              Export and set status?
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            Selecting <b>Export And Update</b> will update the status of
            <u>ALL CURRENTLY FILTERED ORDERS to 'PREPARING'</u>. If you just
            wish to only export the excel sheets, click <b>Export Only</b>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Export Only
            </button>
            <button type="button" class="btn btn-danger">
              Export And Update
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="max-width-1440 w-100">
      <div class="w-100 justify-content-center">
        <h1
          class="text-uppercase font-secondary font-weight-normal mt-4 text-center"
        >
          Reports
        </h1>
        <hr />
      </div>
      <div class="d-flex justify-content-between">
        <div class="w-100 d-flex justify-content-start position-relative">
          <ul class="nav nav-tabs border-bottom-0">
            <li class="nav-item">
              <p
                @click="showTab = 1"
                class="nav-link mb-0"
                :class="showTab === 1 ? 'active' : ''"
              >
                Orders
              </p>
            </li>
            <li class="nav-item">
              <p
                @click="showTab = 2"
                class="nav-link mb-0"
                :class="showTab === 2 ? 'active' : ''"
              >
                Meals
              </p>
            </li>
            <li class="nav-item">
              <p
                @click="showTab = 3"
                class="nav-link mb-0"
                :class="showTab === 3 ? 'active' : ''"
              >
                Ingredients
              </p>
            </li>
          </ul>
          <button
            class="export-btn position-absolute btn btn-danger btn-sm"
            data-toggle="modal"
            data-target="#exampleModal"
          >
            Export all reports
          </button>
        </div>
      </div>

      <!-- Orders -->
      <table class="table table-striped" v-show="showTab === 1">
        <thead class="bg-white">
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Num Items</th>
            <th scope="col">Total</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="order in orders" :key="order.id">
            <th scope="row">{{ order.id }}</th>
            <td>{{ order.cart_num_items }}</td>
            <td>{{ parseFloat(order.cart_total).toFixed(2) }}</td>
            <td>{{ order.status }}</td>
          </tr>
        </tbody>
      </table>
      <!-- Meals -->
      <table class="table table-striped" v-show="showTab === 2">
        <thead class="bg-white">
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Product Type</th>
            <th scope="col">Size</th>
            <th scope="col">Recipes</th>
            <th scope="col">Ingredients</th>
            <th scope="col">Weight</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(meal, index) in meals" :key="index">
            <th>{{ meal.name }}</th>
            <th>{{ meal.product_type }}</th>
            <th>{{ meal.recipes }}</th>
            <th>{{ meal.ingredients }}</th>
            <th></th>
            <th></th>
          </tr>
        </tbody>
      </table>
      <!-- Ingredients -->
      <table class="table table-striped" v-show="showTab === 3">
        <thead class="bg-white">
          <tr>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(meal, index) in meals" :key="index">
            <th></th>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import API from "@/services/API.js";
export default {
  data() {
    return {
      orders: [],
      meals: [],
      showTab: 2,
    };
  },
  async mounted() {
    const { status, data } = await API.getAdminReports();
    if (status === 200) {
      this.orders = data.orders;
      this.meals = data.meals;
    }
  },
};
</script>

<style scoped>
.bg-white {
  background-color: white;
}

.export-btn {
  right: 0;
  top: 5px;
}
</style>