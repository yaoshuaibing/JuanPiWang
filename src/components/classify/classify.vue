<template>
  <div class="classify">
    <div class="search">
      <router-link :to="{name:'search'}">
        <i class="iconfont" v-html="searchIcon"></i>
        <input type="text" value="" placeholder="搜索商品">
      </router-link>
    </div>
    <div class="tab"> 
      <ol>
        <li v-for="(item,index) in tab" :key="index"><a href="##" :class="index==indexA?'active':''" @click="handleTabClick(item,index)">{{item.name}}</a></li>
      </ol>
      <ul>
        <li v-for="(item,index) in tab[indexA].pic" :key="index">
          <router-link :to="{name:'cate',query:{cateId:item.id}}">
            <img :src="mainSrc+item.picSrc">
            <span>{{item.title}}</span>
          </router-link>
        </li>
      </ul>
    </div>
    <Footer/>
  </div>
</template>

<script> 
import Vuex from 'vuex';
import Footer from '../commom/Footer'

export default {
  components:{
    Footer,
  },
  data () {
    return {
      mainSrc:"https://s2.juancdn.com",
      searchIcon:"&#xe651;",
      indexA:0,
    }
  },
  computed:{
    ...Vuex.mapState({
      tab:state=>state.classify.tab,
    })
  },
  created(){
    this.handleClassifyData();
  },
  methods:{
    ...Vuex.mapActions({
      handleClassifyData:"classify/handleClassifyData",
    }),
    handleTabClick(item,index){
      this.indexA = index;
    }
  }
}
</script>

<style scoped lang="stylus">
.classify{
  width:100%;
  height:100%;
  .search{
    width:100%;
    display:flex;
    justify-content:space-around;
    padding:.25rem;
    a{
      width:100%;
      height:.65rem;
      border:1px solid #bbb;
      border-radius:5px;
      display:flex;
      align-items:center;
      color: #666;
      i{
        font-size:.36rem;
        margin:0 .14rem;
      }
      input{
        autocomplete="off";
        font-size:.26rem;
      }
    }
  }
  .tab{
    width:100%;
    height:100%;
    display:flex;
    justify-content:space-between;
    ol{
      width:30%;
      height: max-content;
      display:flex;
      flex-wrap:wrap;
      padding-bottom: 2rem;
      text-indent:.3rem;
      background:#f9f9f9;
      li{
        width:100%;
        border-bottom: 1px solid #ebebeb;
        cursor: pointer;
        display:flex;
        align-items:center;
        a{
          width:100%;
          height:.91rem;
          font-size: .28rem;
          color: #333;
          display:flex;
          align-items:center;
        }
        .active{
          color:#ff464e;
          border-left: 4px solid #ff464e;
          background:#fff;
        }  
      }
    }
    ul{
      width:100%;
      height: max-content;
      display:flex;
      flex-wrap:wrap;
      padding-bottom: 2rem;
      background:#fff;
      li{
        width:33%;
        cursor: pointer;
        display:flex;
        justify-content:space-around;
        align-items:center;
        a{
          width:1.7rem;
          height:1.87rem;
          display:flex;
          justify-content:space-around;
          flex-direction:column;
          align-items:center;
          img{
            width:1.17rem;
            height:1.17rem;
          }
          span{
            width:100%;
            font-size: .28rem;
            color: #333;
            text-align:center;
          }
        }  
      }
    }
  } 
}
</style>
