<template>
  <div class="reg" ref="wrapper">
      <div class="my">
        <!--头部-->
        <div class="header">
          <div class="top">
            <router-link :to="back.path">
              <i class="iconfont char" v-html="back.icon"></i>
            </router-link>
            <span>{{person}}</span>
          </div>

          <ul>
            <li v-for="(item,index) in process">
              <router-link :to="item.path">{{item.name}}</router-link>
            </li>
          </ul>
        </div>
        <!--我的订单-->
        <div class="order">
          <div class="order-top">
          <span v-for="(item,index) in order">
            <router-link :to="item.path">
                {{item.name}}
               </router-link>
          </span>
          </div>
          <div class="order-bottom">
            <ul>
              <li v-for="(item,index) in orderpay">
                <router-link :to="item.path">
                  <i class="iconfont" v-html="item.icon"></i>
                  <span>{{item.name}}</span>
                </router-link>
              </li>
            </ul>
          </div>
        </div>
        <!--列表-->
        <div class="middle-list">
          <ul>
            <li v-for="(item,index) in middle">
              <router-link :to="item.path">
                {{item.name}}
              </router-link>
            </li>
          </ul>
        </div>
      <!--客服中心-->
        <div class="call">
          <ul>
            <li v-for="(item,index) in call">
              <router-link to="">
                    {{item.name}}
                </router-link>
            </li>
          </ul>
        </div>
        <!--PC端&&client端-->
        <div class="client">
            <div>
              <router-link :to="item.path" v-for="(item,index) in client">
                  {{item.name}}
              </router-link>
            </div>
        </div>
  </div>
    <Footer/>
      </div>
</template>
<script>
import Footer from '../commom/Footer'
import Bscroll from "better-scroll"

export default {
   components:{
    Footer,
  },
    /*原页面是多页面开发*/
  data(){
     return {
       person:"个人中心",
       back:{
         path:"/home",
         icon:"&#xe61e;"
       },
       process: [
         {
           path: "/register",
           name: "注册"
         },
         {
           path: "",
           name: "|"
         },
         {
           path: "/login",
           name: "登录"
         }
       ],
       order:
         [
           {
             path:'/order',
             name:'我的订单'
           },
           {
             path:"/order",
             name:"全部订单",
           }
         ],
       orderpay:[
         {
           path:"",
           name:"待付款",
           icon:"&#xe63f;"
         },
         {
           path:"",
           name:"待成团",
           icon:"&#xe604;"
         },
         {
           path:"",
           name:"待收货",
           icon:"&#xe69e;"
         },
         {
           path:"",
           name:"退款/收货",
           icon:"&#xe70b;"
         },
         ],
       /*中间列表*/
       middle:[
         {
           path:"",
           name:"我的优惠券"
         },
         {
           path:"",
           name:"我的收藏"
         },
         {
           path:"",
           name:"我的拼团"
         },
         {
           path:"",
           name:"我的免单券",
           secName:"0张"
         },
         {
           path:"",
           name:"借钱",
           secName:"新用户免费领1000元"
         },
         ],
       /*客服中心&&关于卷皮*/
       call:[
         {
           path:"",
           name:"客服中心"
         },
         {
           path:"",
           name:"关于卷皮"
         }
         ],
       /*PC端&&客户端*/
       client:[
         {
           path:"/home",
           name:"返回首页"
         },
         {
           path:"",
           name:"客户端"
         },
         {
           path:"",
           name:"电脑版"
         }
         ]
     }
  },
  mounted(){
    this.scroll = new Bscroll(this.$refs.wrapper,{
      pullUpLoad:true,
      click:true,
      tap:true
    })
  },
}
</script>
<style scoped>

  .my{
    width:100%;
    height:3rem;
    background:linear-gradient( to right,#ff464e,#fd5929);
    position: fixed;
    left:0;
    top:0;
  }
  /*头部*/
  .header{
    width:100%;
    height:3rem;
    padding-top:.3rem;

  }
  /*头部-上面*/
  .header .top{
    height:0.5rem;

  }
  /*头部-返回键*/
  .header .char{
    font-size:0.5rem;
    color:#fff;
    margin-left:0.2rem;
  }
  /*头部-个人中心*/
  .header span{
    text-align: center;
    font-size:0.45rem;
    font-weight: bold;
    margin-left:2rem;
    height:0.5rem;
    color: #fff;
  }

  .header ul  {
    display: flex;
    width:100%;
    height:2rem;
    justify-content: center;
    align-items: center;
  }
  .header ul li{
    font-size:0.5rem;
    font-weight: 600;
  }
  .header ul li:nth-of-type(2){
    padding:0 0.8rem;
  }
  .header li a{
    color:#fff;
  }

  /*order订单*/
  .order{
    width:100%;
    height:3.6rem;
    background:#fff;
  }
  /*订单顶部*/
  .order-top{
    width:100%;
    height:1.2rem;
    background: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom:1px solid #ebebeb;
    padding:0 0.35rem;
    box-sizing: border-box;
  }
  .order-top span {
    font-size:0.4rem;
    color:#333;
  }
  /*订单底部*/
  .order-bottom{
    width:100%;
    height:2.4rem;
    border-bottom:0.2rem solid #f4f4f8;
  }
  .order-bottom ul{
    display: flex;
    align-items: center;

  }
  .order-bottom ul li{
    width:25%;

  }
  .order-bottom li a{
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-top:0.42rem;
    box-sizing: border-box;
  }
  .order-bottom  li i{
    font-size:0.85rem;
    padding-bottom:0.2rem;
    box-sizing: border-box;
  }
  .order-bottom  li span{
    font-size:0.33rem;
  }
  /*中间列表*/
  .middle-list{
    width:100%;
    height:5rem;
    background:#fff;
    padding-left:0.3rem;
    box-sizing: border-box;
    border-bottom:.2rem solid #f4f4f8;
  }
  .middle-list ul li{
      height:1rem;
      border-bottom:1px solid #ccc;
  }
  .middle-list li a{
    font-size:0.4rem;
    line-height:1rem;
    color:#333333;
  }
  .middle-list li:last-of-type {
  }
  /*客服中心*/
  .call{
    width:100%;
    height:2.2rem;
    background:#fff;
    padding-left:0.3rem;
    border-bottom:0.25rem solid #f4f4f8;
  }
  .call ul li{
    height:1rem;
    border-bottom:1px solid #ccc;
  }
  .call li a{
    font-size:0.4rem;
    line-height:1rem;
    color:#333333;
  }
  /*客服端&&PC端*/
  .client{
    width:100%;
    height:1rem;
    background:#fff;

  }
  .client div{
    display: flex;
    justify-content: space-around;
    align-items: center;

  }
  .client div a{
    line-height: 1rem;
    font-size:0.35rem;
    color:#666;
  }
</style>



