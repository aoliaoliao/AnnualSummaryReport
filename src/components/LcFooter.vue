<template>
  <div class="footer">
    <div class="footer-img">
      <img src="../static/images/logo.png">
    </div>
    <div class="footer-slogn">
      <div>＃e看牙，是一种诊所工作方式＃</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'lc-footer',
  data() {
    return {
      logoImg: '../static/images/logo.png'
    }
  }
}
</script>

<style lang="stylus" scoped>
.footer
  position relative
  margin 0 17px
  height 58px
  >div
    position absolute
  img
    width 100%
    height 100%
  .footer-img
    width 46px
    height 58px
    top 0
    left 0
  .footer-slogn
    width 100%
    right 0
    bottom 0
    >div
      text-align right
      color #000
      font-size 12px
      font-weight bold
</style>

