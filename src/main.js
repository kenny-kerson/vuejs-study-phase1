import Vue from 'vue'
import App from './App.vue'
import eventBus from './EventBus'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import store from './store'

Vue.config.productionTip = false
Vue.prototype.eventBus = eventBus

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
