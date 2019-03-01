import Vuex from 'vuex';
import Vue from 'vue'
import home from './home/index'
import registor from './registor/index'
import classify from './classify'
Vue.use(Vuex)
let state={}
let actions={}
let mutations={}
let getters={}
const store = new Vuex.Store({
  state,
  actions,
  mutations,
  getters,
  modules:{
    home,
    registor,
    classify,
  }
})
export default store