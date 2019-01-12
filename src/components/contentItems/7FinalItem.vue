<template>
  <div class="final-item">
    <content-wrap>
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
  </div>
</template>

<script>
import ContentWrap from '../ContentWrap'

export default {
  data() {
    return {
      watchCount: 0,
      studyCount: 0,
      qrCode: '/static/images/qrcode.png'
    }
  },
  components: {
    ContentWrap
  }
}
</script>

<style lang="stylus" scoped>

.final-item
  // margin-top 20px
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

</style>
<style lang="stylus" >
top_distance = 15
.final-item
  .content-position
    top 123px + top_distance !important
    height 341px + top_distance !important
</style>


