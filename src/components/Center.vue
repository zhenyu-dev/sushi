<template>
  <div class="center">
    <slot />
  </div>
</template>
<style lang="scss" scoped>
.center {
  flex-grow: 1;
  justify-content: center;
  display: flex;
}
</style>
