<template>
  <div class="registor">
    <ju-reg></ju-reg>
    <div class="reg">
      <mt-field v-model="username" placeholder="手机号/邮箱/用户名"></mt-field>
      <mt-field v-model="password" placeholder="密码" type="password"></mt-field>
      <mt-button @click="onLogin" type="primary" size="large">登录</mt-button>
    </div>
  </div>
</template>

<script>
import JuReg from './components/JuReg'
import { MessageBox } from 'mint-ui'
import Vuex from 'vuex'

export default {
  name: 'register',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  components: {
    JuReg
  },
  methods: {
    ...Vuex.mapMutations({    
      toggleTabbar:"registor/toggleTabbar"
      }),
    onLogin () {
      if (this.password === '' || this.username === '') {
        MessageBox('提示', '用户名或密码不能为空')
        return false
      } else {
        window.localStorage.setItem('username', JSON.stringify(this.username))
        this.$router.history.push('/home')
      }
    }
  },
  mounted () {
    this.toggleTabbar(false)
  },
  beforeDestroy () {
    this.toggleTabbar(true)
  }
}
</script>

<style lang="stylus" scoped>
body,html
  height:100%
  background :#eee
.registor
  div
    .mint-header
      height:1rem
      font-size :.34rem
    .is-right
      width:.8rem
      height:100%
      .mint-button
        height:100%
  .reg
    .mint-cell
      margin-top:.2rem
      height: .8rem
      border-bottom:1px solid #ccc
      font-size :.4rem 
      input 
        height:.8rem
        font-size: .34rem;   
      input::-webkit-input-placeholder     
       font-size: .34rem;   
    .mint-button
      height: .8rem
      margin-top:.2rem
      font-size:.34rem
.mint-msgbox-title
  font-size:.34rem
.mint-msgbox-message
  font-size:.26rem
.mint-msgbox-btn
  font-size:.26rem


</style>