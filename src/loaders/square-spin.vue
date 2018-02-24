<template>
  <div class="square-spin vue-loaders">
    <div :style="styles"></div>
  </div>
</template>

<script>
  export default {
    name: 'SquareSpinLoader',
    props: {
      size: String,
      color: String
    },
    computed: {
      styles() {
        const size = this.size ? String(this.size) : null;
        const color = this.color ? String(this.color) : null;

        if (!color && !size) {
          return;
        }

        const styles = {};

        if (size) {
          styles.width = styles.height = size;
        }

        if (color) {
          styles.background = color;
        }

        return styles;
      }
    }
  }
</script>

<style></style>
