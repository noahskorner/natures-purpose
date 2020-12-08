
  <template>
  <section style="z-index: 100;">
    <div class="modal d-flex justify-content-between">
      <div
        class="menu border-right d-flex flex-column justify-content-start position-relative"
      >
        <div class="w-100">
          <div class="d-flex justify-content-end bg-cream header">
            <button class="btn" @click="$emit('toggle-sidebar')">
              <i class="fas fa-times fa-2x"></i>
            </button>
          </div>
          <div class="hr"></div>
          <div class="d-flex flex-column justify-content-start align-items-left">
            <button
              class="btn link router-link font-secondary font-weight-normal text-left"
              @click="closeSidebarAndRoute('/order')"
              >Order</button
            >
            <button
              v-if="!isAuthenticated"
              class="btn link router-link font-secondary font-weight-normal text-left"
              @click="closeSidebarAndRoute('/login')"
              >Login</button
            >
            <button
              v-if="isAuthenticated"
              class="btn link router-link font-secondary font-weight-normal text-left"
              @click="closeSidebarAndRoute('/account')"
              >Account</button
            >
          </div>
        </div>
      </div>
      <div
        class="w-100 d-none d-md-block"
        @click="$emit('toggle-sidebar')"
      ></div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex"
export default {
  emits: ["toggle-sidebar"],
  computed: {
    ...mapGetters("user", ["isAuthenticated"]),
  },
  methods: {
    closeSidebarAndRoute(route){
      this.$emit('toggle-sidebar')
      this.$router.push(route)
    }
  }
};
</script>

<style scoped>
.modal {
  /** background-color: var(--bg-cream); **/
  display: block;
  min-height: 100vh;
  width: 100vw;
  position: fixed;
  backdrop-filter: blur(4px);
}

.menu {
  background-color: white;
  min-height: 100vh;
  width: 50%;
}

.header {
  height: 5rem;
}

.link {
  color: var(--dark-grey) !important;
  font-size: 2rem;
  margin: 0 1rem;
}

.link:hover {
  color: var(--success) !important;
  cursor: pointer;
}

@media (min-width: 768px) {
  .menu {
    max-width: 480px;
  }
}
</style>