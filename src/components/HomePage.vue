<template>
  <div class="home-page stop-swiping">
    <!-- <w-home-page></w-home-page> -->
    <a-home-page></a-home-page>
  </div>
</template>

<script>
import WHomePage from './homePages/WHomePage'
import AHomePage from './homePages/AHomePage'

export default {
  data() {
    return {
      avatar: '/static/images/logo.png'
    }
  },
  components: {
    WHomePage,
    AHomePage
  },
  created() {

  },
  methods: {
  }
}
</script>

<style lang="stylus" scoped>
.home-page
  width 100%
  height 100%
  background-image url('/static/images/homeBg.jpg')
  background-size cover
  text-align center
</style>

