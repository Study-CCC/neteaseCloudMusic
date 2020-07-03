import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import '../src/assets/global.less'
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
    return parseInt(value)
  }
})
Vue.filter('timeFilter',(value)=>{
  let time = ''
  if(value>1000){
    var minutes = parseInt((value % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = (value % (1000 * 60)) / 1000;
  }
  else return '00:00'
  // console.log(value)
  time = '0'+minutes+":"+seconds
  return time
})
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
