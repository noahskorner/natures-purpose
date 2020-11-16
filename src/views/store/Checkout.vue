<template>
  <div class="d-flex flex-column justify-content-start align-items-center">
    <div class="col-lg-10 col-12 max-width-720">
      <base-card>
        <div class="w-full">
          <h4 class="font-secondary text-uppercase font-weight-normal">
            Affiliate Delivery
          </h4>
          <div class="form-group">
            <label for="exampleFormControlSelect1"
              >Please select an affiliate delivery (if applicable)</label
            >
            <button
              type="button"
              class="btn pl-1"
              data-toggle="popover"
              title="Popover title"
              data-content="And here's some amazing content. It's very engaging. Right?"
            >
              <i class="fas fa-info-circle"></i>
            </button>
            <select
              class="form-control"
              id="exampleFormControlSelect1"
              v-model="affiliate"
            >
              <option value="None" selected>None</option>
              <option value="affiliateId">
                Lifetime Fitness (204 Rainbow Rd.)
              </option>
              <option value="affiliateId">Gold's Gym (777 Nunya Rd.)</option>
              <option value="affiliateId">Mikey's Gym (707 Mike Dr.)</option>
            </select>
          </div>
          <hr />
        </div>
        <div class="w-full" v-if="affiliate == 'None'">
          <h4 class="font-secondary text-uppercase font-weight-normal">
            Delivery address
          </h4>
          <div
            class="d-flex flex-column justify-content-center align-items-center"
          >
            <div class="row w-100">
              <!-- Address -->
              <div class="form-group col-md-9 col-12 pr-1 p-0">
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
              <div class="form-group col-md-3 col-12 pl-1 p-0">
                <label for="address">Apt Number</label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
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
        </div>
        <div class="w-full">
          <h4 class="font-secondary text-uppercase font-weight-normal">
            Delivery day
          </h4>
          <hr />
          <div class="row">
            <div class="col-md-4 col-12">
              <button class="btn btn-block btn-outline-success my-1">
                Mon. January 7th
              </button>
            </div>
            <div class="col-md-4 col-12">
              <button class="btn btn-block btn-outline-success my-1">
                Tues. January 7th
              </button>
            </div>
            <div class="col-md-4 col-12">
              <button class="btn btn-block btn-outline-success my-1">
                Thurs. January 7th
              </button>
            </div>
          </div>
        </div>
        <div class="w-full mt-3">
          <h4 class="font-secondary text-uppercase font-weight-normal">
            Delivery info
          </h4>
          <hr />
          <div
            class="d-flex flex-column justify-content-center align-items-center"
          >
            <!-- Name -->
            <div class="form-group w-100">
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
            <div class="form-group w-100">
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
            <div class="form-group w-100">
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
        </div>
        <div class="w-full">
          <h4 class="font-secondary text-uppercase font-weight-normal">
            Order detail
          </h4>
          <hr>
                    <div class="d-flex justify-content-between">
            <h6>Name</h6>
            <h6>Quantity</h6>
            <h6>Size</h6>
            <h6>Unit Price</h6>
          </div>
          <div v-for="item in getCart.order_items" :key="item.id" class="d-flex justify-content-between">
            <p class="d-inline-block">{{ item.product.name }}</p>
            <p class="d-inline-block">{{ item.quantity }}</p>
            <p class="d-inline-block">{{ item.size.name }}</p>
            <p class="d-inline-block">{{ item.size.price }}</p>
          </div>
        </div>
        <div class="w-full">
          <h4 class="font-secondary text-uppercase font-weight-normal">
            Pay ${{ cartTotal }}
          </h4>
          <hr>
        </div>
        <button class="btn btn-block font-secondary btn-success font-lg">
          Place order
        </button>
      </base-card>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters("cart", ["getCart"]),
    cartTotal() {
      const total = parseFloat(this.getCart.cart_total)
      return total.toFixed(2)
    }
  },
  methods: {
    ...mapActions("cart", ["toggleShowCart", "toggleDisableCart", "loadCart"]),
  },
  async mounted() {
    await this.loadCart();
    this.toggleShowCart();
    this.toggleDisableCart();
  },
  data() {
    return {
      affiliate: "None",
    };
  },
};
</script>

<style scoped>
</style>