<template>
  <div class="footer">
    <div class="footer-img">
      <img :src="logoImg">
    </div>
    <div class="footer-slogn">
      <div>＃门诊管理，连锁经营，品牌塑造，智能营销，e看牙更好＃</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'lc-footer',
  data() {
    return {
      logoImg: '/static/images/logo.png',
      arrowImg: '/static/images/arrow.png'
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
      font-size 10px
      font-weight bold
      margin-right -32px
      -webkit-transform scale(0.83)
</style>

