<template>
  <div class="first-treat">
    <content-wrap>
      <div slot="title">
        在
        <span class="title-font-big">{{clinic}}</span>
        工作
      </div>
      <div class="first-treat-content">
        <div class="content-font-big time">{{firstTreatDate}}</div>
        <div class="content-font-normal">是TA首次在e看牙接诊的时间</div>
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
      clinic: '',
      firstTreatDate: '',
    }
  },
  components: {
    ContentWrap
  },
  created() {
    EventBus.$on( 'firsttreat', target => {
      this.clinic = target.clinic
      this.firstTreatDate = target.firstTreatDate
    } );
  }
}
</script>

<style lang="stylus" scoped>
.first-treat
  .first-treat-content
    margin-top 28px
    text-align center
  .time
    margin-bottom 22px
</style>

