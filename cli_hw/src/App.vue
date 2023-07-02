<template>

  <div id="app">
    <HeadingComp/>
    <BannerComp/>
    <MainComp/>
    <BasementComp/>

  </div>
</template>

<script>
import BasementComp from './components/BasementComp.vue';
import HeadingComp from './components/HeadingComp.vue'
import BannerComp from './components/BannerComp.vue'
import MainComp from './components/MainComp.vue';

export default {
  name: 'App',
  components: {
    BasementComp,
    HeadingComp,
    BannerComp,
    MainComp
}
}
</script>

<style lang="scss">
.package{
    padding-left: calc(50% - 570px);
    padding-right: calc(50% - 570px);
}
*{
    margin: 0;
    padding: 0;
}

a{
    text-decoration: none;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
