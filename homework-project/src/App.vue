<template>
  
  <div id="app">
    
    <HeadingSector/>
    <MainBlog/>
    <Basemebt/>
  </div>
</template>

<script>
import HeadingSector from './components/HeadingSector.vue';
import MainBlog from './components/mainBlog.vue';
import Basemebt from './components/basemebt.vue';


export default {
  name: 'App',
  components: {
    HeadingSector,
    MainBlog,
    Basemebt
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

  font-family:  Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
