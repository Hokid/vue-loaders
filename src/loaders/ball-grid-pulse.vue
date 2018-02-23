<template>
  <div class="ball-grid-pulse" :style="rootStyles">
    <div :style="styles"></div>
    <div :style="styles"></div>
    <div :style="styles"></div>
    <div :style="styles"></div>
    <div :style="styles"></div>
    <div :style="styles"></div>
    <div :style="styles"></div>
    <div :style="styles"></div>
    <div :style="styles"></div>
  </div>
</template>

<script>
  export default {
    name: 'BallGridPulseLoader',
    props: {
      size: String,
      color: String,
      columns: [Number, String]
    },
    computed: {
      rootStyles() {
        const columns = parseInt(this.columns);
        if (columns > 0) {
          return {
            width: `calc(${this.columns} * (${this.size || '15px'} + 4px))`
          }
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

<style></style>
