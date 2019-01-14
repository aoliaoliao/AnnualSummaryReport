<template>
  <div class="content-list">
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- <home-page v-show="!isShow" @view="showReport"></home-page> -->
      <swiper-slide>
        <home-page></home-page>
      </swiper-slide>
      <swiper-slide v-for="com in items" :key="com">
        <keep-alive>
          <component :is="com"></component>
        </keep-alive>
      </swiper-slide>
    </swiper>
    <lc-arrow v-show="isShowArrow"></lc-arrow>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import ContentWrap from './ContentWrap'
import LcArrow from './LcArrow'
import HomePage from './HomePage'
import FirstTreat from './contentItems/1FirstTreat'
import Patient from './contentItems/2Patient'
import Consultation from './contentItems/3Consultation'
import Work from './contentItems/4Work'
import Bbs from './contentItems/5Bbs'
import Train from './contentItems/6Train'
import FinalItem from './contentItems/7FinalItem'
import { EventBus } from '@/utils/data.js'

export default {
  name: 'content-list',
  data() {
    const self = this
    return {
      swiperOption: {
        notNextTick: true,
        direction: 'vertical',
        height: window.innerHeight,
        allowSlidePrev: false,
        allowSlideNext: true,
        noSwiping: true,
        noSwipingClass: 'stop-swiping',
        on: {
          slideChange: self.swiperSlideChange,
        },

      },
      items: [ 'FirstTreat', 'Patient', 'Consultation', 'Work', 'Bbs', 'Train', 'FinalItem' ],
      swiper: {},
    }
  },
  computed: {
    activeIndex() {
      return this.swiper.activeIndex
    },
    isShowArrow() {
      const activeIndex = this.swiper.activeIndex
      return activeIndex > 0 && activeIndex < 7
    }
  },
  mounted() {
    this.swiper = this.$refs.mySwiper.swiper
    EventBus.$on( 'view', this.showReport )
  },
  methods: {
    showReport() {
      this.swiper.slideNext( 800 );
    },
    swiperSlideChange( event ) {
      if ( this.activeIndex === 1 ) {
        this.swiper.allowSlidePrev = false
      } else if ( this.activeIndex === this.items.length ) {
        this.swiper.allowSlideNext = false
      } else {
        this.swiper.allowSlidePrev = true
        this.swiper.allowSlideNext = true
      }
    }
  },
  components: {
    swiper,
    swiperSlide,
    LcArrow,
    ContentWrap,
    HomePage,
    FirstTreat,
    Patient,
    Consultation,
    Work,
    Bbs,
    Train,
    FinalItem
  }
}
</script>

<style lang="stylus" scoped>
.content-list
  height 100%
  width 100%
  .swiper-container
    width 100%
    height 100%
  .swiper-slide
    >div
      width 100%
      height 100%
</style>

