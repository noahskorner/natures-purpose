<template>
  <div class="d-flex flex-column justify-content-start align-items-center">
    <div class="col-lg-10 col-12 max-width-1080">
      <base-card>
        <div class="w-full">
          <h4 class="font-secondary text-uppercase font-weight-normal">
            Delivery address
          </h4>
          <hr />
          <div
            class="d-flex flex-column justify-content-center align-items-center"
          >
            <div class="row w-100 max-width-320">
              <!-- Address -->
              <div class="form-group col-9 pr-1 p-0">
                <label for="address">Address</label>
                <input
                  type="text"
                  class="form-control"
                  id="address"
                  placeholder="Enter address"
                  required
                />
              </div>
              <!-- Apartment Number -->
              <div class="form-group col-3 pl-1 p-0">
                <label for="address">Apt Number</label>
                <input
                  type="email"
                  class="form-control"
                  id="address"
                  placeholder="Enter apt. number"
                  required
                />
              </div>
              <!-- City -->
              <div class="form-group col-9 pr-1 p-0">
                <label for="city">City</label>
                <select class="form-control" id="city" required>
                  <option>Tempe</option>
                  <option>Scottsdale</option>
                  <option>Glendale</option>
                </select>
              </div>
              <!-- State -->
              <div class="form-group col-3 pl-1 p-0">
                <label for="city">State</label>
                <input
                  class="form-control"
                  type="text"
                  id="city"
                  placeholder="AZ"
                  readonly
                />
              </div>
            </div>
          </div>
          <hr />
        </div>
        <div class="w-full">
          <h4 class="font-secondary text-uppercase font-weight-normal">
            Delivery day
          </h4>
          <hr />
          <div class="row mx-4">
            <div class="col-md-4 col-12">
              <button class="btn btn-block btn-outline-dark my-1">
                Monday, January 7th
              </button>
            </div>
            <div class="col-md-4 col-12">
              <button class="btn btn-block btn-outline-dark my-1">
                Monday, January 7th
              </button>
            </div>
            <div class="col-md-4 col-12">
              <button class="btn btn-block btn-outline-dark my-1">
                Monday, January 7th
              </button>
            </div>
          </div>
          <hr />
        </div>
        <div class="w-full">
          <h4 class="font-secondary text-uppercase font-weight-normal">
            Delivery info
          </h4>
          <hr />
          <div
            class="d-flex flex-column justify-content-center align-items-center"
          >
            <!-- Name -->
            <div class="form-group w-100 max-width-320">
              <label for="name">Name</label>
              <input
                type="text"
                class="form-control"
                id="name"
                placeholder="Enter name"
                required
              />
            </div>
            <!-- Phone Number -->
            <div class="form-group w-100 max-width-320">
              <label for="phone">Phone Number</label>
              <input
                type="tel"
                class="form-control"
                id="phone"
                placeholder="Enter phone number"
                required
              />
            </div>
            <!-- Email -->
            <div class="form-group w-100 max-width-320">
              <label for="email">Email Address</label>
              <input
                type="email"
                class="form-control"
                id="email"
                placeholder="Enter email address"
                required
              />
            </div>
          </div>

          <hr />
        </div>
        <div class="w-full">
          <h4 class="font-secondary text-uppercase font-weight-normal">
            Order detail
          </h4>
          <hr />
        </div>
        <div class="w-full">
          <h4 class="font-secondary text-uppercase font-weight-normal">
            Pay $10.00
          </h4>
          <hr />
        </div>
      </base-card>
    </div>
    <button
      class="btn btn-block max-width-320 font-secondary btn-success font-lg"
    >
      Place order
    </button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions("cart", ["toggleShowCart", "toggleDisableCart"])
  },
  mounted() {
    this.toggleShowCart();
    this.toggleDisableCart();
  }
};
</script>

<style scoped>
</style>