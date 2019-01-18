<template>
  <div class="home-page">
    <!-- <img class=""> -->
    <div class="user-info">
      <div class="avatar"><img :src="avatar"></div>
      <span>{{name}}</span>
    </div>
    <div class="content-img">
      <img src="../../static/images/homeContent.png" />
    </div>
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
      avatar: './static/images/avatar.png',
      gender: '',
      name: ''
    }
  },
  created() {
    EventBus.$on( 'user', ( user ) => {
      // this.avatar = user.avatar || './static/images/avatar.png'
      this.gender = user.gender
      this.name = user.name
      if ( user.avatar ) {
        this.avatar = user.avatar
      } else {
        this.avatar = './static/images/avatar.png'
      }
    } )
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
.home-page
  width 100%
  height 100%
  background-image url('../../static/images/homeBg.jpg')
  background-size cover
  text-align center
.content-img
  // margin-top 12px
  margin 12px auto 0
  width 288px
  height 384px
  img
    width 100%
    height 100%
.user-info
  padding-top 13px
  display flex
  flex-direction column
  align-items center
  .avatar
    width w = 63px
    height w
    margin-bottom 11px
    border-radius 50%
    border 1px solid #000000
    overflow hidden
    img
      width 100%
      height 100%
  span
    color #14324F
    font-size 12px
.home-btn
  width 141px
  height 45px
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

