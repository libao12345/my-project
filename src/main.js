import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import fastClick from 'fastclick'
import './assets/styles/reset.css'
import './assets/styles/border.css'
import './assets/styles/iconfont.css'

Vue.config.productionTip = false
fastClick.attach(document.body)  //解决移动端点击事件延迟300毫秒的问题

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
