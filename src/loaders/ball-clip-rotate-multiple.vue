<template>
  <div class="ball-clip-rotate-multiple vue-loaders" :style="rootStyles">
    <div :style="outerBallStyles"></div>
    <div :style="innerBallStyles"></div>
  </div>
</template>

<script>
  const BASE_SIZE_PX = '35px';
  const BORDER_RATION = 2 / 35;
  const INNER_BALL_SIZE_RATION = 15 / 30;

  export default {
    name: 'BallClipRotateMultipleLoader',
    props: {
      size: String,
      color: String
    },
    computed: {
      rootStyles () {
        const size = this.size ? String(this.size) : BASE_SIZE_PX;
        const styles = {
          width: size,
          height: size,
        };

        return styles;
      },
      outerBallStyles () {
        const size = this.size ? String(this.size) : BASE_SIZE_PX;
        const color = this.color ? String(this.color) : null;

        const styles = {
          width: size,
          height: size,
          borderWidth: `calc(${size} * ${BORDER_RATION})`,
          top: `calc(${size} * -1 * ${BORDER_RATION})`,
          left: `calc(${size} * -1 * ${BORDER_RATION})`
        };

        if (color) {
          styles.borderLeftColor = color;
          styles.borderRightColor = color;
        }

        return styles;
      },
      innerBallStyles () {
        const size = this.size ? String(this.size) : BASE_SIZE_PX;
        const color = this.color ? String(this.color) : null;

        const styles = {
          width: `calc(${size} * ${INNER_BALL_SIZE_RATION})`,
          height: `calc(${size} * ${INNER_BALL_SIZE_RATION})`,
          borderWidth: `calc(${size} * ${BORDER_RATION})`,
          top: `calc((${size} - (${size} * ${INNER_BALL_SIZE_RATION})) / 2 - ${size} * ${BORDER_RATION}`,
          left: `calc((${size} - (${size} * ${INNER_BALL_SIZE_RATION})) / 2 - ${size} * ${BORDER_RATION}`
        };

        if (color) {
          styles.borderTopColor = color;
          styles.borderBottomColor = color;
        }

        return styles;
      }
    }
  }
</script>

<style></style>
