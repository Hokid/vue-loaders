<template>
  <div class="triangle-skew-spin vue-loaders">
    <div :style="styles"></div>
  </div>
</template>

<script>
  export default {
    name: 'TriangleSkewSpinLoader',
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
          styles.borderLeftWidth =
            styles.borderRightWidth =
              styles.borderBottomWidth = `calc(${size} / 2)`
        }

        if (color) {
          styles.borderBottomColor = color;
        }

        return styles;
      }
    }
  }
</script>

<style></style>
