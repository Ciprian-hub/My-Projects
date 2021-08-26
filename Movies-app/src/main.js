import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import baseNavigation from './components/BaseNavigation'

Vue.config.productionTip = false
Vue.component('BaseNavigation', baseNavigation)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
