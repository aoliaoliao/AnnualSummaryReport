<template>
  <div class="index">
    <div v-show="!isLoading">
      <content-list :app="isInApp"></content-list>
    </div>
    <div class="loading-wrap" v-show="isLoading">
      <div class="ball-pulse-sync">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>

  </div>
</template>

<script>
import ContentList from './ContentList'

import { ajax } from '@/utils/http.js'
import { formatMyDate } from '@/utils/tool.js'
import { getUserInfo, isInEkyApp } from '@/utils/webView.js'
import { EventBus, originData } from '@/utils/data.js'
// https://git.lctest.cn:8001/api/admin2/doctor/user/stat?token=awpB%2FzbFiCA2DYLzxRwQbz50pnhgW7koz2ae6vJJ%2FW%2BG8JadjlKhZf%2FkDhNP0U91

export default {
  name: 'index',
  data() {
    return {
      isLoading: true,
      isInApp: false,
      msg: ''
    }
  },
  components: {
    ContentList
  },
  created() {
    // this.msg = window.location || 'nothing'
    isInEkyApp().then( res => {
      this.isInApp = true
    } ).catch( err => {
      this.isInApp = false
    } )

  },
  mounted() {
    const token = getUserInfo()
    this.getData( token )

    // this.getData()
  },
  methods: {
    getApiBaseURL() {
      var apiBaseUrl = document.location.protocol + "//" + document.location.hostname + ":8001";
      if ( apiBaseUrl.indexOf( 'http://localhost' ) != -1 || apiBaseUrl.indexOf( '192.168.' ) != -1 )
        apiBaseUrl = "https://git.lctest.cn:8001";
      return apiBaseUrl;
    },
    getData( token ) {
      this.isLoading = true
      let apiBaseUrl = this.getApiBaseURL()
      let url = `${apiBaseUrl}/api/admin2/doctor/user/stat`

      ajax( url, {
        // token: 'awpB/zbFiCA2DYLzxRwQbz50pnhgW7koz2ae6vJJ/W+G8JadjlKhZf/kDhNP0U91'
        token
      } ).then( ( res = "{}" ) => {
        this.isLoading = false
        this.$nextTick( () => {
          let { data = {} } = JSON.parse( res )
          if ( !data ) {
            EventBus.$emit( 'hidden', 0, 1, 2, 3, 4, 5 )
            return
          }
          this.formatUser( data )
          this.formatName( data )
          this.formatFirstTreat( data )
          this.formatPatient( data )
          this.formatConsultation( data )
          this.formatWork( data )
          this.formatBbs( data )
          this.formatTrain( data )
        } )
      } ).catch( err => {
        // 获取数据错误
        this.isLoading = false
        this.$nextTick( () => {
          EventBus.$emit( 'hidden', 0, 1, 2, 3, 4, 5 )
        } )
      } )
    },
    formatUser( res ) {
      const { user = {}, saas = {} } = res
      const { avatar = '', gender } = user
      EventBus.$emit( 'user', {
        avatar,
        gender,
        name: saas.name || ''
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
      const { clinics = [], firstTreatDate = '' } = saas

      if ( clinics.length > 0 || firstTreatDate ) {
        EventBus.$emit( 'firsttreat', {
          clinics,
          firstTreatDate: this.formatDate( firstTreatDate )
        } )
      } else {
        EventBus.$emit( 'hidden', 0 )
      }
    },
    formatPatient( res ) {
      const { saas = {} } = res
      const { treatmentCompletedCount = 0, maleCount = 0, femaleCount = 0, patientAgeRanges = [] } = saas

      if ( treatmentCompletedCount === 0 ) {
        EventBus.$emit( 'hidden', 1 )
        return
      }

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

      if ( patientCount === 0 ) {
        EventBus.$emit( 'hidden', 2 )
        return
      }

      EventBus.$emit( 'consultation', {
        patientCount,
        workHours,
        skilledItems,
      } )
    },
    formatWork( res ) {
      const { saas = {} } = res
      const { treatmentCompletedDays = 0, workLateDays = 0, workLastTime = '', workLastOperation = '' } = saas

      if ( treatmentCompletedDays === 0 ) {
        EventBus.$emit( 'hidden', 3 )
        return
      }

      EventBus.$emit( 'work', {
        treatmentCompletedDays,
        workLateDays,
        workLastOperation,
        workLastTime: this.formatDate( workLastTime )
      } )
    },
    formatBbs( res ) {
      const { bbs = {} } = res

      if ( Object.keys( bbs ) === 0 || Object.values( bbs ).every( v => v === 0 ) ) {
        EventBus.$emit( 'hidden', 4 )
        return
      }

      EventBus.$emit( 'bbs', {
        ...originData.bbs,
        ...bbs
      } )
    },
    formatTrain( res ) {
      const { train = {} } = res

      if ( Object.keys( train ) === 0 || Object.values( train ).every( v => v === 0 ) ) {
        EventBus.$emit( 'hidden', 5 )
        return
      }
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
  background #ccc
  overflow hidden
  width 100%
  height 100%
</style>

<style>
.loading-wrap {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.ball-pulse-sync {
  text-align: center;
}
.ball-pulse-sync > div {
  background-color: #fff;
  width: 15px;
  height: 15px;
  border-radius: 100%;
  margin: 2px;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  display: inline-block;
}

.ball-pulse-sync > div:nth-child(1) {
  -webkit-animation: ball-pulse-sync 0.6s -0.14s infinite ease-in-out;
  animation: ball-pulse-sync 0.6s -0.14s infinite ease-in-out;
}

.ball-pulse-sync > div:nth-child(2) {
  -webkit-animation: ball-pulse-sync 0.6s -0.07s infinite ease-in-out;
  animation: ball-pulse-sync 0.6s -0.07s infinite ease-in-out;
}

.ball-pulse-sync > div:nth-child(3) {
  -webkit-animation: ball-pulse-sync 0.6s 0s infinite ease-in-out;
  animation: ball-pulse-sync 0.6s 0s infinite ease-in-out;
}

@keyframes ball-pulse-sync {
  33% {
    -webkit-transform: translateY(10px);
    transform: translateY(10px);
  }
  66% {
    -webkit-transform: translateY(-10px);
    transform: translateY(-10px);
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
}
</style>
