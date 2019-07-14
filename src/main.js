import Vue from 'vue'
import App from './App.vue'
import eventBus from './EventBus'

import store from './store'
import router from './router/router'

Vue.config.productionTip = false
Vue.prototype.eventBus = eventBus

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
