<template>
    <div class="toTop" @click="toTop" v-show="toTopIsShow" >
        <div class="toTop-txt">回到顶部</div>
    </div>
</template>

<script>
    export default {
        name: "top-top",
        data(){
            return{
                toTopIsShow:false//控制回到顶部按钮是否显示
            }
        }
        ,
        methods:{
            toTop(){
                if(document.documentElement.scrollTop>0){
                    document.documentElement.scrollTop=0;
                }
            }

        },
        created(){
            var _this=this;
            window.onscroll=function () {
                //鼠标滚轮滚动距离超过10像素时，回到顶部按钮才显示
                if(document.documentElement.scrollTop>10){
                    _this.toTopIsShow=true;
                }else{
                    _this.toTopIsShow=false;
                }
            }
        }
    }
</script>

<style>
.toTop{
    width:1rem;
    height:1rem;
    position: fixed;
    right:0;
    bottom:100px;
    cursor: pointer;
    overflow: hidden;
    background: #000
}
.toTop-txt{
    color:#fff;
    font-size: .3rem;
    position: relative;
    top:70px;
    transition:all .2s linear;
    width:100%;
    height:100%

}
.toTop:hover .toTop-txt{
    top:52px;
}

</style>
