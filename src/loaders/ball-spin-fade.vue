<template>
  <div class="ball-spin-fade-loader vue-loaders" :style="root">
    <div :style="bottom"></div>
    <div :style="bottomRight"></div>
    <div :style="right"></div>
    <div :style="topRight"></div>
    <div :style="top"></div>
    <div :style="topLeft"></div>
    <div :style="left"></div>
    <div :style="bottomLeft"></div>
  </div>
</template>

<script>
  const TO_CORNER_RATIO = 17.05 / 15;
  const TO_SIDE_RATIO = 25 / 15;

  export default {
    name: 'BallSpinFadeLoader',
    props: {
      size: String,
      color: String
    },
    computed: {
      root() {
        const size = this.size ? String(this.size) : null;

        if (size) {
          return {
            width: size,
            height: size,
            borderWidth: `calc(${size} * ${TO_SIDE_RATIO})`
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
          styles.top = `calc(${size} * ${TO_SIDE_RATIO} * -1)`;
        }

        if (color) {
          styles.backgroundColor = color;
        }

        return styles;
      },
      topRight() {
        const size = this.size ? String(this.size) : null;
        const color = this.color ? String(this.color) : null;

        if (!color && !size) {
          return;
        }

        const styles = {};

        if (size) {
          styles.width = styles.height = size;
          styles.top = `calc(${size} * ${TO_CORNER_RATIO} * -1)`;
          styles.left = `calc(${size} * ${TO_CORNER_RATIO})`;
        }

        if (color) {
          styles.backgroundColor = color;
        }

        return styles;
      },
      right() {
        const size = this.size ? String(this.size) : null;
        const color = this.color ? String(this.color) : null;

        if (!color && !size) {
          return;
        }

        const styles = {};

        if (size) {
          styles.width = styles.height = size;
          styles.left = `calc(${size} * ${TO_SIDE_RATIO})`;
        }

        if (color) {
          styles.backgroundColor = color;
        }

        return styles;
      },
      bottomRight() {
        const size = this.size ? String(this.size) : null;
        const color = this.color ? String(this.color) : null;

        if (!color && !size) {
          return;
        }

        const styles = {};

        if (size) {
          styles.width = styles.height = size;
          styles.top = `calc(${size} * ${TO_CORNER_RATIO})`;
          styles.left = `calc(${size} * ${TO_CORNER_RATIO})`;
        }

        if (color) {
          styles.backgroundColor = color;
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
          styles.width = styles.height = size;
          styles.top = `calc(${size} * ${TO_SIDE_RATIO})`;
        }

        if (color) {
          styles.backgroundColor = color;
        }

        return styles;
      },
      bottomLeft() {
        const size = this.size ? String(this.size) : null;
        const color = this.color ? String(this.color) : null;

        if (!color && !size) {
          return;
        }

        const styles = {};

        if (size) {
          styles.width = styles.height = size;
          styles.top = `calc(${size} * ${TO_CORNER_RATIO})`;
          styles.left = `calc(${size} * ${TO_CORNER_RATIO} * -1)`;
        }

        if (color) {
          styles.backgroundColor = color;
        }

        return styles;
      },
      left() {
        const size = this.size ? String(this.size) : null;
        const color = this.color ? String(this.color) : null;

        if (!color && !size) {
          return;
        }

        const styles = {};

        if (size) {
          styles.width = styles.height = size;
          styles.left = `calc(${size} * ${TO_SIDE_RATIO} * -1)`;
        }

        if (color) {
          styles.backgroundColor = color;
        }

        return styles;
      },
      topLeft() {
        const size = this.size ? String(this.size) : null;
        const color = this.color ? String(this.color) : null;

        if (!color && !size) {
          return;
        }

        const styles = {};

        if (size) {
          styles.width = styles.height = size;
          styles.top = `calc(${size} * ${TO_CORNER_RATIO} * -1)`;
          styles.left = `calc(${size} * ${TO_CORNER_RATIO} * -1)`;
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
  .vue-loaders.ball-spin-fade-loader {
    top: auto;
    left: auto;
    border: 25px solid transparent;
    width: 15px;
    height: 15px;
  }

  .vue-loaders.ball-spin-fade-loader > div {
    margin: 0;
  }
</style>
