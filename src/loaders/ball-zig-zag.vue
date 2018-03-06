<template>
  <div class="ball-zig-zag vue-loaders" :style="rootStyle">
    <div :style="top"></div>
    <div :style="bottom"></div>
  </div>
</template>

<script>
  export default {
    name: 'BallZigZagLoader',
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
      top() {
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
      },
      bottom () {
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
  .vue-loaders.ball-zig-zag {
    transform: none;
    height: 15px;
    width: 15px;
    padding: 30px 15px;
  }

  .vue-loaders.ball-zig-zag > div {
    left: auto;
    top: auto;
    margin: 0;
  }
</style>
