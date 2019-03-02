<template>   
    <div class="cate-list">
        <ul>
            <li>
                <router-link :to="{name:'cateDetails',query:{id:190120}}">
                    <div><img src="https://goods6.juancdn.com/goods/190120/a/2/5c43e3d133b0891db624f8b3_800x800.jpg?imageMogr2/thumbnail/310x310!/quality/88!/format/jpg"></div>
                    <p>
                        <span>￥49</span>
                        <span  class="oldPrice">￥239</span>
                        <span>上新</span>
                    </p>
                    <p>超仙气质网纱连衣裙超仙气质网纱连衣裙</p>
                </router-link>
            </li>
            <li>
                <router-link :to="{name:'cateDetails',query:{id:190120}}">
                    <div><img src="https://goods6.juancdn.com/goods/190120/a/2/5c43e3d133b0891db624f8b3_800x800.jpg?imageMogr2/thumbnail/310x310!/quality/88!/format/jpg"></div>
                    <p>
                        <span>￥49</span>
                        <span class="oldPrice">￥239</span>
                        <span>上新</span>
                    </p>
                    <p>超仙气质网纱连衣裙</p>
                </router-link>
            </li>
            <li>
                <router-link :to="{name:'cateDetails',query:{id:190120}}">
                    <div><img src="https://goods6.juancdn.com/goods/190120/a/2/5c43e3d133b0891db624f8b3_800x800.jpg?imageMogr2/thumbnail/310x310!/quality/88!/format/jpg"></div>
                    <p>
                        <span>￥49</span>
                        <span class="oldPrice">￥239</span>
                        <span>上新</span>
                    </p>
                    <p>超仙气质网纱连衣裙</p>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    
}
</script>

 <style lang="stylus">
.cate-list{
    width:100%;
    height:100%;
}
.cate-list ul{
    width:100%;
    display:flex; 
    justify-content:space-between;
    align-items:center;
    flex-wrap:wrap;
    padding-bottom:1rem;
    li{
        width:49.9%;
        padding-bottom:.1rem;
        div{
            width:3.7rem;
            height:3.8rem;
            img{
                width:100%;
                height:100%;
            }
        }
        p{
            height:.48rem;
            padding:0 .1rem;
        }
        p:first-of-type{
            width:100%;
            display:flex; 
            justify-content:space-between;
            align-items:center;
            span:first-of-type{
                color:#ff464e;
                font-size:.32rem;
            }
            .oldPrice{
                text-decoration:line-through;
            }
            span:last-of-type{
                padding-left:1.4rem;
            }
        } 
        p:last-of-type{
            width:98%;
            color:#333;
            font-size:.2rem;
            overflow: hidden;
            text-overflow:ellipsis;
            white-space:nowrap;
        }
    } 
}
 </style>
 