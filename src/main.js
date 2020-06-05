import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import '../src/assets/global.css'
import './plugins/element'
import  'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'

Vue.config.productionTip = false
Vue.prototype.$http = axios
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
