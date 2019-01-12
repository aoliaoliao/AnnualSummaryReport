<template>
  <div class="content-wrap">
    <div aspectratio w-375-540 class="content-wrap-body" ref="wrapBody">
      <img aspectratio-content v-lazy="contentImg">
      <div class="content-item content-position">
        <div class="item-title title-font-normal">
          <span class="title-year">2018</span>
          <slot name="assist">
          </slot>
          <span class="title-name">{{userName}}</span>
          <slot name="title"></slot>
        </div>
        <div class="split-line">
        </div>
        <div>
          <slot></slot>
        </div>
      </div>
    </div>
    <div class="content-footer">
      <lc-footer></lc-footer>
    </div>

  </div>
</template>

<script>
import { EventBus } from '@/utils/data.js'
import LcFooter from './LcFooter'

export default {
  name: 'content-wrap',
  data() {
    return {
      contentImg: '/static/images/content.png',
      userName: 'e看牙用户'
    }
  },
  components: {
    LcFooter
  },
  created() {
    EventBus.$on( 'name', target => {
      this.userName = target.name
    } );
    this.$nextTick( this.adjustWrapBody )
  },
  methods: {
    adjustWrapBody() {
      // window.alert( `${document.body.clientWidth} - ${document.body.clientHeight}` )
      const standard = 375 / 667
      const local = document.body.clientWidth / document.body.clientHeight

      if ( standard < local ) {
        const ratio = document.body.clientHeight / 667
        const translateY = 540 - ( 540 * ratio )
        this.$refs[ 'wrapBody' ].style.transform = `scale(${ratio}) translateY( ${-translateY / 2}px)`
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
top_distance = 36px

flex-layout()
  display flex
  flex-direction column
  align-items center
[w-375-540]
  aspect-ratio: '375:540';
.content-wrap
  width 100%
  height 100%
  position relative
  // display flex
  // flex-direction column
  // justify-content space-between
.content-wrap-body
  // margin-top top_distance
  position relative
  width 375px
  .content-position
    position absolute
    left 31px
    top 123px + top_distance
    width 319px
    height 341px - top_distance
  .content-item
    overflow hidden
    flex-layout()
  .item-title
    flex-layout()
  .title-year
    font-size 20px
    line-height 20px
    margin-bottom 10px
  .title-name
    margin-bottom 13px

.split-line
  width 38px
  height 4px
  background #ffffff
  margin 19px 0 0
.content-footer
  padding-bottom top_distance
  position absolute
  bottom 0
  width 100%
</style>

