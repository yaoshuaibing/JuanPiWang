<template>
    <div class="homemain">
        <div class="wrapper homewrapper" ref="homewrapper">
            <div class="content">
                <header-com/>
                <middle-nav/>
                <discount-com/>
                <main-com/>
            </div>
        </div>
         <ToTop/>
         <Footer/>
    </div>
</template>
<script>
import Vuex from 'vuex';
import HeaderCom from './components/header'
import MiddleNav from './components/middlenav'
import DiscountCom from './components/discount'
import BScroll from 'better-scroll'
import MainCom from './components/main'
import ToTop from '../commom/ToTop'
import Footer from '../commom/Footer'

export default {
    components: {
        HeaderCom,
        MiddleNav,
        DiscountCom,
        MainCom,
        ToTop,
        Footer,
    },
    created(){
        this.handleHomeData();
        this.handleHomedataBanner();
        this.handleHomedataGoods()
    },
    methods:{
        ...Vuex.mapActions({
            handleHomeData:"home/handleHomedata"
        }),
        ...Vuex.mapActions({
            handleHomedataBanner:"home/handleHomedataBanner"
        }),
        ...Vuex.mapActions({
            handleHomedataGoods:"home/handleHomedataGoods"
        })
    },
    mounted() {
        //给window加滚动事件
        window.addEventListener('scroll', this.scrollToTop)
        this.$nextTick(()=>{
         
         this.scroll=new BScroll(this.$refs.homewrapper,{
             pullUpLoad:true,
             click:true,
             tap:true
         });
        this.scroll.on("pullingUp",()=>{
            //alert(1)
        })
         //console.log(this.scroll)
     }); 
        
   }
}
</script>
<style scoped>
.homemain,.homewrapper{
    height:8rem
}
.content{
    height:60rem
}

</style>