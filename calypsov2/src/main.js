import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import {
  BootstrapVue,
  IconsPlugin
} from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import {
  BContainer
} from 'bootstrap-vue'
Vue.component('b-container', BContainer)

import {
  FormPlugin
} from 'bootstrap-vue'
Vue.use(FormPlugin)

import {
  BForm
} from 'bootstrap-vue'
Vue.component('b-form', BForm)

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')