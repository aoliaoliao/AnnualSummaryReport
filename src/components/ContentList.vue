<template>
  <div class="content-list">
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide v-for="com in items" :key="com">
        <keep-alive>
          <component :is="com"></component>
        </keep-alive>
      </swiper-slide>
    </swiper>
    <lc-arrow></lc-arrow>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import ContentWrap from './ContentWrap'
import LcArrow from './LcArrow'
import FirstTreat from './contentItems/1FirstTreat'
import Patient from './contentItems/2Patient'
import Consultation from './contentItems/3Consultation'
import Work from './contentItems/4Work'
import Bbs from './contentItems/5Bbs'
import Train from './contentItems/6Train'
import FinalItem from './contentItems/7FinalItem'

export default {
  name: 'content-list',
  data() {
    return {
      swiperOption: {
        direction: 'vertical',
        height: window.innerHeight,
        // autoHeight: true,
        // setWrapperSize: true,
      },
      items: [ 'FirstTreat', 'Patient', 'Consultation', 'Work', 'Bbs', 'Train', 'FinalItem' ]
    }
  },
  components: {
    swiper,
    swiperSlide,
    LcArrow,
    ContentWrap,
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

