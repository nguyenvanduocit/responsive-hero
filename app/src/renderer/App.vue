<template>
  <div id="app">
    <div class="title-bar-drag"></div>
    <router-view class="main-view"></router-view>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="scss" scoped>
  #app{
    display: flex;
    justify-content: center;
    align-items: stretch;
    align-content: stretch;
    width: 100%;
    height: 100%;
    .main-view{
      width: 100%;
    }
    .title-bar-drag{
      -webkit-app-region: drag;
      position: fixed;
      top:0;
      left: 0;
      right: 0;
      height: 18px;
      background: transparent;
    }
  }
</style>
