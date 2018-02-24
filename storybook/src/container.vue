<template>
  <div class="container">
    <div class="loader">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Container'
  }
</script>

<style scoped>
  .container {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #ed5565;
  }
</style>
