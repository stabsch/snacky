<template>
	<div class="wholeBar">
		<div class="user">
			<input type="text" v-model="user" placeholder="Name">
			<div class="wrapimg">
				<img class="userimg" src="../assets/default-userimg.jpg">
			</div>
		</div>
		<div class="snackPanel">

			<span class="paneldescription">Choose at least one</span>
			<ul class="activityList">

				<!-- Emojis differ heavily between browsers -->
				<li><input type="checkbox" id="coffee" value="Coffee" v-model="checkedSnackType">
					<label for="coffee">☕️ Have a coffee!</label> </li>
					<li><input type="checkbox" id="sweet" value="Sweet" v-model="checkedSnackType">
						<label for="sweet">🍫️ Have something sweet?</label> </li>
						<li><input type="checkbox" id="fruit" value="Fruit" v-model="checkedSnackType">
							<label for="fruit">🍏️ Some healthy fruit, maybe?</label> </li>
							<li><input type="checkbox" id="lunch" value="Lunch" v-model="checkedSnackType">
								<label for="lunch">🍕️ How about a hearty lunch</label> </li>
							</ul>
						</div>
	<div class="optionsPanel">
	<span class="paneldescription">Options</span>
	<ul class="optionsList">
	<li><input type="radio" id="meet" value="Meet" v-model="pickedOptions">
		<label for="meet">🙋️ Meet up</label></p>

		<li><input type="radio" id="deliver" value="Deliver" v-model="pickedOptions">
			<label for="deliver">💻️ Bring to desk</label></li>
	</ul>
		</div>
		<div class="noteSendPanel">

			<input type="text" v-model="notes" placeholder="Type additional notes here">

			<button v-on:click="checkForm">Send</button>
			  <p v-if="errors.length">
    <b>Please correct error(s):</b>
    <ul class="errorsList">
      <li v-for="error in errors">{{ error }}</li>
    </ul>
  </p>


</div>
</div>
</template>
<script>
import * as Snack from '../snack.js'
import { EventBus } from '../event-bus.js';
export default {

	name: 'MessageBar',
	props: {
		userID: String,
		localuserID: Boolean,
	},
	data () {
		return {
		user: null,
		errors: [],
		// userID: '',
		// localuserID:false,
		checkedSnackType: [],
		pickedOptions: [],
		notes: ''
	}
},
methods: {
	checkForm () {
		this.errors = []
		if(!this.userID) {
			if (this.user) {
				var newUserId=this.user + new Date().getTime().toString()
				this.$emit('sendUserId',newUserId)

				this.userID = newUserId
				// this prop gets mutated, however, this is intended:
				// Avoid mutating a prop directly since the value will be overwritten whenever the parent component re-renders. Instead, use a data or computed property based on the prop's value. Prop being mutated: "userID"
				// however, this get's dealt with by localStorageInit () on parent rerender already 
			}
		}
		if (this.checkedSnackType.length && this.pickedOptions.length && this.user &&this.userID) {
			this.SnackToApp()
		}
		if(!this.user)
			this.errors.push('Type in a Name')
		if (!this.checkedSnackType.length) {
			this.errors.push('Choose a Snack')
		}
		if (!this.pickedOptions.length)
			this.errors.push('Choose an option')
	},
	SnackToApp () {
  		// body...
  		// this.$emit('composeSnack', {user: this.user, snack: this.checkedSnackType, options: pickedOptions})
  		this.$emit('readSnack',Snack.Snack(this.userID, this.user, this.checkedSnackType, this.pickedOptions, this.notes))
  	 },
  	 matchToServer(messageID) {
  		//Fix this: what if user deletes his name?
  		// console.log('sendWithUsername')
  		// console.log(this.user)
  		this.$socket.emit('matchUsertoSnackMessage', {name: this.user, messageID: messageID})
  	}
  },
  mounted () {
  	EventBus.$on('sendWithUserName', messageID => {
  	// console.log('sendWithUsername')
  	this.matchToServer(messageID)
  	})
  		
  }
}
</script>

<style>
 @import url('https://fonts.googleapis.com/css?family=Lato')

.errorsList {
	font-size: 12px;
	line-height: 15px;
}
.activityList {
	list-style-type: none;
	text-align:  left;
	white-space: nowrap;
}
.activityList label {
	white-space: nowrap;
	font-weight:  bold;
}
.optionsList {
	list-style-type: none;
	text-align:  left;
	white-space: nowrap;
	font-weight:  bold;
}

.panelheader {
	display: flex;
	font-size: 1.5vh;
	.align-self: center;
	text-align: center;
	line-height: 0px;
	letter-spacing: .4rem;
}
.wrapimg{
	/*  width: 50%;*/
/*  display: flex;
flex: 0 1 auto;*/
background: transparent;
margin: auto;
}
.wrapimg .userimg {
	display: block;
	width: 100%;

	max-width: 100px;*/
	height: auto;
	margin: auto;
	border-radius: 10px;
	border: 1px solid;
	border-color: #ebd4cb;
}
.wholeBar {
	display: flex;
	flex-direction:row;
	flex: 0.5 0 auto;
	justify-content: space-around;
	padding: 0px;
	font-family: Lato;
	letter-spacing: .2rem;
	color: white;
}
.user {
	display: flex;
	flex-direction:column;
	background-color: #B82601;
	justify-content: center;
	flex: 0 0 auto;
	align-items: center;
	padding: 20px;
	/*text-align: center;*/
}
.snackPanel {

	display: flex;
	flex-direction:column;
	flex: 0.5 1 auto;
	background: #B82601; /*#f1f1f1;*/
	justify-content: flex-end;
	align-items: flex-start;
	padding: 10px;
	max-height: 25vh;
	border-left: 1px solid;
	border-right: 1px solid;
	border-color: #ebd4cb;
	color: #ffffff;
}
.optionsPanel {
	display: flex;
	flex-direction:column;
	flex: 0.5 0 auto;
	padding: 10px;
	background-color: #B82601;
	align-items: flex-start;
	border-right: 1px solid;
	border-color: #ebd4cb;
}
.noteSendPanel {
	display: flex;
	flex-direction:column;
	justify-content: space-around;
	flex: 0.3 0 auto;
	padding-top:  20px;
	padding-left: 20px;
	padding-bottom: 10px;
	background-color: #B82601;
	font-size: 15px;
}

</style>