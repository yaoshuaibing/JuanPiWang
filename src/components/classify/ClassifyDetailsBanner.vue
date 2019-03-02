<template>
    <div class="Myswipe">
        <mt-swipe :auto="4000">
          <mt-swipe-item v-for="item in swipebox.imgs"
        :key="item.id"><img :src="item" :alt="item.name"></mt-swipe-item>
        </mt-swipe>
        <router-link :to="{name:'cart'}">
        <span>＜</span>
        </router-link>
    </div>
</template>

<script>
import { Swipe, SwipeItem } from 'mint-ui';

export default {
  components:{
      "mt-swipe":Swipe,
      "mt-swipe-item":SwipeItem,
  },
  data () {
    return {
      // film: {},
      swipebox: {
        id: 1,
        imgs: ['https://goods4.juancdn.com/goods/180413/7/6/5ad0609e8150a1209a1b253b_800x800.jpg?imageMogr2/quality/88!/format/jpg','https://goods1.juancdn.com/goods/180413/1/4/5ad060278150a11faa0167c5_800x800.jpg?iopcmd=convert&Q=88&dst=jpg','https://goods6.juancdn.com/goods/180413/a/9/5ad060a0a9fcf8683c18a320_800x800.jpg?imageMogr2/quality/88!/format/jpg','https://goods8.juancdn.com/goods/180413/f/5/5ad060a3a9fcf865e873863b_800x800.jpg?imageMogr2/quality/88!/format/jpg','https://goods3.juancdn.com/goods/180413/4/1/5ad060a58150a11e684fca51_800x800.jpg?iopcmd=convert&Q=88&dst=jpg'],
      }
    }
  }
}
</script>

<style lang="stylus">
.Myswipe{
    height: 7rem;
    position: relative;
    .mint-swipe-items-wrap{
      height: 7rem;
      background: red;
      img{
        width:100%;
        height:100%;
      }
    }
    span{
      position: absolute;
      left: .1rem;
      top: .1rem;
      width: 1rem;
      height: 1rem;
      border-radius: .5rem;
      font-size: .5rem;
      color: white;
      opacity: 0.5;
      background: gray;
      line-height: 1rem;
      text-align:center;
    }
}
</style>
