export default {
  handleHomedata(state,data){
    state.topbanner=data.topbanner
  },
  handleHomedataBanner(state,data){
    state.slide=data
  },
  handleHomedataGoods(state,data){
    state.goods=data
  }
}