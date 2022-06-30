import Vue from 'vue'
import App from './03_v-for使用.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
