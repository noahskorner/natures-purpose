<template>
  <div class="d-flex flex-column justify-content-start align-items-center">
    <div class="col-lg-10 col-12 max-width-720">
      <base-card>
        <!-- Delivery Address Form -->
        <div class="w-full">
          <h4 class="font-secondary text-uppercase font-weight-normal">
            Delivery address
          </h4>
          <hr>
          <div
            class="d-flex flex-column justify-content-center align-items-center"
          >
            <div class="row w-100">
              <!-- Address -->
              <div class="form-group col-md-9 col-12 pr-1 p-0">
                <label for="address">Address</label>
                <input
                  v-model="address"
                  type="text"
                  class="form-control"
                  id="address"
                  placeholder="Enter Address"
                  required
                />
              </div>
              <!-- Apartment Number -->
              <div class="form-group col-md-3 col-12 pl-1 p-0">
                <label for="unit-">Unit Number</label>
                <input
                  v-model="unitNumber"
                  type="email"
                  class="form-control"
                  id="unit-number"
                  placeholder="Enter Unit number"
                  required
                />
              </div>
              <!-- City -->
              <div class="form-group col-9 pr-1 p-0">
                <label for="city">City</label>
                <select class="form-control" id="city" v-model="city" required>
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
        <!-- Delivery Day Form -->
        <div class="w-full">
          <h4 class="font-secondary text-uppercase font-weight-normal">
            Delivery day
          </h4>
          <hr />
          <div class="row">
            <div
              v-for="(day, index) in deliveryDays"
              :key="index"
              class="col-md-4 col-12"
            >
              <button class="btn btn-block btn-outline-success my-1" @click="selectDeliveryDate(deliveryDaysUnformatted[index])" :class="getDeliveryDayClass(deliveryDaysUnformatted[index])">
                {{ day }}
              </button>
            </div>
          </div>
        </div>
        <!-- Delivery Info Form -->
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
                v-model="name"
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
                v-model="phone"
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
                v-model="email"
                type="email"
                class="form-control"
                id="email"
                placeholder="Enter email address"
                required
              />
            </div>
          </div>
        </div>
        <!-- Order Details -->
        <div class="w-full">
          <h4 class="font-secondary text-uppercase font-weight-normal">
            Order details
          </h4>
          <table class="table table-sm table-striped mt-3">
            <thead>
              <tr>
                <th scope="col">Product</th>
                <th scope="col">Size</th>
                <th scope="col">Qty.</th>
                <th scope="col" class="text-right" >Unit Price</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in orderItems" :key="item.id">
                <td>{{ item.product.name }}</td>
                <td>{{ item.size.name }}</td>
                <td>{{ item.quantity }}</td>
                <td class="text-right">${{ item.size.price }}</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <th scope="col">Subtotal</th>
                <th scope="col"></th>
                <th scope="col"></th>
                <th scope="col" class="font-weight-normal text-right">${{ parseFloat(subTotal).toFixed(2) }}</th>
              </tr>
              <tr>
                <th scope="col">Delivery</th>
                <th scope="col"></th>
                <th scope="col"></th>
                <th scope="col" class="font-weight-normal text-right">${{ parseFloat(shippingTotal).toFixed(2) }}</th>
              </tr>
              <tr>
                <th scope="col">Tax</th>
                <th scope="col"></th>
                <th scope="col"></th>
                <th scope="col" class="font-weight-normal text-right">${{ parseFloat(taxTotal).toFixed(2) }}</th>
              </tr>
            </tfoot>
          </table>
          <p v-if="deliveryDate !== ''">Your meals will be delivered on {{ formatDay(deliveryDate) }}</p>
        </div>
        <!-- Payment -->
        <div class="w-full">
          <h4 class="font-secondary text-uppercase font-weight-normal">
            Pay ${{ parseFloat(cartTotal).toFixed(2) }}
          </h4>
          <hr />
          <div class="row mx-1">
            <!-- Card Number -->
            <div class="form-group col-9 pr-1 p-0">
            <label for="cc-number">Card Number</label>
            <input
              type="text"
              class="form-control"
              id="cc-number"
              placeholder="Enter card number"
              required
            />
            </div>
            <!-- CVC Number -->
            <div class="form-group col-3 pl-1 p-0">
              <label for="cvc-number">CVC</label>
              <input
                type="text"
                class="form-control"
                id="cvc-number"
                placeholder="CVC"
                required
              />
            </div>
            <!-- Month -->
            <div class="form-group col-6 pr-1 p-0">
                <label for="month">Month</label>
                <select class="form-control" id="month" required>
                  <option>January</option>
                  <option>February</option>
                  <option>March</option>
                  <option>April</option>
                  <option>May</option>
                  <option>June</option>
                  <option>July</option>
                  <option>August</option>
                  <option>September</option>
                  <option>October</option>
                  <option>November</option>
                  <option>December</option>
                </select>
              </div>
            <!-- Year -->
            <div class="form-group col-6 pl-1 p-0">
              <label for="year">Year</label>
              <input
                type="text"
                class="form-control"
                id="year"
                placeholder="YYYY"
                required
              />
            </div>
          </div>
        </div>
        <button
          class="btn btn-block font-secondary btn-success font-lg"
          @click="createOrder()"
        >
          Place order
        </button>
      </base-card>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import moment from 'moment'
import API from "../../services/API";
export default {
  data() {
    return {
      subTotal: 0,
      shippingTotal: 0,
      taxTotal: 0,
      cartTotal: 0,
      deliveryDays: [],
      deliveryDaysUnformatted: [],
      orderItems: [],
      affiliate: -1,
      deliveryDate: "",
      formattedDeliveryDate: "",
      address: "",
      unitNumber: "",
      city: "",
      name: "",
      phone: "",
      email: "",
    };
  },
  computed: {
    ...mapGetters("cart", ["getCart"]),
    ...mapGetters("checkout", ["getDeliveryDays", "getCutoffDay", "getCutoffTime"])
  },
  methods: {
    ...mapActions("cart", ["toggleShowCart", "toggleDisableCart", "loadCart"]),
    ...mapActions("checkout", ["loadAffiliates", "loadCheckoutInformation"]),
    createOrder() {
      const payload = {
        affiliate: this.affiliate,
        deliveryDate: this.deliveryDate,
        address: this.address,
        unitNumber: this.unitNumber,
        city: this.city,
        name: this.name,
        phone: this.phone,
        email: this.email,
      };
      API.placeOrder(payload);
    },
    formatDay(unformattedDay){
      // day is given in yyyy-mm-dd format
      const year = Number(unformattedDay.substring(0,4))
      const month = Number(unformattedDay.substring(5,7))
      const day = Number(unformattedDay.substring(8,10))
      var date = new Date(year, month, day);
      return moment(date).format('dddd, MMMM D');
    },
    selectDeliveryDate(deliveryDate){
      this.deliveryDate = deliveryDate
    },
    getDeliveryDayClass(deliveryDate) {
      if(this.deliveryDate === deliveryDate) {
        return 'active'
      }
    }
  },
  async mounted() {
    // load the order information
    await this.loadCart();
    this.subTotal = parseFloat(this.getCart.sub_total).toFixed(2)
    this.taxTotal = parseFloat(this.getCart.tax_total).toFixed(2)
    this.shippingTotal = parseFloat(this.getCart.shipping_total).toFixed(2)
    this.cartTotal = parseFloat(this.getCart.cart_total).toFixed(2)
    this.orderItems = this.getCart.order_items
    // disable the cart while in checkout
    this.toggleShowCart();
    this.toggleDisableCart();
    // load the checkout information
    await this.loadCheckoutInformation();
    // format the delivery days array
    this.deliveryDaysUnformatted = this.getDeliveryDays
    this.getDeliveryDays.forEach(unformattedDay => {
      this.deliveryDays.push(this.formatDay(unformattedDay))
    });
  },
};
</script>

<style scoped>
</style>