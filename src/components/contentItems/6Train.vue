<template>
  <div class="train">
    <content-wrap>
      <div slot="title">
        参与了
        <span class="title-font-big">{{studyCount}}</span>
        次学习课程
      </div>
      <div class="train-content">
        <!-- <div class="content-font-normal">
          购买了
          <span class="content-font-big">{{studyCount}}</span>
          次线下培训
        </div> -->
        <div class="content-font-normal ">
          观看了
          <span class="content-font-big">{{watchCount}}</span>
          次线上直播
        </div>
        <div class="content-font-normal ">
          e看牙 · 培训严选，助您成长多一点
        </div>
      </div>
    </content-wrap>
  </div>
</template>

<script>
import ContentWrap from '../ContentWrap'
import { EventBus } from '@/utils/data.js'

export default {
  data() {
    return {
      watchCount: 0,
      studyCount: 0,
    }
  },
  components: {
    ContentWrap
  },
  created() {
    EventBus.$on( 'train', target => {
      this.watchCount = target.watchCount
      this.studyCount = target.studyCount
    } );
  },
}
</script>

<style lang="stylus" scoped>
.train
  .train-content
    margin-top 26px
    >div
      margin-bottom 8px

</style>

