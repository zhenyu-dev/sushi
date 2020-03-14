<template>
  <div id="app">
    <button @click="showToast">show toast</button>
  </div>
</template>

<script>

import Toast from '../packages/toast'

export default {
  name: "app",
  methods: {
    showToast () {
      Toast()
    }
  }
};
</script>