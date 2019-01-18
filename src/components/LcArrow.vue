<template>
  <div class="lc-arrow">
    <div class="arrow-wrap">
      <img src="../static/images/arrow.png">
    </div>
  </div>
</template>

<script>
export default {
  name: 'lc-arrow',
  data() {
    return {
      arrowImg: '../static/images/arrow.png'
    }
  }
}
</script>

<style lang="stylus" scoped>
.lc-arrow
  position fixed
  bottom 50px
  left 50%
  transform translateX(-50%)
  z-index 99
  width 26px
  height 38px
.arrow-wrap
  position relative
  width 100%
  height 100%
  img
    position absolute
    top 0
    left 0
    width 100%
    height 100%
    animation twink 2s infinite

@keyframes twink {
  0% { top: 0px ; opacity: 0.5 }
  50% { top: -10px;  opacity: 0.8 }
  100% { top: 0px;  opacity: 0.5}
}

@keyframes arrowShadow {

}

</style>

