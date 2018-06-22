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
      <img src="./assets/logo.png">
             <ul>
 <!-- eslint-disable-next-line -->

       <li :key="test" v-for="test in testMessages">{{test}}</li>
       </ul>
      <p></p>
    </footer>
  </div>

</template>

<script>
// const io = require('socket.io')()
// import * as io from 'socket.io'

export default {
  name: 'app',
  data () {
    return {
      testMessages: ['Site loaded', 'lets try']
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
  flex: 1 0 auto;
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
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
header {
  background: #ccc;
  padding: 0px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-end;
  min-height: 15%;
}
.headerlogo {
  font-family: 'Damion', cursive;
  font-size: 100px;
}
</style>
