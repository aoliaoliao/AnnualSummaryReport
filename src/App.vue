<template>
  <div id="app">
    <index></index>
  </div>
</template>

<script>
import index from './components'

export default {
  name: 'App',
  components: {
    index
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: #eee;
  width: 100%;
  height: 100%;
}
</style>
