
  <template>
  <section>
    <div class="modal d-flex justify-content-between">
      <div
        class="menu border-right d-flex flex-column justify-content-start position-relative"
      >
        <div class="w-100">
          <div class="d-flex justify-content-between bg-cream">
            <h3
              class="m-2 ml-4 font-secondary text-uppercase font-weight-normal"
            >
              Menu
            </h3>
            <button class="btn" @click="$emit('toggle-sidebar')">
              <i class="fas fa-times fa-2x"></i>
            </button>
          </div>
          <div class="hr"></div>
        </div>
      </div>
      <div class="w-100 d-none d-md-block" @click="$emit('toggle-sidebar')"></div>
    </div>
  </section>
</template>

<script>
export default {
    emits: ['toggle-sidebar']
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
  width: 100%;
}

@media (min-width: 768px) {
  .menu {
    max-width: 480px;
  }
}
</style>