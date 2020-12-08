<template>
<div class="w-100 alert-wrapper d-none">
          <div class="alert alert-danger alert-dismissible fade show max-width-720 mx-auto" role="alert">
  <strong>Holy guacamole!</strong> You should check in on some of those fields below.
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>
</div>

</template>

<script>
export default {

}
</script>

<style scoped>
    .alert-wrapper{
        position: absolute;
        top: 6rem;
        z-index: 10;
    }
</style>