<template>
  <div class="a-home-page">

    <img class="content-img" src="../../static/images/app-home-content.png" />
    <div class="home-footer">
      <div class="home-btn" @click="viewReport">
        <span>查看我的报告</span>
      </div>
      <div class="home-footer-tips">
        点击“查看我的报告”将允许e看牙总结您的工作信息。
      </div>
    </div>

  </div>
</template>

<script>
import { EventBus } from '@/utils/data.js'

export default {
  name: 'a-home-page',
  data() {
    return {
    }
  },
  created() {

  },
  methods: {
    viewReport() {
      // this.$emit( 'view' )
      EventBus.$emit( 'view' )
    }
  }
}
</script>

<style lang="stylus" scoped>
.content-img
  width 100%
  height 100%
.home-footer
  position absolute
  left 0
  right 0
  bottom 15px
  margin auto
  width 100%
  text-align center
  .home-footer-tips
    color #ffffff
    font-size 12px
    line-height 16px

.home-btn
  width 141px
  height 45px
  margin-bottom  10px
  background-image url('../../static/images/btnBg.png')
  background-size cover
  display inline-flex
  align-items center
  justify-content center
  span
    color #ffffff
    font-size 15px
    line-height 15px
</style>

