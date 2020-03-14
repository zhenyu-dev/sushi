import Vue from 'vue'
import Toast from './Toast.vue'

const ToastC = (opts = {}) => {
  let vm = ToastC._instance

  if (!vm) {
    const ToastConstructor = Vue.extend(Toast)
    vm = ToastC._instance = new ToastConstructor({
      propsData: opts
    }).$mount()
  }

  if (!vm.$el.parentNode) {
    document.body.appendChild(vm.$el)
  }

  vm.show()

  return vm
}

ToastC._instance = null

console.log('OUTPUT: ToastC -> ToastC._instance', ToastC._instance)


ToastC.install = function (Vue) {
  Vue.component(ToastC.name, ToastC)
}

export default ToastC