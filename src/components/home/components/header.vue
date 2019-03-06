<template>
  <div class="home">
    <div id="header">
      <img :src="topbanner.pic_url" alt="">
    </div>
    <div class="searchInput">
      <router-link to="/search">
          <span class="iconfont">&#xe651;</span>
          <span class="logofont">卷皮</span>
          <span class="search">搜索</span>
      </router-link>
      <span class="iconfont sear">&#xe601;</span>
    </div>
    <Swipe :auto="2000" class="wrapper">
      <SwipeItem class="wrapperItem" v-for="(item,index) in slide" :key="index">
         <img :src="item.pic" class="bannerpic">
      </SwipeItem>   
    </Swipe>
    
  </div>
</template>
<script >
import { Swipe, SwipeItem } from 'mint-ui';
import Vuex from 'vuex'
export default {
  components: {
    Swipe,
    SwipeItem
  },
  computed: {
    ...Vuex.mapState({
      topbanner:state=>state.home.topbanner,
      slide:state=>state.home.slide
    }),   
  }
}
</script>
<style lang="stylus" scoped>
.home >>> .mint-swipe-items-wrap
    width:100%
    height:2.9rem
  #header
    width:100%
    overflow :hidden
    padding-bottom:15%
    background :#eee 
    height:0
    img 
      width:100%
  .searchInput
    width:100%
    height:.88rem   
    padding-left:.28rem 
    display:flex
    justify-content :space-between
    align-items :center
    a
      display:flex
      background :#eee
      flex:1
      height:.56rem
      line-height .56rem
      background: #f2f2f2;
      border-radius: .15rem;
      .iconfont
        font-size :.4rem
        margin:0 .2rem 
      .logofont
        font-size :.3rem 
        color:#ff464e;     
    .sear
      font-size :.5rem
      padding:.2rem
  .wrapper
    width:100%
    height:0
    padding-bottom :38.7%
    overflow :hidden
    .wrapperItem
      width:100%
      height:38.7%
      img 
        width:100%
  
      
</style>



