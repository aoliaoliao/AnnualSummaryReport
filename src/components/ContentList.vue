<template>
  <div class="content-list">
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- <home-page v-show="!isShow" @view="showReport"></home-page> -->
      <swiper-slide>
        <home-page></home-page>
      </swiper-slide>
      <swiper-slide v-for="com in activeComponents" :key="com">
        <keep-alive>
          <component :is="com"></component>
        </keep-alive>
      </swiper-slide>
      <swiper-slide v-if="activeComponents.length !== 0 ">
        <final-item></final-item>
      </swiper-slide>
    </swiper>
    <lc-arrow v-show="isShowArrow"></lc-arrow>
    <none-dialog v-model="showDialog"></none-dialog>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import NoneDialog from './NoneDialog'
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
      items: [ 'FirstTreat', 'Patient', 'Consultation', 'Work', 'Bbs', 'Train' ],
      hiddenComponents: [],
      swiper: {},
      showDialog: false
    }
  },
  computed: {
    activeIndex() {
      return this.swiper.activeIndex
    },
    isShowArrow() {
      const activeIndex = this.swiper.activeIndex
      return activeIndex > 0 && activeIndex <= this.activeComponents.length
    },
    activeComponents() {
      return this.items.filter( ( v, index ) => this.hiddenComponents.indexOf( index ) === -1 )
    }
  },
  created() {
    EventBus.$on( 'hidden', ( index ) => {
      this.hiddenComponents.push( index )
    } )
  },
  mounted() {
    this.swiper = this.$refs.mySwiper.swiper
    EventBus.$on( 'view', this.showReport )
  },
  methods: {
    showReport() {
      if ( this.activeComponents.length >= 0 ) {
        this.showDialog = true
      } else {
        this.swiper.slideNext( 800 );
      }
    },
    swiperSlideChange( event ) {
      if ( this.activeIndex === 1 ) {
        this.swiper.allowSlidePrev = false
      } else if ( this.activeIndex === this.activeComponents.length + 1 ) {
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
    NoneDialog,
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

