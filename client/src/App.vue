<!-- 
TO-DO 

    -refactor API
    -refactor Layout (this is a wild mess)
        -dont only use flexbox
        -use/learn child combinator for css styling
        -style more
    - Vue: break stuff into more components
    - clean up communication between components
    - abstract more in general

    -Features to add
      -profile images (use localStorage to store, store as base64, send in messages as base64, resize properly beforehand (limited storage))
      -webNotifications
      -gifs
      -more pictures (no more emojis)
      -big picture/banner at start with get started button
      -maybe a help section with a modal?
      -transitions (v-show)

    -ErrorHandling
      -  most of the stuff could be prevented with log in system

    -Comment (I'm sorry about this, as usual, little time -> few comments)
 -->
<template>
  <div id="app">
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1">

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
          <SnackMessage v-for="item in listSnacks" :snack="item" :key="item.id" :userID="userID"></SnackMessage>
      </div>

    </div>
    <footer>
                  <MessageBar @readSnack="createSnack($event)" @sendUserId="createUserID($event)"  :userID="userID"></MessageBar>
             

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
      user: null,
      userID: null,
      pastSnacks: [],
      listSnacks: [],


    }
  },
  methods: {
    // create userID when prompted (and there isn't one already)
    createUserID (userID, user) {
      localStorage.setItem('userID', userID)
    },
    // what happens when App gets a Send notice from child MessageBar
    createSnack (data) {
      // socketio emit event createSnack using the data piped through by MB
      var array = this.listSnacks
      this.$socket.emit('createSnack',data, function (response) {
        // body...
        console.log(response)
      data.messageID=response
      array.push(data)
      })

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
    },
    addSnack(data) {
      this.listSnacks.push(data)
    },
    oldSnacks (data) {
      this.listSnacks = data
    },
    // Update listSnacks when a User matches with a SnackMessage
    editInMatchedUser (data) {
      this.listSnacks.filter(Snack => Snack.messageID == data.messageID).forEach(element => {
            element.matchedUsers.push(data.name)
    })
  }}
}
</script>

<style>
 @import url('https://fonts.googleapis.com/css?family=Damion');
 @import url('https://fonts.googleapis.com/css?family=Lato');


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
  background: #ccc;
  flex-direction: row;
  justify-content: center;
  /*scrolling in children wont work in firefox otherwise*/
  min-height: 0px; 

}
.wrapper2 {
  display: flex;
  flex: 0 1 auto;
  background: #ebd4cb;
  flex-direction: column;
}
.wrapper3 {
  display: flex;
  flex: 0 1 auto;
  background: #AF473C;
  flex-direction: column;
  justify-content: space-between;
  align-content: center;
/*  flex-basis: 500px ;*/
  overflow-y: scroll;
  min-width: 50vw;
  min-height: 0px;



}
img {
  align-self: start;
}
footer {
  background: #B82601;
  padding: 0px;
  display: flex;
  flex-direction: row;
  flex: 1 0 auto;
  max-height: 17vh;
  justify-content: center;
  border-top: 2px solid;
  border-color: #ebd4cb;
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
  border-bottom: 2px solid;
  border-color: #ebd4cb;
}
.headerlogo {
  font-family: 'Damion', cursive;
  font-size: 10vh;
  color: #FFFFFF;
  margin: 0px;
}
</style>
