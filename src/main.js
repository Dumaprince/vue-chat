// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import io from 'socket.io-client'
import VueSocketIO from 'vue-socket.io'

let socket = io('http://localhost:3000') // 소켓 생성

Vue.config.productionTip = false

Vue.prototype.$socket = socket //전역 등록

/* eslint-disable no-new */
Vue.use(new VueSocketIO({
  debug:true,
  connection:socket
}))

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
