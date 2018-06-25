// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
/* eslint-disable-next-line */
import io from 'socket.io-client'
import VueSocketIO from 'vue-socket.io';

// Change this to IP/Domain and port!!
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
