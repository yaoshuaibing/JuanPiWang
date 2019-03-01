<template>
  <div>
    <mt-header title="登录">
      <div @click="onBack" slot="left">
        <mt-button icon="back"></mt-button>
      </div>
      <mt-button slot="right">注册</mt-button>
    </mt-header>
  </div>
</template>

<script>
export default {
  name: 'register',
  methods: {
    onBack () {
      this.$router.history.go(-1)
    }
  }
}
</script>

<style  scoped >
.mint-header {
  background: url('https://jp.juancdn.com/jpwebapp_v1/images_v1/user/user_center_bg.png') no-repeat;
  background-size: 100% 100%;
  font-size: 16px;
}
</style>
