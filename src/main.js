import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import toast from 'components/common/toast/index'

import FastClick from 'fastclick'
import Vuelazyload from 'vue-lazyload'

import axios from 'axios'

Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()
Vue.use(toast)
Vue.use(Vuelazyload)
FastClick.attach(document.body)
Vue.prototype.axios = axios
Vue.prototype.baseUrl = 'https://www.fastmock.site/mock/42a5627256e80a244d0053fac5e4dca2/api'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
