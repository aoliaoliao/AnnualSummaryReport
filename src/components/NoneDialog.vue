<template>
  <div class="none-dialog" v-if="visible">
    <div class="dialog-wrap">
      <div class="dialog-content">
        <div class="text-row">很遗憾</div>
        <div class="text-row-margin">小e没有获取到{{personCode}}2018年的工作数据。</div>
        <div class="tips">
          <div class="quote quote_left"></div>
          <div>本报告仅面向有预约数据的e看牙医生角色哦</div>
          <div class="quote quote_right"></div>
        </div>
      </div>
      <div class="dialog-btn" @click="closeDialog">
        <span>我知道了</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'none-dialog',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    app: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    visible: {
      get: function () {
        return this.value
      },
      set: function ( v ) {
        this.$emit( 'input', v )
      }
    },
    personCode() {
      return this.app ? '您' : 'TA'
    }
  },
  methods: {
    closeDialog() {
      this.visible = false
    }
  }
}
</script>

<style lang="stylus" scoped>
.none-dialog
  position fixed
  left 0
  top 0
  width 100%
  height 100%
  z-index 999
  background-color rgba(0,0,0,0.6)
  display flex
  align-items center
  justify-content center
.dialog-wrap
  height 247px
  width 300px
  position relative
  background-image url('../static/images/dialogBg.png')
  background-size cover
  text-align center
.dialog-content
  height 203px
  color #2C3143
  font-size 14px
  border-top 1px solid transparent
  .text-row
    margin-top 26px
  .text-row-margin
    margin-bottom 20px
    margin-top 9px
  .tips
    font-size 12px
    display inline-flex
    flex-direction column
    align-items center
  .quote
    width 7px
    height 7px
    background-size cover
  .quote_left
    align-self flex-start
    text-align left
    background-image url('../static/images/quote_left.png')
  .quote_right
    align-self flex-end
    text-align right
    background-image url('../static/images/quote_right.png')
.dialog-btn
  position absolute
  height 44px
  width 100%
  display flex
  justify-content center
  align-items center
  span
    color #00A6C9
    line-height 25px
    font-size 15px
</style>
