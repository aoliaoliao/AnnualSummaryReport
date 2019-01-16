<template>
  <div class="content-wrap">
    <div class="title">
      <img :src="titleImg">
    </div>
    <div class="content-wrap-body" ref="wrapBody">
      <img :src="contentImg">
      <div class="content-item content-position">
        <div class="item-title title-font-normal">
          <span class="title-year">2018</span>
          <slot name="assist">
            <span class="title-name">{{userName}}</span>
          </slot>
          <slot name="title"></slot>
        </div>
        <div class="split-line">
        </div>
        <div>
          <slot></slot>
        </div>
      </div>
    </div>
    <div class="content-footer" v-if="showFooter">
      <lc-footer></lc-footer>
    </div>

  </div>
</template>

<script>
import { EventBus } from '@/utils/data.js'
import LcFooter from './LcFooter'

export default {
  name: 'content-wrap',
  props: {
    showFooter: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      contentImg: '/static/images/contentBg.png',
      titleImg: '/static/images/title.png',
      userName: ''
    }
  },
  components: {
    LcFooter
  },
  created() {
    EventBus.$on( 'name', target => {
      this.userName = target.name
    } );
  },
  methods: {
  }
}
</script>

<style lang="stylus" scoped>
top_distance = 36px
content_W = 321px
content_H = 344px

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
  background-image url('/static/images/wrapBg.jpg')
  background-size cover
  flex-layout()
.title
  padding-top 32px
  text-align center
  width 312px
  // height 65px
  img
    width 100%
    height 100%

.content-wrap-body
  // margin-top top_distance
  position relative
  margin-top 14px
  width content_W
  height content_H
  img
    width 100%
    height 100%
  .content-position
    position absolute
    left 0
    top 0px + top_distance
    width content_W
    height content_H - top_distance
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

