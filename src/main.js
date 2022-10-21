import Vue from 'vue'
import App from './App.vue'

import router from '@router/router'
import routerGuards from '@router/router-guards'
routerGuards(router)

// pinia
import { createPinia, PiniaVuePlugin } from 'pinia'
import { createPersistedState } from 'pinia-persistedstate-plugin'
Vue.use(PiniaVuePlugin)
const pinia = createPinia()
pinia.use(createPersistedState()) //开启缓存，存储在localstorage

// 全局css
import './style/common.css'

// moment
import moment from 'moment'
import momentZh from '@/utils/momentZh'
Vue.prototype.$moment = moment
Vue.use(momentZh)

import components from '@/utils/components.js'
Vue.use(components)

new Vue({
  router,
  pinia,
  render: h => h(App)
}).$mount('#app')
