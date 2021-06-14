<template>
  <div id="cart">
    <nav-bar class="nav-bar"><div slot="center">购物车({{cartListLength}})</div></nav-bar>
    <scroll class="content" ref="scroll">
      <cart-list/>
    </scroll>
    <cart-bottom-bar/>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import Scroll from 'components/common/scroll/Scroll'

import cartList from './childsComps/cartList'
import CartBottomBar from './childsComps/cartBottomBar'

import { mapGetters } from 'vuex'

export default {
  name: "Cart",
  components: {
    NavBar,
    cartList,
    Scroll,
    CartBottomBar
  },
  computed: {
    ...mapGetters([
      'cartListLength'
    ])
  },
  // 进入cart组件时进行刷新，保证添加进来的数据可以正常滚动
  activated() {
    this.$refs.scroll.refresh()
  }
}
</script>

<style scoped>
  .cart{
    position: relative;
    height: 100vh;
  }

  .nav-bar{
    background-color: var(--color-tint);
    color: white;
    z-index: 2;
    position: relative;
    top: 0;
    right: 0;
    left: 0;
  }

  .content{
    position: absolute;
    top: 44px;
    bottom: 49px;
    right: 0;
    left: 0;
  }
</style>