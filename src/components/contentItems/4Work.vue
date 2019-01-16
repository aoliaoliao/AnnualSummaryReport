<template>
  <div class="work">
    <content-wrap>
      <div slot="title">
        有
        <span class="title-font-big">{{treatmentCompletedDays}}</span>
        天在工作中度过
      </div>
      <div class="work-content">
        <div class="content-font-normal">
          有
          <span class="content-font-big">{{workLateDays}}</span>
          天，晚上8点到凌晨5点间，
        </div>
        <div class="content-font-normal ">
          TA还在e看牙处理工作；
        </div>
        <template v-if="workLateDays > 0">
          <div class="content-font-big ">
            {{workLastDate}}
          </div>
          <div class="content-font-normal">
            TA工作到很晚
          </div>
          <div class="content-font-normal">
            <span class="content-font-big">{{workLastMinute}}</span>分，您还在{{workLastOperation}}
          </div>
        </template>

      </div>
    </content-wrap>
  </div>
</template>

<script>
import ContentWrap from '../ContentWrap'
import { EventBus } from '@/utils/data.js'
import { formatMyDate } from '@/utils/tool.js'

export default {
  data() {
    return {
      treatmentCompletedDays: 0,
      workLateDays: 0,
      workLastTime: '',
      workLastOperation: ''
    }
  },
  computed: {
    workLastDate() {
      if ( this.workLastTime ) {
        const tmp = this.workLastTime.replace( /-/g, '/' )
        return formatMyDate( tmp, 'yyyy.MM.dd' )
      } else {
        return ''
      }
    },
    workLastMinute() {
      if ( this.workLastTime ) {
        const tmp = this.workLastTime.replace( /-/g, '/' )
        return formatMyDate( tmp, 'mm' )
      } else {
        return ''
      }
    }
  },
  components: {
    ContentWrap
  },
  created() {
    EventBus.$on( 'work', target => {
      this.treatmentCompletedDays = target.treatmentCompletedDays
      this.workLateDays = target.workLateDays
      this.workLastOperation = target.workLastOperation
      this.workLastTime = target.workLastTime
    } );
  },
}
</script>

<style lang="stylus" scoped>
.work
  .work-content
    margin-top 26px
    >div
      margin-bottom 8px

</style>

