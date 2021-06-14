<template>
  <div class="cart-list-item">
    <check-botton class="check-btn" :is-checked="product.check" @click.native="checkChange"></check-botton>
    <div class="item-img">
      <img :src="product.image" alt="">
    </div>
    <div class="item-content">
      <div class="item-title">{{product.title}}</div>
      <div class="item-desc">{{product.desc}}</div>
    </div>
    <div class="item-price">
      <div class="price">¥{{product.price}}</div>
      <div class="count">×{{product.count}}</div>
    </div>
  </div>
</template>

<script>
import CheckBotton from 'components/content/checkbotton/CheckBotton'
export default {
  name: "cartListItem",
  components: {
    CheckBotton
  },
  props: {
    product: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    checkChange() {
      this.product.check = !this.product.check
    }
  }
}
</script>

<style scoped>
  .cart-list-item{
    position: relative;
    height: 115px;
    border-bottom: 2px solid rgba(100, 100, 100, .5);
    background-color: #fff;
    padding-top: 15px;
  }

  .item-img{
    width: 100px;
    height: 100px;
    text-align: center;
    line-height: 150px;
    float: left;
  }

  .item-img img{
    width: 55px;
    border-radius: 5px;
  }

  .item-price{
    float: right;
    display: flex;
    justify-content: space-between;
    width: 74%;
    position: absolute;
    top: 80px;
    left: 75px;
  }

  .item-price .price{
    color: orange;
    padding-left: 23px;
  }

  .item-title, .item-desc{
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }

  .item-content .item-title{
    font-size: 14px;
  }

  .item-content .item-desc{
    font-size: 12px;
    color: gray;
    margin-top: 10px;
  }

  .check-btn{
    position: absolute;
    top: 42px;
    left: 1px;
  }
</style>