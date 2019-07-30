<template>
  <div class="">
    <ul class="flex text-sm text-dark-1">
      <li
        class="w-5 h-5 flex items-center justify-center mx-1 rounded-sm"
        :class="[value <= 1 ? 'text-dark-2' : 'cursor-pointer']"
        @[prevEvent].prevent="previous"
      >
        <span class="icon iconfont icon-chevron-left"></span>
      </li>
      <li
        class="w-5 h-5 flex items-center justify-center mx-1 selection-none rounded-sm"
        :class="[
          value === page ? 'bg-cobalt text-white' : 'bg-white',
          isNaN(Number(page)) ? '' : 'cursor-pointer'
        ]"
        v-for="page in pages"
        @click="$emit('input', page)"
      >
        {{ page }}
      </li>
      <li
        class="w-5 h-5 flex items-center justify-center mx-1 rounded-sm"
        :class="[value >= length ? 'text-dark-2' : 'cursor-pointer']"
        @[nextEvent].prevent="next"
      >
        <span class="icon iconfont icon-chevron-right"></span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    totalLength: {
      type: Number,
      default: 0,
      required: true
    },
    currentPage: {
      type: Number,
      default: 1
    },
    pageSize: {
      type: Number,
      default: 10
    },
    totalVisible: {
      type: Number,
      default: 7
    },
    value: {
      type: Number,
      default: 0
    }
  },
  computed: {
    length() {
      return Math.ceil(this.totalLength / this.pageSize);
    },
    pages() {
      if (this.length <= this.totalVisible) {
        return this.range(1, this.length);
      }

      const even = this.totalVisible / 2 === 0 ? 1 : 0;
      const left = Math.floor(this.totalVisible / 2);
      const right = this.length - left + 1 + even;

      if (this.value > left && this.value < right) {
        const start = this.value - left + 2;
        const end = this.value + left - 2 - even;

        return [1, "...", ...this.range(start, end), "...", this.length];
      } else if (this.value === left) {
        const end = this.value + left - 1 - even;
        return [...this.range(1, end), "...", this.length];
      } else if (this.value === right) {
        const start = this.value - left + 1;
        return [1, "...", ...this.range(start, this.length)];
      } else {
        return [
          ...this.range(1, left),
          "...",
          ...this.range(right, this.length)
        ];
      }
    },
    prevEvent() {
      return this.value > 1 ? "click" : null;
    },
    nextEvent() {
      return this.value < this.length ? "click" : null;
    }
  },
  methods: {
    range(from, to) {
      let range = [];
      for (let i = from; i <= to; i++) {
        range.push(i);
      }
      return range;
    },
    previous() {
      this.$emit("input", this.value - 1);
      this.$emit("previous");
    },
    next() {
      this.$emit("input", this.value + 1);
      this.$emit("next");
    }
  }
};
</script>

<style lang="scss">
@import "../../styles/app.scss";
</style>
