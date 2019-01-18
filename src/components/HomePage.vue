<template>
  <div class="home-page stop-swiping">
    <!-- <w-home-page></w-home-page> -->
    <a-home-page v-if="app"></a-home-page>
    <w-home-page v-else></w-home-page>
  </div>
</template>

<script>
import WHomePage from './homePages/WHomePage'
import AHomePage from './homePages/AHomePage'
import { isInEkyApp } from '@/utils/webView'

export default {
  props: {
    app: {
      type: Boolean,
    }
  },
  data() {
    return {
      // isInAPP: true,
    }
  },
  components: {
    WHomePage,
    AHomePage
  },
  mounted() {
    // // this.isInAPP = isInEkyApp()
    // isInEkyApp().then( () => {
    //   this.isInAPP = true
    //   window.isInAPP = true
    //   // this.msg = 'in app'
    // } ).catch( () => {
    //   this.isInAPP = false
    //   window.isInAPP = false
    //   // this.msg = 'not in app'
    // } )
  },
  methods: {
  }
}
</script>

<style lang="stylus" scoped>
.home-page
  width 100%
  height 100%
  background-image url('../static/images/homeBg.jpg')
  background-size cover
  text-align center
</style>

