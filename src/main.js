// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import dBind from './components/dataBinding.vue'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App, dBind },
  template: '<App/>'
})
new Vue({
  el: '#databinding',
  router,
  components: { dBind },
  template: '<dBind/>'
})
