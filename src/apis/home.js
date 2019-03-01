import http from "../utils/http"
//获取顶部广告数据
export const HomeData=(params)=>http("get","/api/jas/pagetag/page?unique=topbanner&cat_name=newest_zhe&zy_ids=c4_l4&platform=m",params)
//获取banner数据
export const HomeDataBanner=(params)=>http("get","/api/api/getIndexNavSkip?page=1&zy_ids=p8_c4_l4&app_name=zhe&catname=newest_zhe",params)

export const HomeDataGoods=(params)=>http("get","/api/api/getGoods?page=1&zy_ids=p8_c4_l4&app_name=zhe&catname=tab_hpzc&flag=tab_hpzc",params)
