<template>
  <div class="ball-triangle-path vue-loaders" :style="rootStyle">
    <div :style="styles"></div>
    <div :style="styles"></div>
    <div :style="styles"></div>
  </div>
</template>

<script>
  const BORDER_RATION = 1 / 10;

  export default {
    name: 'BallTrianglePathLoader',
    props: {
      size: String,
      color: String
    },
    computed: {
      rootStyle () {
        const size = this.size ? String(this.size) : null;

        if (size) {
          return {
            width: `calc(${size} + 50px)`,
            height: `calc(${size} + 50px)`
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
  .vue-loaders.ball-triangle-path {
    transform: none;
    width: 60px;
    height: 60px;
  }
</style>
