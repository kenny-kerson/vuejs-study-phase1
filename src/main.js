import Vue from 'vue'
import App from './App.vue'
import eventBus from './EventBus'

import store from './store'
import router from './router/router'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import locale from 'element-ui/lib/locale/lang/en'

Vue.use(ElementUI, { locale })

Vue.config.productionTip = false
Vue.prototype.eventBus = eventBus

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
