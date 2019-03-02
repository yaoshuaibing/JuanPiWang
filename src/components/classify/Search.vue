<template>
  <div class="search-page">
    <div class="search-page-top">
      <form action="" v-on:submit.prevent>
        <mt-search v-model="searchValue" cancel-text="取消" placeholder="搜索" @keyup.enter.native="search" autofocus:true show:true>
          <mt-cell
            v-for="item in list" :key="item.id"
            :value="item.value">
          </mt-cell>
        </mt-search>
      </form>
      <!-- <span><router-link :to="{name:'classify'}">取消</router-link></span> -->
    </div>
    <div class="search-page-result">
      <p>热搜</p>
    </div>
  </div>
</template>

<script>
// 按需引入mint-ui中的组件并使用组件
import { Search,Cell } from 'mint-ui';

export default { 
  components:{
    "mt-search":Search,
    "mt-cell":Cell,
  },
  data () {
    return {
      searchValue:'',
      list:[]
    }
  },
  methods:{
    search(){
      document.activeElement.blur();
    },
    getResultList(val){
      console.log(666)
    }
  },
  watch:{
    searchValue:function(newVal,oldVal){
      console.log("newVal",newVal);
      console.log("oldVal",oldVal);
      if(newVal){ 
        this.getResultList(newVal);
      }else{
        this.list.length = 0;
      }
    }
  }
}
</script>

<style lang="stylus">
.search-page{
  width:100%;
  height:100%;
} 
.search-page-top{
  width:100%;
  display:flex;
  justify-content:space-between;
  align-items:center;
  background-color:#fff;
  padding:.15rem .15rem 0 .15rem;
  border-bottom: 1px solid #ebebeb;
  form{
    width:100%;
  }
  form .mint-search{
    width:100%;
    max-height:max-content;
    .mint-searchbar{
      background-color:#fff;
      .mint-searchbar-inner{
        background-color:#f2f2f2;
        padding:0;
        i{
          font-size:.35rem;
          padding:0 .1rem;
          height: .6rem;
          line-height: .6rem;
          position:absolute;
          left:.25rem;
        }
        input{
          width:100%;
          font-size:.28rem;
          height: .6rem;
          line-height: .6rem;
          background-color:#f2f2f2;
          text-indent:.6rem;
          border-radius:.1rem;
        }
      }
    }
    .mint-search-list{
      background-color:#fff;
    }
  }
  // span{
  //   width:1rem;
  //   height:.56rem;
  //   line-height:.56rem;
  //   padding:.05rem .1rem 0; 
  //   font-size:.36rem;
  // }
}
.search-page-result{
  padding:.3rem;
  p{
    color: #999;
    font-size: .28rem;
  }
}
</style>