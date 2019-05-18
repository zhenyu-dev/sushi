<template>
  <div class="col" :class="colClass">
    <slot />
  </div>
</template>

<script>
import { is } from "ramda";

export default {
  props: {
    span: Number
  },
  computed: {
    colClass() {
      return {
        [`col-span-${this.span}`]: is(Number, this.span)
      };
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/scss/grid.scss";
</style>
