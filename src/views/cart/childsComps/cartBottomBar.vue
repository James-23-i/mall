<template>
  <div class="cart-bottom-bar">
    <div class="check">
      <check-botton class="check-btn" :is-checked="isSelectAll" @click.native="selectAll"/>
      <span>全选</span>
    </div>
    <div class="total">合计：￥{{totalPrice}}</div>
    <div class="calculate" @click="calcClick">去结算({{checkLength}})</div>
  </div>
</template>

<script>
import CheckBotton from 'components/content/checkbotton/CheckBotton'

import { mapGetters } from 'vuex'
export default {
  name: "cartBottomBar",
  components: {
    CheckBotton
  },
  computed: {
    ...mapGetters([ 'cartList' ]),
    checkLength() {
      return this.cartList.filter(item => item.check).length
    },
    totalPrice() {
      return this.cartList.filter(item => item.check)
                          .reduce((prev, item) => prev + item.count * item.price, 0)
                          .toFixed(2)
    },
    isSelectAll() {
      // 当cartList没有商品时，默认全选不选中
      if(this.cartList.length === 0){
        return false
      } else{
        // 查找商品未被选中的状态，再取反获得全选的状态
        return !this.cartList.find(item => !item.check)
      }
    }
  },
  methods: {
    selectAll() {
      if(this.isSelectAll){
        return this.cartList.forEach(item => item.check = false)
      }else{
        return this.cartList.forEach(item => item.check = true)
      }
    },
    calcClick() {
      if(!this.isSelectAll){
        this.$toast.show('请选择商品进行结算')
      }
    }
  }
}
</script>

<style scoped>
  .cart-bottom-bar{
    width: 100%;
    height: 29px;
    position: fixed;
    bottom: 49px;
    background-color: rgba(100, 100, 100, .1);
    display: flex;
    align-items: center;
    font-size: 14px;
  }

  .check-btn{
    width: 18px;
  }

  .check{
    width: 80px;
    position: relative;
  }

  .check span{
    position: absolute;
    top: 3px;
    left: 25px;
  }

  .total{
    flex: 1;
  }

  .calculate{
    width: 100px;
    background-color: var(--color-tint);
    color: white;
    text-align: center;
    line-height: 29px;
    height: 100%;
  }
</style>