<template>
  <div class="patient">
    <content-wrap>
      <div slot="title">
        为
        <span class="title-font-big">{{treatmentCompletedCount}}</span>
        位患者带去健康笑容
      </div>
      <div class="patient-content">
        <div class="content-font-normal">
          男女比例
          <span class="content-font-big">{{maleCount}}：{{femaleCount}}</span>
        </div>
        <div class="content-font-normal" v-for="item in patientAgeRanges" :key="item.desc">
          {{item.desc}}：
          <span class="content-font-normal-color">{{item.count}}</span>
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
      treatmentCompletedCount: 0,
      maleCount: 0, // 男患者数 ,
      femaleCount: 0, // 女患者数 ,
      patientAgeRanges: []
    }
  },
  components: {
    ContentWrap
  },
  created() {
    EventBus.$on( 'patient', target => {
      this.treatmentCompletedCount = target.treatmentCompletedCount
      this.maleCount = target.maleCount
      this.femaleCount = target.femaleCount
      this.patientAgeRanges = target.patientAgeRanges
    } );
  }
}
</script>

<style lang="stylus" scoped>
.patient
  .patient-content
    margin-top 23px
    >div
      margin-bottom 8px

</style>

