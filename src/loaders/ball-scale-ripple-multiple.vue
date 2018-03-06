<template>
  <div class="ball-scale-ripple-multiple vue-loaders" :style="rootStyle">
    <div :style="styles"></div>
    <div :style="styles"></div>
    <div :style="styles"></div>
  </div>
</template>

<script>
  const BORDER_RATION = 2 / 50;

  export default {
    name: 'BallScaleRippleMultipleLoader',
    props: {
      size: String,
      color: String
    },
    computed: {
      rootStyle() {
        const size = this.size ? String(this.size) : null;

        if (size) {
          return {
            width: `calc(${size} + ${size} * ${BORDER_RATION})`,
            height: `calc(${size} + ${size} * ${BORDER_RATION})`,
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
          styles.borderWidth = `calc(${size} * ${BORDER_RATION})`;
        }

        if (color) {
          styles.borderColor = color;
        }

        return styles;
      }
    }
  }
</script>

<style>
  .vue-loaders.ball-scale-ripple-multiple {
    transform: none;
    width: 54px;
    height: 54px;
  }

  .vue-loaders.ball-scale-ripple-multiple > div {
    top: auto;
    left: auto;
  }
</style>
