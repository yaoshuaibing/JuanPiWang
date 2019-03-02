import http from "../utils/http";
//分类主页面接口：
//https://m.juanpi.com/index/getMenu?select=2_1&zhouyi_ids=c4_l4_0
export const ClassifyData = (tid)=>http('get','/capi/index/getMenu',{
    select:"2_1",
    zhouyi_ids:"c4_l4_0",
})
//分类详情页接口：
//https://m.juanpi.com/cate/subcatelist?cate_id=1278&pf=8&area=4&bi=222&source=null&front_cid=null
export const ClassifyCateData = ()=>http('get','/capi/cate/subcatelist',{
    cate_id: "1278",
    pf: "8",
    area: "4",
    bi: "222"
    // source: "null",
    // front_cid: "null",
})

   
