import '@/init'
import Vue from 'vue'

import store from '@/store'
import router from '@/router'
import EurekaApp from './App.vue'

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(EurekaApp)
}).$mount('#app')
