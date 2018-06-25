<template>
	<div class="SnackMessage">
				<!-- <span class="wrapimg"> -->
			<div class="snackInfo">
			<div class="profile">
				<p class="username">{{snack.username}}</p>	

				<img class="userimg" src="../assets/default-userimg.jpg">
			</div>	<!-- </span> -->
			<div class="information"
			<div class="activity">
				<span></span>
				<!-- this.snack.snackType.includes(arg), but can't figure out how to do it in a v-directive without it breaking  -->
				<span v-if="whatSnack('Coffee')">☕️</span>
				<span v-if="whatSnack('Sweet')">🍫️</span>
				<span v-if="whatSnack('Fruit')">🍏️</span>
				<span v-if="whatSnack('Lunch')">🍕️</span>
			</div>
			<div class="options">
				<span v-if="whatOption('Meet')">🙋️</span>
				<span v-if="whatOption('Deliver')">💻️</span>
			</div>
			<div class="note">
				<p>{{snack.note}}</p>
			</div>
			</div>
			<div class="bottomSnackMessage">
				<div class="joinedUsers">Matched Users: <span v-for="user in matchedUsers">&nbsp{{user}}</span></div>
				<div class="sendbutton" @click="matchUser" v-show="disabled"><button>match</button> </div>
			</div>
		</div
</div>
</template>

<script>
// i need a global eventbus, see below
import { EventBus } from '../event-bus.js';
export default {

  name: 'SnackMessage',
  props: ['snack','userID'],
  data () {
    return {
    	matchedUsers: this.snack.matchedUsers,
    	showMatchButton: true,
    	test:''
    }
  },
  computed: {

  	isFruit() {
  		return this.snack.snackType.includes("Fruit")
  	},
  	isSweet() {
  		return this.snack.snackType.includes("Sweet")
  	},
  	isCoffee () {
  		return this.snack.snackType.includes("Coffee")
  	}
  },
  methods: {
  	  	whatSnack (arg) {
  		// body...
  		return this.snack.snackType.includes(arg)
  	},
  		whatOption (arg) {
  		return this.snack.options.includes(arg)
  		},
  		// this kinda necessitates a global eventbus, or it gets unneccessarily complicated (need to communicate with brother)
  		matchUser () {
  			EventBus.$emit('sendWithUserName',this.snack.messageID)
  		}
  },
  sockets: {
  },
  created () {
  	// check if User is the same one who created SnackMessage, show the Match button only if he is not
  	this.disabled= !(this.userID == this.snack.userID)
  }    
}
</script>

<style>
/* maybe use block?*/
.SnackMessage {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	background: #a97858;
	width: 40vw;
	/*height:300px;*/
	padding:0px;
	min-height: 0px;
	/* explicitly state, chrome doesnt render correctly otherwise*/
	flex: 0 0 auto;
	margin: 30px;
	border-radius: 10px;
	font-family: Lato;
	font-size: 20px;
	box-shadow: 5px 5px 7px;
	text-shadow: 2px 2px #000000;

}
.bottomSnackMessage {
	display:flex;
	flex-direction: row;
	width:100%;
	justify-content: space-between;


}

.snackInfo {
	display: flex;
	justify-content: space-around;
	flex: 1 0 auto;
	width: 100%;
	align-items: center;
}
.joinedUsers {
	display: block;
	word-break: break-all;
	justify-content: flex-start;
	padding: 20px;
	color: white;
	text-align: left;
}
.sendbutton {
	padding-right: 40px
}
.sendbutton button {
	width: 120px;
	height: 50px;
	border-radius: 10px;
}
 .note {
	display: flex;
	background: white;
	justify-content: center;
	flex-wrap: wrap;
	width: 10em;
	text-shadow: 0px 0px #ffffff;
	font-size: 15px;
	overflow-y: hidden;
	word-break: break-all;
}
.information {
	background: #fff;
}
.activity {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	/*chrome is weird, apparantly*/
	width:2.5em;
	font-size: 50px;
	color: white;
}
.options {
	display: flex;
	flex-wrap: wrap;
	width:8vw;
	font-size: 50px;
	color: white;
}
.wrapimg{
	/*  width: 50%;*/
/*display: flex;
flex: 0 1 auto;*/*/
background: #d2d2d2;
margin: auto;
}
.SnackMessage .userimg {
	width: 100px;
	height: auto;
	margin-top: 0px;
	padding-top: 0px;
	border-radius: 10px;
	background: transparent;
	border: 1px solid;
	border-color: black;

}
.profile {
	padding: 0px;
	margin: 0px;
	line-height: 12px;
	color: white;
	font-weight: bold;
	width: 100px;
	letter-spacing: .2rem;
	word-break: break-all;
}

</style>