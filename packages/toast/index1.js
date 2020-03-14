import Vue from 'vue'
import ToastBase from './Toast.vue'


class Toast {
  constructor(opts = {}) {
    const x = Vue.extend(ToastBase)
    this.vm = new x({
      propsData: opts
    }).$mount()

    document.body.appendChild(this.vm.$el)
  }
}

const toastIns = new Toast()

toastIns.vm.install = function (Vue) {
  Vue.component(toast.name, toast)
}

const toast = () => {
  toastIns.vm.show()
}

export default toast