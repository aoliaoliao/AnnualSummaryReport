<template>
  <div class="work">
    <content-wrap :night-bg="true">
      <div slot="title">
        <span v-if="app">您</span>有
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
          {{personCode}}还在e看牙处理工作；
        </div>
        <template v-if="workLateDays > 0">
          <div class="content-font-big ">
            {{workLastDate}}
          </div>
          <div class="content-font-normal">
            {{personCode}}工作到很晚
          </div>
          <div class="content-font-normal">
            <span class="content-font-big">{{workLastMinute}}</span>
            分，{{personCode}}还在
            <span class="content-font-normal-color">{{workLastOperation}}</span>
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
  props: {
    app: {
      type: Boolean,
      default: false
    }
  },
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
        return formatMyDate( tmp, 'hh:mm' )
      } else {
        return ''
      }
    },
    personCode() {
      return this.app ? '您' : 'TA'
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

