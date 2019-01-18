<template>
  <div class="footer">
    <div class="footer-img">
      <img src="../static/images/lc-footer.png">
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
  margin 40px auto 0
  display flex
  justify-content center
  .footer-img
    width 150px
    height 45px
  img
    width 100%
    height 100%
</style>

