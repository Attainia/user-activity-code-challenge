<template>
  <div id="app">
    <PageOne />
    <PageTwo />
  </div>
</template>

<script>
import PageOne from './components/PageOne.vue'
import PageTwo from './components/PageTwo.vue'

export default {
  name: 'app',
  components: {
    PageOne,
    PageTwo
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
