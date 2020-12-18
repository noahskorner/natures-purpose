<template>
  <div class="w-100 alert-wrapper">
    <div class="mx-2">
      <div
        v-for="(alert, index) in getAlerts"
        :key="index"
        class="alert alert-dismissible fade show max-width-960 mx-auto"
        role="alert"
        :class="alert.color"
      >
        {{ alert.message }}
        <button
          type="button"
          class="close"
          data-dismiss="alert"
          aria-label="Close"
          @click="removeAlert(index)"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters("alert", ["getAlerts"]),
  },
  methods: {
    ...mapActions("alert", ["removeAlert"]),
  },
};
</script>

<style scoped>
.alert-wrapper {
  position: absolute;
  top: 8rem;
  z-index: 10;
}
</style>