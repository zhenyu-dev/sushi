<template>
  <div id="app" class="p-20">
    <Pagination :total-length="100" v-model="current" />
  </div>
</template>

<script>
import Pagination from "@/components/Pagination/index";
export default {
  name: "app",
  components: {
    Pagination
  },
  data() {
    return {
      current: 7
    };
  }
};
</script>