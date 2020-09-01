<template>
  <div id="app">
    <!-- keep-alive会缓存命中的组件 不用每次重新渲染 提高用户体验 -->
    <!-- <keep-alive> -->
      <router-view></router-view>
    <!-- </keep-alive> -->
    
  </div>
</template>
<script>
export default {

};
</script>
<style lang="less">

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
  
}
</style>
