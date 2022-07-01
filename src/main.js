import Vue from 'vue'
import App from './12_学生信息管理.vue'
import '../node_modules/bootstrap/dist/css/bootstrap.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
