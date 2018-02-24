<template>
  <div class="semi-circle-spin vue-loaders" :style="root">
    <div :style="styles"></div>
  </div>
</template>

<script>
  export default {
    name: 'SemiCircleSpinLoader',
    props: {
      size: String,
      color: String
    },
    computed: {
      root() {
        const size = this.size ? String(this.size) : null;

        if (size) {
          return {
            width: size,
            height: size
          };
        }
      },
      styles() {
        const color = this.color ? String(this.color) : null;

        if (color) {
          return {
            backgroundImage: `linear-gradient(transparent 0,transparent 70%,${color} 30%,${color} 100%)`
          }
        }
      }
    }
  }
</script>

<style></style>
