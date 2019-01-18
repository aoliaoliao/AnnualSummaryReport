<template>
  <div class="patient">
    <content-wrap>
      <div slot="title">
        为
        <span class="title-font-big">{{treatmentCompletedCount}}</span>
        位患者带去健康笑容
      </div>
      <div class="patient-content" v-if="isShowData">
        <div class="content-font-normal">
          男女比例
          <span class="content-font-big">{{maleCount}}：{{femaleCount}}</span>
        </div>
        <div class="content-font-normal" v-for="item in patientAgeRanges" :key="item.desc">
          {{item.desc}}：
          <span class="content-font-normal-color">{{item.count}}</span>
        </div>
      </div>
      <div class="patient-content" v-else>
        <div class="content-font-normal">
          2019年，
        </div>
        <div class="content-font-normal">
          别忘记录入患者
        </div>
        <div class="content-font-normal">
          性别和年龄信息哦
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
  },
  computed: {
    sexRatio() {
      if ( this.maleCount === 0 || this.femaleCount === 0 ) {
        return `${this.maleCount} : ${this.femaleCount}`
      } else {
        const ratio = ( this.femaleCount / this.maleCount ).foFixed( 1 )
        return `1 : ${ratio}`
      }
    },
    isShowData() {
      if ( this.patientAgeRanges.some( v => v.count > 0 ) || ( this.femaleCount + this.maleCount ) > 0 ) {
        return true
      } else {
        return false
      }
    }
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

