<template>
  <div class="pacman vue-loaders" :style="root">
    <div :style="bottom"></div>
    <div :style="top"></div>
    <div :style="circle"></div>
    <div :style="circle"></div>
    <div :style="circle"></div>
  </div>
</template>

<script>
  const CIRCLE_SIZE_RATIO = 10 / 50;

  export default {
    name: 'PacmanLoader',
    props: {
      size: String,
      color: String
    },
    computed: {
      root() {
        const size = this.size ? String(this.size) : null;

        if (size) {
          return {
            borderRightWidth: `calc(70px + ${CIRCLE_SIZE_RATIO} * ${size} - ${size})`
          };
        }
      },
      top () {
        const size = this.size ? String(this.size) : null;
        const color = this.color ? String(this.color) : null;

        if (!color && !size) {
          return;
        }

        const styles = {};

        if (size) {
          styles.borderWidth =
            styles.borderRadius = `calc(${size} / 2)`;
          styles.marginTop = `calc(${size} * -1)`;
        }

        if (color) {
          styles.borderTopColor =
            styles.borderLeftColor =
              styles.borderBottomColor = color;
        }

        return styles;
      },
      bottom() {
        const size = this.size ? String(this.size) : null;
        const color = this.color ? String(this.color) : null;

        if (!color && !size) {
          return;
        }

        const styles = {};

        if (size) {
          styles.borderWidth =
            styles.borderRadius = `calc(${size} / 2)`;
        }

        if (color) {
          styles.borderTopColor =
            styles.borderLeftColor =
              styles.borderBottomColor = color;
        }

        return styles;
      },
      circle() {
        const size = this.size ? String(this.size) : null;
        const color = this.color ? String(this.color) : null;

        if (!color && !size) {
          return;
        }

        const styles = {};
        const circleSize = `(${size} * ${CIRCLE_SIZE_RATIO})`;

        if (size) {
          styles.width =
            styles.height = `calc(${circleSize})`;
          styles.top = `calc(${size} * 0.5 + ${circleSize} / -2 + 6.25px)`;
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
  .vue-loaders.pacman {
    border-left: 30px solid transparent;
    border-right: 30px solid transparent;
  }

  .vue-loaders.pacman > div:nth-child(1n + 3) {
    margin: 0;
  }
</style>
