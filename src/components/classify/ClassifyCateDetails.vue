<template>
    <div class="container">
      <ClassifyBanner></ClassifyBanner>
      <ul class="account">
        <li class="price">￥<span>39.9</span></li>
        <li><em>￥159</em></li>
        <li><span class="bgRed">包邮</span></li>
        <li class="oldBuy"><span>2156</span>人已购</li>
      </ul>
      <div class="goodsName">松紧腰牛仔短裤女夏新款松紧腰牛仔短裤女夏新款</div>
      <ul class="shouhou">
        <li><span></span><p>24小时发货</p></li>
        <li><span></span><p>7天包退</p></li>
        <li><span></span><p>售后补贴</p></li>
        <li><div><img src="https://web.juanpi.com/static/media/more.66830346.png"></div></li>
      </ul>
      <div class="amount">
        <p>已选择：<span>白色</span><span>XL</span></p><b>&lt;</b>
      </div>
      <ClassifyFooter></ClassifyFooter>
    </div>
</template>

<script>
import ClassifyBanner from "./ClassifyDetailsBanner";
import ClassifyFooter from "./ClassifyDetailsFooter";

export default {
  components:{
    ClassifyBanner,
    ClassifyFooter,
  },
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
.condainer{
  width: 100%;
  height:100%;
  position: relative;
}
.goodsName{
  width:100%;
  height:.7rem; 
  padding:0 .3rem;
  font-size: .32rem;
  overflow: hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
}
.account{
  height: 1.2rem;
  background: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding:0 .3rem;
  .price{
    color:#ff464e;
    margin-left: .2remx;
    font-size: .3rem;
    span{
      font-size: .4rem;
    }
  }
  em{
    font-size: .3rem;
    text-decoration: line-through;
    font-style: normal;
    color: darkgray;
  }
  .bgRed{
    width:.3rem;
    height:.2rem;
    color:#fff;
    background:#ff464e;
  }
  .oldBuy{
    color:#666;
    padding-left:3rem;
  }
}

.shouhou{
  background: white;
  height: 1.58rem;
  display:flex;
  justify-content:space-between;
  align-items:center; 
  padding:0 .3rem;
  border-top:.3rem solid #f1f1f1;
  border-bottom:.3rem solid #f1f1f1;
  li{
    font-size: .22rem;
    color:#666;  
    display:flex;
    align-items:center;
    span{
      width: 3px;
      height: 3px;
      border-radius: 1rem;
      background: deeppink;
      margin-right:.1rem;
    }
    p{
      display: inline-block;
    }
    div{
      width:.48rem;
      height:.48rem;
      margin-left:1.5rem;
      img{
        width:100%;
        height:100%;
      }
    }
  }
}

.amount{
  height: 1.2rem;
  background: white;
  padding:0 .3rem; 
  color:#666; 
  display: flex;
  justify-content: space-between;
  align-items: center; 
  p{ 
    font-size: .3rem;
    line-height: .6rem; 
    span{
      margin-left: .2rem;
    }
  }
  b{
    font-style: normal;
    font-size: .4rem;
  }
}
</style>
