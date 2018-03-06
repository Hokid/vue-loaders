<template>
  <div class="cube-transition vue-loaders" :style="rootStyle">
    <div :style="styles"></div>
    <div :style="styles"></div>
  </div>
</template>

<script>
  export default {
    name: 'CubeTransitionLoader',
    props: {
      size: String,
      color: String
    },
    computed: {
      rootStyle() {
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
        }

        if (color) {
          styles.backgroundColor = color;
        }

        return styles;
      }
    }
  }
</script>

<style>
  .vue-loaders.cube-transition {
    transform: none;
    width: 60px;
    height: 60px;
  }

  .vue-loaders.cube-transition > div {
    left: auto;
    top: auto;
  }
</style>
