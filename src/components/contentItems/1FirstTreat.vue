<template>
  <div class="first-treat">
    <content-wrap>
      <div class="clinic-name" slot="title">
        <span v-if="app">您</span>在
        <span class="title-font-big">{{clinicsName}}</span>
        工作
      </div>

      <div class="first-treat-content">
        <div class="content-font-big time ">{{firstTreatDate}}</div>
        <div class="content-font-normal">是{{personCode}}首次在e看牙接诊的时间</div>
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
      clinics: [],
      firstTreatDate: '',
    }
  },
  components: {
    ContentWrap
  },
  computed: {
    clinicsName() {
      let name = this.clinics.join( '，' )
      return name
    },
    personCode() {
      return this.app ? '您' : 'TA'
    }
  },
  mounted() {
    EventBus.$on( 'firsttreat', target => {
      this.clinics = target.clinics
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
  .clinic-name
    text-align center
    margin 0 10px
    line-height 32px
</style>

