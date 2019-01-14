<template>
  <div class="index">
    <div>
      <content-list></content-list>
    </div>
  </div>
</template>

<script>
import ContentList from './ContentList'

import { ajax } from '@/utils/http.js'
import { formatMyDate } from '@/utils/tool.js'
import { getUserInfo } from '@/utils/webView.js'
import { EventBus, originData } from '@/utils/data.js'
// https://git.lctest.cn:8001/api/admin2/doctor/user/stat?token=awpB%2FzbFiCA2DYLzxRwQbz50pnhgW7koz2ae6vJJ%2FW%2BG8JadjlKhZf%2FkDhNP0U91

export default {
  name: 'index',
  data() {
    return {
    }
  },
  components: {
    ContentList,
  },
  created() {
    // getUserInfo().then( res => {
    //   getData( res.token )
    // } ).catch( err => {
    //   getData( err.token )
    // } )

    this.getData()
  },
  methods: {

    getData( token ) {
      ajax( 'https://git.lctest.cn:8001/api/admin2/doctor/user/stat', {
        token: 'awpB/zbFiCA2DYLzxRwQbz50pnhgW7koz2ae6vJJ/W+G8JadjlKhZf/kDhNP0U91'
      } ).then( res => {
        const { data = {} } = JSON.parse( res )
        this.formatName( data )
        this.formatFirstTreat( data )
        this.formatPatient( data )
        this.formatConsultation( data )
        this.formatWork( data )
        this.formatBbs( data )
        this.formatTrain( data )

      } ).catch( err => {
        // 获取数据错误
        console.log( '获取数据错误', err )
      } )
    },
    formatName( res ) {
      const { saas = {} } = res
      const { name = '' } = saas
      EventBus.$emit( 'name', {
        name
      } )
    },
    formatFirstTreat( res ) {
      const { saas = {} } = res
      const { clinic = '', firstTreatDate = '' } = saas
      EventBus.$emit( 'firsttreat', {
        clinic,
        firstTreatDate: this.formatDate( firstTreatDate )
      } )
    },
    formatPatient( res ) {
      const { saas = {} } = res
      const { treatmentCompletedCount = 0, maleCount = 0, femaleCount = 0, patientAgeRanges = [] } = saas

      patientAgeRanges.forEach( ( v, index ) => {
        originData.saas.patientAgeRanges[ index ].count = v.count
      } )
      EventBus.$emit( 'patient', {
        treatmentCompletedCount,
        maleCount,
        femaleCount,
        patientAgeRanges: originData.saas.patientAgeRanges
      } )
    },
    formatConsultation( res ) {
      const { saas = {} } = res
      const { patientCount = 0, workHours = 0, skilledItems = [] } = saas

      EventBus.$emit( 'consultation', {
        patientCount,
        workHours,
        skilledItems,
      } )
    },
    formatWork( res ) {
      const { saas = {} } = res
      const { treatmentCompletedDays = 0, workLateDays = 0, workLastTime = '', workLastOperation = '' } = saas

      EventBus.$emit( 'work', {
        treatmentCompletedDays,
        workLateDays,
        workLastOperation,
        workLastTime: this.formatDate( workLastTime )
      } )
    },
    formatBbs( res ) {
      const { bbs = {} } = res
      EventBus.$emit( 'bbs', {
        ...originData.bbs,
        ...bbs
      } )
    },
    formatTrain( res ) {
      const { train = {} } = res
      EventBus.$emit( 'train', {
        ...originData.train,
        ...train
      } )
    },




    formatDate( date ) {
      if ( !date ) return ''
      return formatMyDate( date )
    }
  }
}
</script>

<style lang="stylus" scoped>
.index
  background #ffffff
  overflow hidden
  width 100%
  height 100%


</style>

