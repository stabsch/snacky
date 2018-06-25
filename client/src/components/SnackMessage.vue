<template>
	<div class="SnackMessage">
				<!-- <span class="wrapimg"> -->
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
				<!-- <span v-for="snack in avSnacks" :key="snack.id">{{snack}}{{key}}</span> -->
			</div>
			<div class="options">
				<span v-if="whatOption('Meet')">🙋️</span>
				<span v-if="whatOption('Deliver')">💻️</span>
			</div>
		</div>
<!-- <p>{{snack}}</p> -->
</div>
</template>

<script>
export default {

  name: 'SnackMessage',
  props: ['snack'],
  data () {
    return {
    	// avSnacks: ["Coffee", "Sweet", "Fruit", "Lunch"],
    	// emoji: ["☕️","🍫️","🍏️","🍕️","🙋️","💻️"]
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
  	 	// console.log(this.snack.snackType.includes(this.avSnacks[arg]))
  		return this.snack.snackType.includes(arg)
  	},
  		whatOption (arg) {
  		return this.snack.options.includes(arg)
  		}
  }    
}
</script>

<style>
/* maybe use block?*/
.SnackMessage {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	background: #a97858;
	width: 40vw;
	/*height:300px;*/
	padding:10px;
	min-height: 0px;
	/* explicitly state, chrome doesnt render correctly otherwise*/
	flex: 0 0 auto;
	margin: 30px;
	border-radius: 10px;
	font-family: Lato;
	font-size: 20px;
	box-shadow: 5px 5px 7px;
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