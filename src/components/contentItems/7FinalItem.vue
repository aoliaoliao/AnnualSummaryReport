<template>
  <div class="final-item">
    <content-wrap :show-footer="false">
      <div class="assist-text" slot="assist">和辛勤的</div>
      <div slot="title">说声辛苦了</div>
      <div class="final-item-content">
        <div class="title-font-normal final-text">
          2019
        </div>
        <div class="title-font-normal">
          e看牙伴您继续前进
        </div>
        <img class="img" v-lazy="qrCode">
        <div class="download-tip">下载e看牙App，查看我的报告</div>
      </div>
    </content-wrap>
    <div class="home-btn" @click="shareReport" v-if="isShowBtn">
      <span>分享我的报告</span>
    </div>
  </div>
</template>

<script>
import ContentWrap from '../ContentWrap'

export default {
  data() {
    return {
      watchCount: 0,
      studyCount: 0,
      qrCode: '/static/images/qrcode.png',
      isShowBtn: false
    }
  },
  components: {
    ContentWrap
  },
  mounted() {
    this.isShowBtn = false
  },
  methods: {
    shareReport() {

    }
  }
}
</script>

<style lang="stylus" scoped>

.final-item
  display flex
  justify-content center
  .final-item-content
    margin-top 20px
    text-align center
    >div
      text-align center
      margin-bottom 10px
  .assist-text
    margin-bottom 13px
  .final-text
    font-size 20px
    line-height 20px
  .img
    width w=104px
    height w
  .download-tip
    font-size 8px
    color #ffffff
    -webkit-transform scale(0.67)
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
<style lang="stylus" >
top_distance = 15
.final-item
  .content-position
    top 0px + top_distance !important
    height 344px - top_distance !important
</style>


