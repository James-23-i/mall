<template>
  <div class="detail-bottom clear-fix">
    <div class="left-bar">
      <div class="item">
        <i class="icon customer"></i>
        <div>客服</div>
      </div>
      <div class="item">
        <i class="icon store"></i>
        <div>店铺</div>
      </div>
      <div class="item">
        <i class="icon star"></i>
        <div>收藏</div>
      </div>
    </div>
    <div class="right-bar">
      <div class="cart" @click="addCart">加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBottomBar",
  methods: {
    addCart() {
      this.$emit('addCart')
    }
  }
}
</script>

<style scoped>
  .detail-bottom{
    height: 49px;
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: #fff;
  }

  .detail-bottom .left-bar{
    float: left;
    font-size: 12px;
  }

  .detail-bottom .right-bar{
    float: right;
    font-size: 15px;
  }

  .detail-bottom .left-bar,
  .detail-bottom .right-bar{
    display: flex;
    width: 50%;
    height: 100%;
    text-align: center;
  }

  .detail-bottom .left-bar{
    align-items: center;
  }

  .detail-bottom .right-bar div,
  .left-bar .item{
    flex: 1;
  }

  .right-bar .cart{
    background-color: yellow;
    height: 49px;
    line-height: 49px;
  }

  .right-bar .buy{
    background-color: pink;
    height: 49px;
    line-height: 49px;
  }

  .left-bar .item div{
    transform: translate(-5px, -10px);
  }

  .left-bar .icon{
    width: 44px;
    height: 44px;
    display: block;
    transform: scale(.5);
    background: url('~assets/img/detail/detail_bottom.png') no-repeat;
  }

  .left-bar .customer{
    background-position: 0 -104px;
  }

  .left-bar .store{
    background-position: 0 -198px;
  }

  .left-bar .star{
    background-position: 0 0;
  }
</style>