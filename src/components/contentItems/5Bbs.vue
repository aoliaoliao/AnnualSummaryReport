<template>
  <div class="bbs">
    <content-wrap>
      <div slot="title">
        <span v-if="app">您</span>在社区分享了
        <span class="title-font-big">{{caseCount}}</span>
        次病历
      </div>
      <div class="bbs-content">
        <div class="content-font-normal">
          为
          <span class="content-font-big">{{likeCount}}</span>
          个病历点赞
        </div>
        <div class="content-font-normal ">
          关注了
          <span class="content-font-big">{{followCount}}</span>
          位同行
        </div>
        <div class="content-font-normal ">
          参与了
          <span class="content-font-big">{{followCount}}</span>
          次评论互动
        </div>
        <div class="content-font-normal ">
          每一次交流，都是灵感的花火
        </div>
      </div>
    </content-wrap>
  </div>
</template>

<script>
import ContentWrap from '../ContentWrap'
import { EventBus } from '@/utils/data.js'

export default {
  props: {
    app: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      likeCount: 0,
      commentCount: 0,
      followCount: 0,
      caseCount: 0,
    }
  },
  components: {
    ContentWrap
  },
  created() {
    EventBus.$on( 'bbs', target => {
      this.likeCount = target.likeCount
      this.commentCount = target.commentCount
      this.followCount = target.followCount
      this.caseCount = target.caseCount
    } );
  },
}
</script>

<style lang="stylus" scoped>
.bbs
  .bbs-content
    margin-top 26px
    >div
      margin-bottom 8px

</style>

