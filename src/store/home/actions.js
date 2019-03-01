import {HomeData,HomeDataBanner,HomeDataGoods} from "../../apis/home"
export default{
  async handleHomedata({commit}){
      let data = await HomeData({
        params:{
        unique: "topbanner",
        cat_name: "newest_zhe",
        zy_ids: "c4_l4",
        platform: "m"
      }
    })  
    
     commit("handleHomedata",data.data.data)    
  },
  async handleHomedataBanner({commit}){
    let data = await HomeDataBanner({params:{
        page: "1",
        zy_ids: "p8_c4_l4",
        app_name: "zhe",
        catname: "newest_zhe"
      }
    })
    commit("handleHomedataBanner",data.adsRes.slide_ads.config.slide)    
  },
  async handleHomedataGoods({commit}){
    let data = await HomeDataGoods({params:{
      page: "1",
      zy_ids: "p8_c4_l4",
      app_name: "zhe",
      catname: "tab_hpzc",
      flag:"tab_hpzc",
    }
  })
  commit("handleHomedataGoods",data.data.goods)
  console.log(data.data.goods)
  }
}