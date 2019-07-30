<template>
  <table class="text-dark-1 border-collapse w-full">
    <thead
      class="text-dark-2"
      :class="[fixedHeader ? 'sticky top-0 z-10' : '']"
    >
      <tr :class="[fixedHeader ? 'sticky top-0 z-10 shadow-table-header' : '']">
        <th
          v-for="h in headers"
          :key="h.value"
          class="font-normal py-1 px-2"
          :class="[
            h.align ? `text-${h.align}` : '',
            fixedHeader ? 'sticky top-0 z-10 bg-white' : ''
          ]"
        >
          {{ h.text }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in items">
        <td
          v-for="h in headers"
          class="py-1 px-2"
          :class="[h.align ? `text-${h.align}` : '']"
        >
          {{ item[h.value] }}
        </td>
      </tr>
    </tbody>
  </table>
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
    }
  }
};
</script>

<style lang="scss">
@import "../../styles/app.scss";
</style>
