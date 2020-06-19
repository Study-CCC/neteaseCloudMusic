import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import '../src/assets/global.css'
import './plugins/element'
import  'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'

Vue.config.productionTip = false
axios.defaults.baseURL = 'http://localhost:3000' 
// axios.interceptors.response.use(function (response) {
//   return response;
// }, function (error) {
// // console.log(111)
//   return Promise.reject(error);
// })
Vue.prototype.$http = axios
Vue.filter('numFilter',(value)=>{
  if(value>100000){
    return parseInt()
  }
})
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
