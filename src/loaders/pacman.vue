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
  const LEFT_OFFSET_RATIO = 30 / 50;
  const CIRCLE_SIZE_RATIO = 10 / 50;
  const CIRCLE_LEFT_OFFSET_RATIO = 70 / 50;
  const CIRCLE_TOP_OFFSET_RATIO = 25 / 50;

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
            borderLeftWidth: `calc(${size} * ${LEFT_OFFSET_RATIO})`,
            borderRightWidth: `calc(${size} * (${CIRCLE_LEFT_OFFSET_RATIO} + ${CIRCLE_SIZE_RATIO}) - ${size})`
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
            styles.borderRadius = `calc(${size} / 2)`
          styles.left = `calc(${size} * ${LEFT_OFFSET_RATIO} * -1)`
          styles.marginTop = `calc(${size} * -1)`
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
          styles.left = `calc(${size} * ${LEFT_OFFSET_RATIO} * -1)`;
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

        if (size) {
          styles.width =
            styles.height = `calc(${size} * ${CIRCLE_SIZE_RATIO})`;
          styles.top = `calc(${size} * ${CIRCLE_TOP_OFFSET_RATIO})`;
          styles.left = `calc(${size} * ${CIRCLE_LEFT_OFFSET_RATIO})`;
          styles.transform = `translateY(calc(${size} * ${CIRCLE_SIZE_RATIO} * -0.5))`;
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
