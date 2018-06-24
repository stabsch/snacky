<template>
	<div class="wholeBar">
		<div class="user">
			<input type="text" v-model="user" placeholder="Name">
			<div class="wrapimg">
			<img class="userimg" src="../assets/default-userimg.jpg">
			</div>
		</div>
		<div class="snackPanel">
<!--            <p>Coffee</p>
			<p>Snack</p>
			<p>Both</p>
			<p>Leave Office?</p> -->
				<p class="panelheader">Choose at least one</p>
			<ul class="activitylist">
		
		<li> <input type="checkbox" id="coffee" value="Coffee" v-model="checkedSnackType">
			<label for="coffee">Get a coffee!</label> </li>
		<li>     <input type="checkbox" id="snack" value="Snack" v-model="checkedSnackType">
			<label for="snack">Have a snack!</label> </li>
		<li>     <input type="checkbox" id="walk" value="Walk" v-model="checkedSnackType">
			<label for="walk">Go for a walk!</label> </li>
		</ul>
		</div>
		<div class="optionsPanel">
<!--            <p>Duration></p>
			<p>Quickmatch</p>-->

			<p><input type="radio" id="meet" value="Meet" v-model="pickedOptions">
			<label for="meet">Time frame</label></p>

			<p><input type="radio" id="quickmatch" value="Quickmatch" v-model="pickedOptions">
			<label for="quickmatch">Quickmatch</label></p>
<br>
		</div>
		<div class="noteSendPanel">

			<input type="text" v-model="notes" placeholder="Type additional notes here">
									
			<button v-on:click="SnackToApp">Send</button>
			<p>{{checkedSnackType}}</p>
			<p>{{user}}</p><p>{{userID}}</p><p>{{localuserID}}</p>

		</div>
	</div>
</template>

<script>
import * as Snack from '../snack.js'
export default {

  name: 'MessageBar',
  props: {
  	userID: String,
  	localuserID: Boolean,
  },
  data () {
	return {
		user: '',
		// userID: '',
		// localuserID:false,
		checkedSnackType: [],
		pickedOptions: [],
		notes: ''
	}
  },
  methods: {
  	SnackToApp () {
  		// body...
  		// this.$emit('composeSnack', {user: this.user, snack: this.checkedSnackType, options: pickedOptions})
  		this.$emit('readSnack',Snack.Snack(this.userID, this.user, this.checkedSnackType, this.pickedOptions, this.note))
  	}
  },
  compiled: {

  }  
}
</script>

<style>
.activitylist {
	list-style-type: none;
	text-align:  left;
}
.panelheader {
	display: flex;
	font-size: 1.5vh;
	.align-self: center;
	text-align: center;
}
.wrapimg{
/*  width: 50%;*/
/*  display: flex;
	flex: 0 1 auto;*/
	background: #d2d2d2;
	margin: auto;
}
.wrapimg .userimg {
	display: block;
	width: 100%;

	max-width: 100px;*/
	height: auto;
	margin: auto;
}
.wholeBar {
	display: flex;
	flex-direction:row;
	flex: 0.5 0 auto;
	justify-content: space-around;
	padding: 0px;
}
.user {
	display: flex;
	flex-direction:column;
	background-color: #e1e1e1;
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
	background: #f1f1f1;
	justify-content: space-around;
	align-items: flex-start;
	padding: 20px;
	max-height: 25vh;
}
.optionsPanel {
	display: flex;
	flex-direction:column;
	flex: 0.5 0 auto;
	padding: 20px;
}
.noteSendPanel {
	display: flex;
	flex-direction:column;
	flex: 0.3 0 auto;
	padding: 20px;
}

</style>