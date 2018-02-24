<template>
  <div class="line-scale vue-loaders">
    <div :style="styles"></div>
    <div :style="styles"></div>
    <div :style="styles"></div>
    <div :style="styles"></div>
    <div :style="styles"></div>
  </div>
</template>

<script>
  const WIDTH_RATIO = 4 / 35;
  const BORDER_RATIO = 2 / 4;

  export default {
    name: 'LineScaleLoader',
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
          styles.width = `calc(${size} * ${WIDTH_RATIO})`;
          styles.height = size;
          styles.borderRadius = `calc(${size} * ${BORDER_RATIO})`;
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
