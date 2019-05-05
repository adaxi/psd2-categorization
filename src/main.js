// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueShortkey from 'vue-shortkey'
import router from './router'
import store from './store'
import './ui'

Vue.use(VueShortkey)

Vue.config.productionTip = false

// Vue.component(Button.name, Button)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
