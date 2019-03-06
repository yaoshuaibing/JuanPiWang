<template>
    <div class="toTop" @click="toTop" v-show="toTopIsShow" >
        回到顶部
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
    background: #fff;
    border: 1px solid #cdcdcd;
    font-size:.22rem;
    text-align:center;
    line-height:1rem;
}

</style>
