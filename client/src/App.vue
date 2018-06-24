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
              <p>{{userID}}</p>
       <!-- <p>{{listSnacks}}</p> -->
          <SnackMessage v-for="item in listSnacks" :snack="item" :key="item.id"></SnackMessage>
      </div>

    </div>
    <footer>
                  <MessageBar @readSnack="createSnack($event)" :userID="userID" :localuserID="localuserID"></MessageBar>
             
 <!-- eslint-disable-next-line -->
      <ul>

       <li :key="test" v-for="test in testMessages">{{test}}</li>
       </ul>

      <!-- <p>{{testValue}}</p> -->
    </footer>
  </div>

</template>

<script>
// const io = require('socket.io')()
// import * as io from 'socket.io'
import MessageBar from './components/MessageBar.vue'
import SnackMessage from './components/SnackMessage.vue'
import * as Snack from './snack.js'

export default {
  name: 'app',
  components: {
    MessageBar, SnackMessage
  },
  data () {
    return {
      userID: '',
      localuserID: false,
      testMessages: [],
      testValue: 0,
      pastSnacks: [],
      listSnacks: [],


    }
  },
  methods: {
    // what happens when App gets a Send notice from child MessageBar
    createSnack (data) {
      // socketio emit event create snack with read snack data
      this.$socket.emit('createSnack', data, function (response) {
        // body...
      })
      this.pastSnacks.push(data)
    },
    // Check if a previous userID exists
    // If so, load it and set corresp. bool to true
    localStorageInit () {
      if (localStorage.getItem('userID')){
        this.userID = localStorage.getItem('userID')
        this.localuserID=true

      }
  }
},
  compiled () {

  },
  mounted () {
    /* eslint-disable-next-line */
      this.localStorageInit()

    },
//Events for socketio API
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
      this.listSnacks.push(data)
    },
    oldSnacks (data) {
      this.listSnacks = data
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
/*  flex: 1 1 auto;*/
  background: #ddd;
  flex-direction: row;
  justify-content: center;
  /*scrolling in children wont work in firefox otherwise*/
  min-height: 0px; 

}
.wrapper2 {
  display: flex;
  flex: 0 1 auto;
  background: #d1d1d1;
  flex-direction: column;
}
.wrapper3 {
  display: flex;
  /*flex: 0 1 auto;*/
  background: #c3c3c3;
  flex-direction: column;
/*  flex-basis: 500px ;*/
overflow-y: scroll;



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
