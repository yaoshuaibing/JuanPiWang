<template>
  <div>
    <div class="mainnav">
      <ul>
        <router-link :to="{name:item.name}" v-for="(item,index) in miannav" :key="index+20" tag="li">
          {{item.title}}
        </router-link>
      </ul>
    </div>
     <div class="main">
      <div class="item" v-for="item in goods" :key="item.goods_id">
        <div class="itempic">
          <img :src="item.pic_url">
        </div>
        <div class="price">39元2件人选</div>
        <div class="des">哈哈哈哈</div>
      </div> 
      
    </div> 
  </div>
</template>
<script>
import Vuex from 'vuex'
export default {
  data(){
    return{
      miannav:[
        {
            name:'home',
            title:"精选专场"
        },
        {
            name:'classify',
            title:"精选单品",
            
        }]
    }
  },
  computed: {
    ...Vuex.mapState({
      goods:state=>state.home.goods
    }),   
  }
}
</script>
<style scoped>
.mainnav{
  width:100%;
  height: 0.88rem;
  background: #fff
}
.mainnav>ul{
  width:100%;
  height:100%;
  display:flex;
}
.mainnav>ul>li{
  margin:0 .2rem;
  font-size: .4rem;
  box-sizing: border-box;
  line-height: .88rem;
  font-weight: bold;
  height:100%
}
.router-link-active{
  color: #ff464e;
  border-bottom: 4px solid #ff464e;
}
.main{
 
  width:100%;
  display:flex;
  flex-wrap: wrap;
  height:4.85rem;
  background: pink;
  margin-top:3.4rem
}
.main>.item{
  float:left;
  width:3.73rem;
  overflow: hidden;
}
.main>.item>.itempic{
  width:3.73rem ;
  height:3.73rem
}
.main>.item>.itempic>img{
  width:3.73rem ;
  height:3.73rem
}
.main>.item>.price{
  width:100%;
  height:.44rem;
  line-height: .44rem;
  padding:0 .16rem;
  font-size: .4rem;
  margin-top:12px;
  color:#ff464e;

}
.main>.item>.des{
  height:.44rem;
  line-height: .44rem;
  padding: 0 1.24rem 0 .16rem ;
  font-size: .3rem;
  margin-bottom:.34rem;
  color: #3b3b3b;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

</style>

