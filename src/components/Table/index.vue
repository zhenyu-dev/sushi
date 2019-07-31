<template>
  <div class="w-auto">
    <div class>
      <table class="text-dark-1 border-collapse">
        <colgroup>
          <col v-for="h in headers" :key="h.value" :style="{ width: h.width }" />
        </colgroup>
        <thead class="text-dark-2">
          <tr>
            <th
              v-for="h in headers"
              :key="h.value"
              class="font-normal py-1 px-2"
              :class="[
              h.align ? `text-${h.align}` : '',
              fixedHeader ? 'sticky top-0 z-10 bg-white' : ''
            ]"
            >{{ h.text }}</th>
          </tr>
        </thead>
      </table>
    </div>
    <div
      class="inline-block nice-scrollbar"
      :class="{ 'overflow-scroll': fixedHeader }"
      :style="{ maxHeight: fixedHeader ? scrollY : 'auto' }"
    >
      <table class="text-dark-1 border-collapse">
        <colgroup>
          <col v-for="h in headers" :key="h.value" :style="{ width: h.width }" />
        </colgroup>
        <tbody>
          <tr v-for="item in items">
            <td
              v-for="h in headers"
              class="py-1 px-2"
              :class="[h.align ? `text-${h.align}` : '']"
            >{{ item[h.value] }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "ss-table",
  props: {
    headers: {
      type: Array,
      required: true
    },
    items: {
      type: Array,
      default: () => []
    },
    fixedHeader: {
      type: Boolean,
      default: false
    },
    scrollY: {
      type: String,
      default: "300px"
    }
  }
};
</script>

<style lang="scss">
@import "../../styles/app.scss";
</style>
