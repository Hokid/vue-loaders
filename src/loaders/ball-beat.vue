<template>
  <div class="ball-beat vue-loaders">
    <div :style="styles"></div>
    <div :style="styles"></div>
    <div :style="styles"></div>
  </div>
</template>

<script>
  export default {
    name: 'BallBeatLoader',
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
          styles.backgroundColor = color;
        }

        return styles;
      }
    }
  }
</script>

<style></style>
