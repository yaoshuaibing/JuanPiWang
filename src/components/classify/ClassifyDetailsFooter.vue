<template>
  <div class="footer">
    <div class="fleft">
      <li v-for="(item,index) in iconTab" :key="index">
        <i class="iconfont" v-html="item.icon"></i>
        <span>
          <router-link :to="{name:item.name}">
            {{item.title}}
          </router-link>
        </span>
      </li>
    </div>
    <div class="fright">
      <dl>
        <dt>立即购买</dt><dd>加入购物车</dd>
      </dl>
    </div>
  </div>
</template>

<script> 
export default {
  data () {
    return {
       iconTab:[
        {icon:"&#xe684;",title:"首页",name:"home"},
        {icon:"&#x344b;",title:"购物车",name:"cart"}, 
      ]
    }
  }
}
</script>

<style lang="stylus">
.footer{
  width: 100%;
  height: 1rem;
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  background: white;
  font-size: .28rem;
  color:#666;
  .fleft{
    width: 35%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    li{
      width:100%;
      height:100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content:center;
      border-right: 1px solid #f1f1f1;
    }
    i{
      font-size: .4rem;
    }
    a{
      color: #666;
    }
  }
  .fright{
    width: 65%;
    dl{
      display: flex;
      justify-content: space-around;
      align-items: center;
      height: 1rem;
      dt{
        height: 1rem;
        width: 40%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      dd{
        width: 60%;
        height: 1rem;
        display: flex;
        align-items: center;
        background: #ff464e;
        justify-content: center;
        color: #fff;
      }
    }
  }
}
</style>
