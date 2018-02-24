<template>
  <div class="ball-clip-rotate vue-loaders">
    <div :style="styles"></div>
  </div>
</template>

<script>
  const BORDER_RATION = 2 / 15;

  export default {
    name: 'BallClipRotateLoader',
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
          styles.borderWidth = `calc(${size} * ${BORDER_RATION})`;
        }

        if (color) {
          styles.borderTopColor =
            styles.borderRightColor =
              styles.borderLeftColor = color;
        }

        return styles;
      }
    }
  }
</script>

<style></style>
