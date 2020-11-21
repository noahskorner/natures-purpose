<template>
  <div class="product-grid mx-auto text-center px-sm-4 px-0">
    <slot name="header"/>
    <slot name="filters" />
    <div class="row">
      <slot name="products" />
    </div>
  </div>
</template>

<style scoped>
.product-grid {
  max-width: 1440px;
}
</style>
