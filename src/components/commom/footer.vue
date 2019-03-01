<template>
    <div id="footer">
        <ul>
            <router-link :to="{name:item.name}" v-for="(item,index) in footnavs" :key="index" tag="li">
                <i class="iconfont" v-html="item.icon"></i>
                <span>{{item.title}}</span>
            </router-link>
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return{
            footnavs:[
                {
                    name:'home',
                    title:"首页",
                    icon:"&#xe808;"
                },
                {
                    name:'classify',
                    title:"分类",
                    icon:"&#xe7f9;"
                },
                {
                    name:'cart',
                    title:"购物车",
                    icon:"&#xe607;"
                },
                {
                    name:'my',
                    title:"我的",
                    icon:"&#xe609;"
                },
            ]
        }
    }
}
</script>
<style scoped lang="stylus">
    #footer
        width:100%
        position:fixed
        bottom:0
        left:0
        height:.96rem  
        background:#fff             
        ul
            display: flex
            width:100%
            height:100%
            justify-content: space-around   
            li
                display:flex
                flex-direction: column
                justify-content:space-around
                text-align:center
                flex:1   
                i
                    font-size: .46rem   
                span
                    font-size: .33rem
    
   .router-link-active
        color:red
    

</style>


