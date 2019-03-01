<template>
  <div class="middleNav">
      <div v-for="(item,index) in navlists" :key="index">
        <img :src="item" alt="">
      </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      navlists:["https://goods4.juancdn.com/jas/181119/7/6/5bf2524bb6f8ea534d206f83_270x241.png?imageMogr2/quality/85!/format/png",
              "https://goods8.juancdn.com/jas/181228/f/e/5c25bd0d33b08962a220f3a6_270x241.png?imageMogr2/quality/85!/format/png",
              "https://goods2.juancdn.com/jas/180201/3/d/5a727415a9fcf8280d24465a_270x241.png?imageMogr2/quality/85!/format/png",
              "https://goods4.juancdn.com/jas/180917/6/5/5b9f175033b08945a870ad21_270x241.png?imageMogr2/quality/85!/format/png"
                ]
    }
  }
  
}
</script>
<style lang="stylus" scoped>
.middleNav
  width:100%
  height 1.67rem
  display :flex
  div
    flex:1
    height:100%
    img 
      width:100%
</style>


