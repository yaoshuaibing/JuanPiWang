<template>
    <div id="footer">
        <ul>
            <li v-for="(item,index) in iconTab" :key="index">
                <router-link :to="{name:item.name}">
                    <i class="iconfont" v-html="item.icon"></i>
                    <span>{{item.title}}</span>
                </router-link> 
            </li>
            <!-- <router-link  v-for="(item,index) in iconTab" :key="index" :to="{name:item.name}" tag="li"></router-link>  -->
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return {
            activeIndex:0,
            iconTab:[
                {icon:"&#xe684;",title:"首页",name:"home"},
                {icon:"&#xe61f;",title:"分类",name:"classify"},
                {icon:"&#x344b;",title:"购物车",name:"cart"}, 
                {icon:"&#xe620;",title:"我的",name:"my"},
            ]
        }
    },
}
</script>

<style scoped lang="stylus"> 
#footer{
    width:100%;
    height:.99rem;
    background: #fff;
    position:fixed;
    bottom:0; 
    ul{
        width:100%;
        height:100%;
        display: flex;
        justify-content: space-between;
        li{
            width:100%;
            height:100%;
            a{
                width:100%;
                height:100%;
                display: flex;
                justify-content: space-around;
                align-items: center;
                flex-direction: column;
                i{
                    display: block;
                    font-size:.48rem;
                }
                span{
                    display: block;
                    font-size:.24rem;
                }
            }
            .router-link-active{
                color:#ff464e;
            }
        }
    }
}
</style>