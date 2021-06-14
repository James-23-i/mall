<template>
   <!-- tabbar替换掉Tabbar.vue中插槽内容 -->
    <tabbar>
      <!-- <tabbar-item path="/home" activeColor="blue"> -->
      <!-- 修改配置文件 webpack.base.conf.js中 resolve路径问题，修改后必须通过 npm run build重新打包 -->
      <tabbar-item path="/home">
        <img src="~assets/img/tabbar/home.svg" alt="" slot="item-icon">
        <img src="~assets/img/tabbar/home_active.svg" alt="" slot="item-icon-active">
        <div slot="item-text">首页</div>
      </tabbar-item>

      <tabbar-item path="/category">
        <img src="~assets/img/tabbar/category.svg" alt="" slot="item-icon">
        <img src="~assets/img/tabbar/category_active.svg" alt="" slot="item-icon-active">
        <div slot="item-text">分类</div>
      </tabbar-item>

      <tabbar-item path="/cart">
        <img src="~assets/img/tabbar/cart.svg" alt="" slot="item-icon">
        <img src="~assets/img/tabbar/cart_active.svg" alt="" slot="item-icon-active">
        <div slot="item-text">购物车</div>
      </tabbar-item>

      <tabbar-item path="/profile">
        <img src="~assets/img/tabbar/profile.svg" alt="" slot="item-icon">
        <img src="~assets/img/tabbar/profile_active.svg" alt="" slot="item-icon-active">
        <div slot="item-text">我的</div>
      </tabbar-item>
    </tabbar>
</template>

<script>
// 引入两个组件
import Tabbar from 'components/common/tabbar/Tabbar'
import TabbarItem from 'components/common/tabbar/TabbarItem'
export default {
  name: "MainTabbar",
  components: {
    Tabbar,
    TabbarItem
  }
}
</script>

<style scoped>

</style>