<template>
  <div
    class="d-flex flex-column justify-content-start align-items-center"
    v-if="!loading"
  >
    <div class="col-lg-10 col-12 max-width-720">
      <base-card>
        <!-- Delivery Address Form -->
        <div class="w-full">
          <h4 class="font-secondary text-uppercase font-weight-normal">
            Delivery address
          </h4>
          <hr />
          <!-- Errors -->
          <div class="col-12 p-0" v-if="deliveryAddressError">
            <div
              class="alert alert-danger alert-dismissible fade show"
              role="alert"
            >
              {{ deliveryAddressError }}
            </div>
          </div>
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
              <div class="form-group col-4 pr-1 p-0">
                <label for="city">City</label>
                <select class="form-control" id="city" v-model="city" required>
                  <option>Tempe</option>
                  <option>Scottsdale</option>
                  <option>Glendale</option>
                </select>
              </div>
              <!-- State -->
              <div class="form-group col-4 pl-1 p-0">
                <label for="state">State</label>
                <input
                  class="form-control"
                  type="text"
                  id="state"
                  placeholder="AZ"
                  readonly
                />
              </div>
              <!-- Zip -->
              <div class="form-group col-4 pl-1 p-0">
                <label for="zip">Zip</label>
                <input
                  v-model="zip"
                  class="form-control"
                  type="text"
                  id="zip"
                  placeholder="Enter zip"
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
          <!-- Errors -->
          <div class="col-12 p-0" v-if="deliveryDayError">
            <div
              class="alert alert-danger alert-dismissible fade show"
              role="alert"
            >
              {{ deliveryDayError }}
            </div>
          </div>
          <div class="row">
            <div class="text-left mx-2">
              <button
                class="btn btn-outline-success m-1"
                v-for="(day, index) in deliveryDays"
                :key="index"
                @click="selectDeliveryDate(deliveryDaysUnformatted[index])"
                :class="getDeliveryDayClass(deliveryDaysUnformatted[index])"
              >
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
          <!-- Errors -->
          <div class="col-12 p-0" v-if="deliveryInfoError">
            <div
              class="alert alert-danger alert-dismissible fade show"
              role="alert"
            >
              {{ deliveryInfoError }}
            </div>
          </div>
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
                <th scope="col" class="text-right">Unit Price</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in getCart.order_items" :key="item.id">
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
                <th scope="col" class="font-weight-normal text-right">
                  ${{ parseFloat(getCart.sub_total).toFixed(2) }}
                </th>
              </tr>
              <tr>
                <th scope="col">Delivery</th>
                <th scope="col"></th>
                <th scope="col"></th>
                <th scope="col" class="font-weight-normal text-right">
                  ${{ parseFloat(getCart.shipping_total).toFixed(2) }}
                </th>
              </tr>
              <tr>
                <th scope="col">Tax</th>
                <th scope="col"></th>
                <th scope="col"></th>
                <th scope="col" class="font-weight-normal text-right">
                  ${{ parseFloat(getCart.tax_total).toFixed(2) }}
                </th>
              </tr>
            </tfoot>
          </table>
          <p v-if="deliveryDate !== ''">
            Your meals will be delivered on {{ formatDay(deliveryDate) }}
          </p>
        </div>
        <!-- Payment -->
        <div class="w-full">
          <h4 class="font-secondary text-uppercase font-weight-normal">
            Pay ${{ parseFloat(getCart.cart_total).toFixed(2) }}
          </h4>
          <hr />
          <div class="row mx-1">
            <!-- Card Number -->
            <div class="form-group col-12 p-0">
              <label for="cc-number">Card Number</label>
              <input
                type="text"
                class="form-control"
                id="cc-number"
                placeholder="Enter card number"
                v-model="cardNumber"
                required
              />
            </div>
            <!-- Expiration -->
            <div class="form-group col-9 pr-1 p-0">
              <label for="expiration">Expiration</label>
              <input
                type="text"
                class="form-control"
                id="expiration"
                v-model="expirationDate"
                placeholder="MM/YY"
                required
              />
            </div>
            <!-- CVC Number -->
            <div class="form-group col-3 pl-1 p-0">
              <label for="cvc-number">CVC</label>
              <input
                type="text"
                class="form-control"
                v-model="cardCode"
                id="cvc-number"
                placeholder="CVC"
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
  <div class="d-flex justify-content-center mt-5" v-else>
    <div class="spinner-border" role="status">
      <span class="sr-only">Loading...</span>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import moment from "moment";
import API from "../../services/API";
import constants from "@/constants/index.js";
import axios from "axios";
export default {
  data() {
    return {
      deliveryDays: [],
      deliveryAddressError: "",
      deliveryDayError: "",
      deliveryInfoError: "",
      deliveryDaysUnformatted: [],
      affiliate: -1,
      deliveryDate: "",
      formattedDeliveryDate: "",
      address: "",
      unitNumber: "",
      city: "",
      zip: "",
      name: "",
      phone: "",
      email: "",
      expirationDate: "",
      cardNumber: "",
      cardCode: "",
      loading: true,
    };
  },
  computed: {
    ...mapGetters("cart", ["getCart"]),
    ...mapGetters("checkout", [
      "getDeliveryDays",
      "getCutoffDay",
      "getCutoffTime",
    ]),
  },
  methods: {
    ...mapActions("cart", ["setShowCart", "toggleDisableCart", "loadCart"]),
    ...mapActions("user", ["setIsAuthenticated"]),
    ...mapActions("alert", ["addAlert"]),
    ...mapActions("checkout", ["loadAffiliates", "loadCheckoutInformation"]),
    convertMonthYear() {
      return (
        "20" +
        this.expirationDate.substring(3, 5) +
        "-" +
        this.expirationDate.substring(0, 2)
      );
    },
    async createOrder() {
      this.deliveryAddressError = "";
      this.deliveryDayError = "";
      this.deliveryInfoError = "";
      this.deliveryInfoError;
      if (!this.address) {
        this.deliveryAddressError = "Please enter a valid address.";
        document.body.scrollTop = 0;
        return;
      }
      if (!this.city) {
        this.deliveryAddressError = "Please select a city.";
        document.body.scrollTop = 0;
        return;
      }
      if (!this.zip) {
        this.deliveryAddressError = "Please enter a valid zipcode.";
        document.body.scrollTop = 0;
        return;
      }
      if (!this.deliveryDate) {
        this.deliveryDayError = "Please select a delivery date.";
        document.body.scrollTop = 0;
        return;
      }
      if (!this.name || !this.phone || !this.email) {
        this.deliveryInfoError = "Please fill out all fields.";
        document.body.scrollTop = 0;
        return;
      }
      const payload = {
        affiliate: this.affiliate,
        deliveryDate: this.deliveryDate,
        address: this.address,
        unitNumber: this.unitNumber,
        city: this.city,
        zip: this.zip,
        name: this.name,
        phone: this.phone,
        email: this.email,
        cardNumber: this.cardNumber,
        expirationDate: this.convertMonthYear(this.expirationDate),
        cardCode: this.cardCode,
      };
      const { status, data } = await API.placeOrder(payload);
      console.log(status);
      if (data.status === "Success") {
        this.addAlert({ message: data.message, color: "alert-success" });
        this.$router.push("/");
      }
    },
    formatDay(unformattedDay) {
      // day is given in yyyy-mm-dd format
      const year = Number(unformattedDay.substring(0, 4));
      const month = Number(unformattedDay.substring(5, 7));
      const day = Number(unformattedDay.substring(8, 10));
      var date = new Date(year, month - 1, day);
      return moment(date).format("dddd, MMMM D");
    },
    selectDeliveryDate(deliveryDate) {
      this.deliveryDate = deliveryDate;
    },
    getDeliveryDayClass(deliveryDate) {
      if (this.deliveryDate === deliveryDate) {
        return "active";
      }
    },
  },
  async mounted() {
    // Get token from cookies
    if (this.$cookies.get("auth")) {
      const token = this.$cookies.get("auth").token;

      // Headers
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      // If token, add to headers config
      if (token) {
        config.headers["Authorization"] = `Token ${token}`;
      }

      try {
        const { status, data } = await axios.post(
          `${API.baseURL}/store/is-authenticated/`,
          null,
          config
        );
        if (status !== 200) {
          this.setIsAuthenticated(false);
        } else {
          this.setIsAuthenticated(data.isAuthenticated);
        }
      } catch (error) {
        this.setIsAuthenticated(false);
      }
    }
    await this.loadCart();
    if (constants.ORDER_MINIMUM > this.getCart.sub_total) {
      this.$router.push("/order");
    }
    // disable the cart while in checkout
    this.setShowCart(false);
    // load the checkout information
    await this.loadCheckoutInformation();
    // format the delivery days array
    this.deliveryDaysUnformatted = this.getDeliveryDays;
    this.getDeliveryDays.forEach((unformattedDay) => {
      this.deliveryDays.push(this.formatDay(unformattedDay));
    });
    this.loading = false;
  },
};
</script>

<style scoped>
</style>