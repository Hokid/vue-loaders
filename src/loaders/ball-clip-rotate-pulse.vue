<template>
  <div class="ball-clip-rotate-pulse vue-loaders" :style="rootStyles">
    <div :style="innerBallStyles"></div>
    <div :style="outerBallStyles"></div>
  </div>
</template>

<script>
  const BASE_SIZE_PX = '30px';
  const BORDER_RATION = 2 / 30;
  const INNER_BALL_SIZE_RATION = 16 / 30;
  const INNER_BALL_OFFSET_RATION = 7 / 30;

  export default {
    name: 'BallClipRotatePulseLoader',
    props: {
      size: String,
      color: String
    },
    computed: {
      rootStyles() {
        const size = this.size ? String(this.size) : BASE_SIZE_PX;
        const styles = {
          width: `calc(${size} / 2)`,
          marginLeft: `calc(${size} / 2)`,
          height: size,
        };

        return styles;
      },
      outerBallStyles() {
        const size = this.size ? String(this.size) : null;
        const color = this.color ? String(this.color) : null;

        if (!color && !size) {
          return;
        }

        const styles = {};

        if (size) {
          styles.width = styles.height = size;
          styles.top = `calc(${size} * -1 * ${BORDER_RATION})`;
          styles.borderWidth = `calc(${size} * ${BORDER_RATION})`;
          styles.left = `calc(${size} * -1 * ${INNER_BALL_SIZE_RATION})`;
        }

        if (color) {
          styles.borderTopColor = color;
          styles.borderBottomColor = color;
        }

        return styles;
      },
      innerBallStyles() {
        const size = this.size ? String(this.size) : null;
        const color = this.color ? String(this.color) : null;

        if (!color && !size) {
          return;
        }

        const styles = {};

        if (size) {
          styles.width = styles.height = `calc(${size} * ${INNER_BALL_SIZE_RATION})`;
          styles.top = `calc(${size} * ${INNER_BALL_OFFSET_RATION})`;
          styles.left = `calc(${size} * -1 * ${INNER_BALL_OFFSET_RATION})`;
        }

        if (color) {
          styles.background = color;
        }

        return styles;
      }
    }
  }
</script>

<style></style>
