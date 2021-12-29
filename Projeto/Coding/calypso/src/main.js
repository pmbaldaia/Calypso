import '@babel/polyfill'
import 'mutationobserver-shim'
import 'mdb-vue-ui-kit/css/mdb.min.css'
import Vue from "vue";
import './plugins/bootstrap-vue'
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
