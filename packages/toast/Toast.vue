<template>
  <div v-show="visible" class="toast">
    <!-- <div class="toast__mask"></div> -->
    <div class="toast__container">
      <span class="">TOAST</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'toast',
  data () {
    return {
      visible: false
    }
  },
  methods: {
    fire() {
      if (this.$_timer) {
        clearTimeout(this.$_timer)
      }
      if (this.visible) {
        this.$_timer = setTimeout(() => {
          this.hide()
        }, 3000)
      }
    },

    show() {
      this.visible = true
      this.fire()
    },

    hide() {
      this.visible = false
    },
  }
}
</script>

<style scoped>
.toast {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.toast__mask {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, .7);
}

.toast__container {
  position: absolute;
  margin: auto;
  line-height: 28px;
  padding: 0 15px;
  background-color: rgba(0, 0, 0, .8);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%)

}
</style>
