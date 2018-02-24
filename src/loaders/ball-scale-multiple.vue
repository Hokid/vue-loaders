<template>
  <div class="ball-scale-multiple vue-loaders" :style="rootStyle">
    <div :style="styles"></div>
    <div :style="styles"></div>
    <div :style="styles"></div>
  </div>
</template>

<script>
  export default {
    name: 'BallScaleMultipleLoader',
    props: {
      size: String,
      color: String
    },
    computed: {
      rootStyle() {
        const size = this.size ? String(this.size) : null;

        if (size) {
          return {
            width: size,
            height: size
          };
        }
      },
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
          styles.backgroundColor = color;
        }

        return styles;
      }
    }
  }
</script>

<style></style>
