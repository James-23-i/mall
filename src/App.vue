<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
    <main-tabbar class="tabber"/>
  </div>
</template>

<script>
import mainTabbar from 'components/content/maintabbar/MainTabbar'
  export default {
    name: 'App',
    components: {
      mainTabbar
    }
  }
</script>
<style>
  @import 'assets/css/base.css';
  .tabber{
    z-index: 2;
  }
</style>
