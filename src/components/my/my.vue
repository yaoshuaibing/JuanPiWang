<template>
    <div>
      <div class="my">
        <!--头部-->
        <div class="header">
          <div class="top">个人中心</div>
          <ul>
            <li v-for="(item,index) in process">
              <router-link :to="item.path">{{item.name}}</router-link>
            </li>
          </ul>
        </div>
        <!--我的订单-->
        <div class="">
          <span v-for=""></span>
        </div>
      </div>
        <Footer/>
    </div>
</template>
<script>
import Footer from '../commom/Footer'
export default {
   components:{
    Footer,
  },
  data(){
     return {
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
         ]
     }
  }

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
  .header{
    width:100%;
    height:3rem;
    display:flex;
    flex-direction:column;
    padding-top:.3rem;

  }
  .header .top{
    text-align: center;
    font-size:0.4rem;
    font-weight: bold;
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
    padding:0 0.35rem;
  }
  .header li a{
    color:#fff;
  }
</style>



