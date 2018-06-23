<template>
  <div id="app">
    <header>
       <p class="headerlogo">snacktime</p>

    </header>
    <div class="wrapper1">
      <div class="wrapper2">
         <img src="./assets/logo.png">
      </div>
      <div class="wrapper3">
              <img src="./assets/logo.png">

      </div>
<!--       <p>THIS IS MY CONTENT</p>
      <img src="./assets/logo.png"> -->
    </div>
    <footer>
                  <MessageBar></MessageBar>
             
 <!-- eslint-disable-next-line -->
<!--       <ul>

       <li :key="test" v-for="test in testMessages">{{test}}</li>
       </ul> -->
      <!-- <p>{{testValue}}</p> -->
    </footer>
  </div>

</template>

<script>
// const io = require('socket.io')()
// import * as io from 'socket.io'
import MessageBar from './components/MessageBar.vue'

export default {
  name: 'app',
  components: {
    MessageBar
  },
  data () {
    return {
      testMessages: ['Site loaded', 'lets try'],
      testValue: 0,
      pastSnacks: [],
      currentSnacks: []
    }
  },
  methods: {
    initListener () {
      // body...
      // var socket = this.io.connect('http://localhost:4000')
      this.testMessages.push('initListener is here')
      // socket.on('connection', (socket) => {
      //   this.testMessages.push('Connection on socket')
      // })
    }
  },
  mounted () {
    /* eslint-disable-next-line */
    this.testMessages.push('mounted')
    this.initListener()
  },
  sockets: {
    connect() {
      this.testMessages.push('socket connected')
      this.$socket.emit('set', 'is_it_ok', function (response) {
      console.log(response)
      })
    },
    needCoffee(value) {
      this.testValue = value
    },
    addSnack(data) {
      currentSnacks
    }
  }
}
</script>

<style>
 @import url('https://fonts.googleapis.com/css?family=Damion');

html, body, #app {
  height: 100%;
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
  display: flex;
  flex-direction: column;
}
.wrapper1 {
  display: flex;
  flex: 1 1 auto;
  background: #ddd;
  flex-direction: row;
  justify-content: center;

}
.wrapper2 {
  display: flex;
  flex: 0 1 auto;
  background: #d1d1d1;
  flex-direction: column;
}
.wrapper3 {
  display: flex;
  flex: 0 1 auto;
  background: #c3c3c3;
  flex-direction: column;
  flex-basis: 500px ;


}
img {
  align-self: start;
}
footer {
  background: #ccc;
  padding: 0px;
  display: flex;
  flex-direction: row;
  flex: 0 1 auto;
  max-height: 25vh;
  justify-content: center;
  /*overflow: hidden;*/
}
header {
  background: #B82601;/*#F53240;*//*#AF473C;*//*#E24E42;*/ /*#984B43;*/
  padding: 0px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  min-height: 15vh;
  max-height: 30vh;
}
.headerlogo {
  font-family: 'Damion', cursive;
  font-size: 10vh;
  color: #FFFFFF;
  margin: 0px;
}
</style>
