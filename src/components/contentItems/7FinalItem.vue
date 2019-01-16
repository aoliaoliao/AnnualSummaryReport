<template>
  <div class="final-item" :class="{'a_final-item': isInAPP , 'w_final-item': !isInAPP}">
    <content-wrap :show-footer="false">
      <div slot="assist">
        <div class="assist-text" slot="assist">
          <span>和辛勤的自己</span>
          <span v-if="isInAPP">说声谢谢</span>
        </div>
      </div>
      <div v-if="!isInAPP" slot="title">说声辛苦了</div>
      <div class="final-item-content">
        <div class="title-font-normal final-text">
          2019
        </div>
        <div class="title-font-normal">
          e看牙伴您继续前进
        </div>
        <template v-if="!isInAPP">
          <div class="qrImg"><img :src="qrCode"></div>
          <div class="download-tip">下载e看牙App，查看我的报告</div>
        </template>
      </div>
    </content-wrap>
    <div class="home-btn" @click="shareReport" v-if="isInAPP">
      <span>分享我的报告</span>
    </div>
  </div>
</template>

<script>
import ContentWrap from '../ContentWrap'
import { isInEkyApp } from '@/utils/webView'

export default {
  data() {
    return {
      watchCount: 0,
      studyCount: 0,
      qrCode: '/static/images/qrcode.png',
      isInAPP: true
    }
  },
  components: {
    ContentWrap
  },
  mounted() {
    // this.isInAPP = isInEkyApp()
    isInEkyApp().then( () => {
      this.isInAPP = true
    } ).catch( () => {
      this.isInAPP = false
    } )
  },
  methods: {
    shareReport() {
      if ( window.androidBridge ) {
        window.androidBridge.shareTo()
      } else if ( window.iosBridge ) {
        window.iosBridge.shareTo()
      }
    }
  }
}
</script>

<style lang="stylus" scoped>

.final-item
  // display flex
  // flex-direction column
  // justify-content center
  align-items center
  .final-item-content
    margin-top 20px
    text-align center
    >div
      text-align center
      margin-bottom 10px
  .assist-text
    margin-bottom 13px
    display flex
  .final-text
    font-size 20px
    line-height 20px
  .qrImg
    width w=104px
    height w
    margin 0 auto 2.667vw
    img
      width 100%
      height 100%
  .download-tip
    font-size 12px
    color #ffffff
.home-btn
  position absolute
  bottom 41px
  left 0
  right 0
  margin 0 auto
  width 141px
  height 45px
  background-image url('/static/images/btnBg.png')
  background-size cover
  display flex
  align-items center
  justify-content center
  z-index 999
  span
    color #ffffff
    font-size 15px
    line-height 15px
</style>
<style lang="stylus" >
w_top_distance = 15
a_top_distance = 90
.w_final-item
  .content-position
    top 0px + w_top_distance !important
    height 344px - w_top_distance !important
.a_final-item
  .content-position
    top 0px + a_top_distance !important
    height 344px - a_top_distance !important
</style>


