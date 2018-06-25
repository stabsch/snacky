// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
/* eslint-disable-next-line */
import io from 'socket.io-client'
import VueSocketIO from 'vue-socket.io';
var port = process.env.PORT || 4000
var IP = process.env.IP || 'http://localhost'
//
// Change this to IP/Domain and port!!
var connectTO = IP +':'+port.toString()
export const socket = io('http://localhost:4000')
/* eslint-disable-next-line */


Vue.use(VueSocketIO, socket)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // data () {
  //   return {
  //    // InputOutput: {socket}
  //   }
  // },
  components: { App },
  template: '<App/>'
})
