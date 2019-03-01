<template>
  <div class="discount">
    <div v-for="(item,index) in imgurl" :key="index">
      <img :src="item" alt="">
    </div>
    <div class="onSalePic">
      <img :src="onSlae" alt="">
    </div> 
    <div class="smallbanner">
      <img :src="smallbanner" alt="">
    </div>  
  </div>
</template>
<script>
export default {
  data(){
    return{
      imgurl:["https://s2.juancdn.com/jas/190225/f/8/5c73be5d33b08973b6356e03_540x656.gif",
      "https://goods4.juancdn.com/jas/190227/6/2/5c75e7f733b0895a9072c076_540x328.png?imageMogr2/quality/85!/format/png",
      "https://goods1.juancdn.com/jas/190227/0/d/5c75e835b6f8ea6deb695124_540x328.png?iopcmd=convert&Q=85&dst=png"
      ],
      onSlae:"https://s2.juancdn.com/jas/190226/8/e/5c75024933b089215b0e14f3_1080x340.gif",
      smallbanner:"https://goods7.juancdn.com/jas/180518/c/6/5afe2f0db6f8ea096f2bfb35_1080x138.png?iopcmd=convert&Q=85&dst=png"
    }
  }
}
</script>
<style lang="stylus" scoped>
.discount
  width:100%
  height: 4.55rem
  div
    width:50%
    float: left
    img 
      width:100%
      height:auto
  .onSalePic
    width:100%
    height:2.4rem  
    img 
      width:100%
  .smallbanner
    width:100%
    height:.96rem
    border-bottom: 20px solid #eee
    img 
      width:100%
</style>


