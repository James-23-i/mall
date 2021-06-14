import Toast from './Toast'

const obj = {}

obj.install = function(Vue) {
  // 1、创建组件构造器
  const toastContrustor = Vue.extend(Toast)

  // 2、创建组件对象
  const toast = new toastContrustor()

  // 3、挂载
  toast.$mount(document.createElement('div'))

  // 4、将 toast组件中的 template插入到 body中
  document.body.appendChild(toast.$el)

  // 5、添加到原型 prototype中
  Vue.prototype.$toast = toast
}
export default obj