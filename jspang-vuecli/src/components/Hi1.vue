<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h3>{{ $route.params.name }}</h3>
  </div>
</template>
<script>
export default {
  name: 'hi',
  data () {
    return {
      msg: 'Hi, I am Hi1!'
    }
  }
}
</script>
<style scoped>
 
</style>