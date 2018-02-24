<template>
  <div class="ball-rotate vue-loaders" :style="rootStyles">
    <div :style="middle">
      <div :style="innerLeft"></div>
      <div :style="innerRight"></div>
    </div>
  </div>
</template>

<script>
  const OFFSET = 10 / 15;

  export default {
    name: 'BallRotateLoader',
    props: {
      size: String,
      color: String
    },
    computed: {
      rootStyles() {
        const size = this.size ? String(this.size) : null;

        if (size) {
          return {
            width: size,
            height: size,
            padding: `calc(${size} + ${size} * ${OFFSET} + 2px)`,
          }
        }
      },
      middle() {
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
      innerLeft() {
        const size = this.size ? String(this.size) : null;
        const color = this.color ? String(this.color) : null;

        if (!color && !size) {
          return;
        }

        const styles = {};

        if (size) {
          styles.width = styles.height = size;
          styles.left = `calc((${size} + ${size} * ${OFFSET} + 2px) * -1)`;
        }

        if (color) {
          styles.backgroundColor = color;
        }

        return styles;
      },
      innerRight() {
        const size = this.size ? String(this.size) : null;
        const color = this.color ? String(this.color) : null;

        if (!color && !size) {
          return;
        }

        const styles = {};

        if (size) {
          styles.width = styles.height = size;
          styles.left = `calc(${size} + ${size} * ${OFFSET} + 2px)`;
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
