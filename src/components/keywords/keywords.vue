<template>
  <div>
    <div class="searchInput border-bottom">
        <a>
        <span class="iconfont">&#xe623;</span>
        <input type="text" placeholder="搜索商品" class="searchgoods">
        </a>
        <span class="canclebtn" @click="handlecancel">取消</span>
    </div>
    <div class="hotsearch">
      <span class="hotkey">热搜</span>
      <ul>
        <li v-for="(item,index) in licontents">{{item}}</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      licontents:["进口美妆爆款满2件4折","全棉4件套"]
    }
  },
  methods:{
    handlecancel(){
      this.$router.push("./home")
    }
  }
}
</script>
<style lang="stylus">
 .searchInput
    width:100%
    height:.98rem   
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
      .searchgoods
        width:100%
        height:100%   
        background:#f2f2f2;
        font-size:.3rem;
        line-height 100%
        border:0   
        outline :none 
    .canclebtn
      font-size :.3rem
      padding:.2rem
 .hotsearch
  width:100%;
  .hotkey
    margin-top:.28rem
    width:100%
    height:.37rem
    line-height .37rem
    font-size:.3rem
    font-weight:bolder
    color:#ccc;
    padding-left:.2rem
  ul
    width:100%
    padding:0 .28rem
    li
      float:left
      padding:.1rem .2rem
      margin:.16rem .2rem .06rem 0
      line-height:.3rem;
      color:#ff464e;
      background :#eee
      line-height:.31rem
      border-radius:.1rem

</style>


