<template>
  <div class="hello">
    {{ msg }}
    <router-view class="aaa"></router-view>
  </div>
</template>
 
<script>
export default {
  name: 'hi',
  data () {
    return {
      msg: 'Hi <--- from Hi.vue'
    }
  }
}
</script>
 
 
<style scoped>
 
</style>