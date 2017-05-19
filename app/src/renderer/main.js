import Vue from 'vue'
import Electron from 'vue-electron'

import App from './App.vue'
import router from './router'
import store from './store'
import { sync } from 'vuex-router-sync'
import './style/app.scss'

sync(store, router)
Vue.use(Electron)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  store,
  ...App
}).$mount('#app')
