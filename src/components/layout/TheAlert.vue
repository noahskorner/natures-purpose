<template>
  <div class="alert-wrapper">
      <div
        v-for="alert in getAlerts"
        :key="alert"
        class="alert alert-dismissible fade show mx-auto w-100"
        role="alert"
        :class="alert.color"
      >
        {{ alert.message }}
        <button
          type="button"
          class="close"
          data-dismiss="alert"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters("alert", ["getAlerts"]),
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.alert-wrapper {
  position: absolute;
  right: 5px;
  max-width:  480px;
  width: 100%;
  bottom: 0;
  z-index: 9999;
}
</style>