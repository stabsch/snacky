<template>
<p>{{snack}}</p>
</template>

<script>
export default {

  name: 'SnackMessage',
  props: ['snack'],
  data () {
    return {
    	something: 'something'
    }
  }    
}
</script>

<style>

</style>