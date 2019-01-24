<template>
  <div class="consultation">
    <content-wrap>
      <div slot="title">
        <span v-if="app">您</span>总共接诊了
        <span class="title-font-big">{{patientCount}}</span>
        次
      </div>
      <div class="consultation-content">
        <div class="content-font-normal">
          累计接诊
          <span class="content-font-big">{{workHours}}</span>
          小时
        </div>
        <div class="content-font-normal content-margin">
          {{personCode}}擅长的项目有：
        </div>
        <template v-if="skilledItems.length > 0">
          <div class="content-dynamic-font-color" v-for="item in skilledItems" :key="item.name">
            {{item.name}}（{{item.count}}）
          </div>
        </template>
        <div class="content-font-normal" v-else>
          小e没有检测到...
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
      patientCount: 0,
      workHours: 0,
      skilledItems: []
    }
  },
  computed: {
    personCode() {
      return this.app ? '您' : 'TA'
    }
  },
  components: {
    ContentWrap
  },
  created() {
    EventBus.$on( 'consultation', target => {
      this.patientCount = target.patientCount
      this.workHours = target.workHours
      this.skilledItems = target.skilledItems
    } );
  }
}
</script>

<style lang="stylus" scoped>
.consultation
  .consultation-content
    margin-top 20px
    .content-margin
      margin-bottom 10px
    >div
      margin-bottom 5px


</style>

