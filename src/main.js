import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import '../src/assets/global.less'
import './plugins/element'
import  'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import store from './store'
import {createTimeFilter,numFilter,timeFilter}  from './utils/filter'

axios.defaults.baseURL = "http://localhost:3000"
Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.filter('numFilter',numFilter)
Vue.filter('timeFilter',timeFilter)
Vue.filter('creatTimeFilter',createTimeFilter)
Vue.filter('lyricFilter',value=>value.split(']')[1])
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
