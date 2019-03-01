<template>
  <div id="app">

    <router-view/>
    <foot-com></foot-com>
  </div>
</template>

<script>
import  FootCom from'../src/components/commom/footer'
export default {
  name: 'App',
  components: {
    FootCom,
  }
}
</script>

<style scoped>
.app{
  height:80%
}
</style>
