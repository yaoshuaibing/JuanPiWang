<template>
    <div class="cate">
        <div class="cate-top">
            <router-link :to="{name:'classify'}">
                <b>&lt;</b>
             </router-link>
            <p>女士裙装</p>
            <div class="cate-top-r">
                <router-link :to="{name:'search'}">
                    <span class="iconfont icon-sousuo"></span>
                </router-link>
                <img src="https://web.juanpi.com/static/media/more.66830346.png" @click="handlePopup()">
                <Popup
                v-model="popupVisible"
                position="right"
                popup-transition="popup-fade">
                    <ul class="popup-content">
                        <li v-for="(item,index) in popupTab" :key="index">
                            <router-link :to="{name:item.pathName}">
                                <i class="iconfont" v-html="item.icon"></i><span>{{item.title}}</span>
                            </router-link>
                        </li>
                    </ul>
                </Popup>
            </div>
        </div>
        <ul class="cate-tab">
            <li 
            v-for="(item,index) in tab" :key="index" 
            :class="index==indexA?'active':''" 
            @click="handleLi(index)">{{item}}</li>
        </ul>
        <div class="cate-choice">
            <button 
            v-for="(item,index) in choice" :key="index"
            :class="index==indexB?'active':''" 
             @click="handleChoice(index)">{{item}}</button>
        </div>
        <ClassifyCateList></ClassifyCateList>
    </div>
</template>

<script>
import ClassifyCateList from "./ClassifyCateList";
import { Popup } from 'mint-ui';

export default {
    components:{
        ClassifyCateList,
        Popup,
    },
    data(){
        return {
            indexA:0,
            indexB:0,
            tab:["推荐","价格","销量","上新","筛选"],
            choice:["全部","连衣裙"],
            popupVisible:false,
            popupTab:[
                {title:"首页",icon:"&#xe61e;",pathName:"home"},
                {title:"收藏",icon:"&#xe61e;",pathName:"home"},
                {title:"我的订单",icon:"&#xe60f;",pathName:"home"},
            ]
        }
    },
    methods:{
        handleLi(index){
            this.indexA = index;
        },
        handleChoice(index){
            this.indexB = index;
        },
        handlePopup(){
            this.popupVisible=true;
        }
    }
}
</script>

 <style lang="stylus">
.cate{
    width:100%;
    height:100%;
}
.cate-top{
    width:100%;
    height:1rem;
    padding:0 .3rem;
    display:flex;
    justify-content:space-between;
    align-items:center;
    b{
        font-size:.6rem; 
        font-weight:100;
    }
    p{
       font-size:.4rem; 
    }
    .cate-top-r{
        display:flex; 
        justify-content:space-between;
        align-items:center;
        span,img{
            width:.6rem;
            height:.6rem;
        }
        span{
            font-size:.5rem;
            padding-right:.2rem;
            line-height:.6rem;
        }
        .mint-popup .popup-content{
            width:3rem;
            height:2.6rem;
            display:flex;
            flex-direction:column;
            justify-content:space-around;
            background:#333;
            padding-left:.5rem;
            li{
                width:100%;
                display:flex;
                justify-content:space-around;
                a{
                    color:#fff;
                    width:100%;
                    height:100%;
                    display:block;
                    i,span{
                        font-size:.4rem;
                    } 
                }
            }  
        } 
    } 
}
.cate-tab{
    width:100%;
    height:.8rem;
    display:flex;
    justify-content:space-around;
    align-items:center;
    border-top: 1px solid #f1f1f1;
    li{
        font-size:.26rem;
    }
    .active{
        color:#ff464e;
    }
}
.cate-choice{
    padding:0 .3rem;
    height:1rem;
    background:#f1f1f1;
    display:flex; 
    align-items:center;
    button{
        background:#fff;
        border:1px solid #cdcdcd;
        padding:.1rem;
        margin:0 .1rem;
    }
    .active{
        color:#ff464e;
        border:1px solid #ff464e;
    }
}
 </style>
 