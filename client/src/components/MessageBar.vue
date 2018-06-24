<template>
	<div class="wholeBar">
		<div class="user">
			<input type="text" v-model="user" placeholder="Name">
			<div class="wrapimg">
			<img class="userimg" src="../assets/default-userimg.jpg">
			</div>
		</div>
		<div class="activities">
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
		<div class="additionalInfo">
<!--            <p>Duration></p>
			<p>Quickmatch</p>-->

			<p><input type="radio" id="timeframe" value="Timeframe" v-model="pickedOptions">
			<label for="timeframe">Time frame</label></p>

			<p><input type="radio" id="quickmatch" value="Quickmatch" v-model="pickedOptions">
			<label for="quickmatch">Quickmatch</label></p>
<br>
		</div>
		<div class="noteSend">

			<input type="text" v-model="notes" placeholder="Type additional notes here">
									
			<button v-on:click="SnackToApp">Send</button>
			<p>{{checkedSnackType}}</p>
			<p>{{user}}</p>

		</div>
	</div>
</template>

<script>
export default {

  name: 'MessageBar',
  data () {
	return {
		user: '',
		checkedSnackType: [],
		pickedOptions: [],
		notes: ''
	}
  },
  methods: {
  	SnackToApp () {
  		// body...
  		this.$emit('composeSnack', {user: this.user, snack: this.checkedSnackType, options: pickedOptions})
  	}
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
.activities {

	display: flex;
	flex-direction:column;
	flex: 0.5 1 auto;
	background: #f1f1f1;
	justify-content: space-around;
	align-items: flex-start;
	padding: 20px;
	max-height: 25vh;
}
.additionalInfo {
	display: flex;
	flex-direction:column;
	flex: 0.5 0 auto;
	padding: 20px;
}
.noteSend {
	display: flex;
	flex-direction:column;
	flex: 0.3 0 auto;
	padding: 20px;
}

</style>