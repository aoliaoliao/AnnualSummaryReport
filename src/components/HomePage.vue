<template>
  <div class="home-page">
    <!-- <img class=""> -->
    <img class="content-img" src="/static/images/homeContent.png" />
    <div class="content-info">
      <div class="user-info">
        <img v-lazy="avatar">
        <span>用户昵称</span>
      </div>
      <div class="home-btn" @click="viewReport">
        <span>查看TA的报告</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      avatar: '/static/images/logo.png'
    }
  },
  created() {

  },
  methods: {
    viewReport() {
      this.$emit( 'view' )
    }
  }
}
</script>

<style lang="stylus" scoped>
.home-page
  width 100%
  height 100%
  background-image url('/static/images/homeBg.jpg')
  background-size cover
.content-img
  position absolute
  top 0
  width 100%
  height 100%
  z-index 1
.content-info
  position relative
  width 100%
  height 100%
  z-index 2
  display flex
  flex-direction column
  align-items center
.user-info
  margin-top 25px
  text-align center
  display flex
  flex-direction column
  img
    width w = 63px
    height w
    margin-bottom 11px
    border-radius 50%
    border 1px solid #000000
    overflow hidden
  span
    color #14324F
    font-size 12px
.home-btn
  position absolute
  bottom 41px
  width 141px
  height 45px
  background-image url('/static/images/btnBg.png')
  background-size cover
  display flex
  align-items center
  justify-content center
  span
    color #ffffff
    font-size 15px
    line-height 15px
</style>

