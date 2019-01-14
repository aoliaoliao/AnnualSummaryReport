<template>
  <div class="home-page">
    <!-- <img class=""> -->
    <div class="user-info">
      <img v-lazy="avatar">
      <span>用户昵称</span>
    </div>
    <img class="content-img" src="/static/images/homeContent.png" />
    <div class="home-btn" @click="viewReport">
      <span>查看TA的报告</span>
    </div>
  </div>
</template>

<script>
import { EventBus } from '@/utils/data.js'

export default {
  name: 'w-home-page',
  data() {
    return {
      avatar: '/static/images/logo.png'
    }
  },
  created() {

  },
  methods: {
    viewReport() {
      // this.$emit( 'view' )
      EventBus.$emit('view')
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
  text-align center
.content-img
  margin-top 12px
  width 288px
  height 384px
.user-info
  padding-top 13px
  display flex
  flex-direction column
  align-items center
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
  width 141px
  height 45px
  background-image url('/static/images/btnBg.png')
  background-size cover
  display inline-flex
  align-items center
  justify-content center
  span
    color #ffffff
    font-size 15px
    line-height 15px
</style>

