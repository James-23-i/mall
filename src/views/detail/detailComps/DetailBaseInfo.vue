<template>
  <div v-if="Object.keys(goods).length !== 0" class="shopDetail">
    <div class="goods-title">{{goods.title}}</div>
    <div class="goods-price">
      <span>{{goods.price}}</span>
      <span>{{goods.oldPrice}}</span>
      <span v-if="goods.discountDesc"
            :style="{backgroundColor: goods.discountBgColor}">{{goods.discountDesc}}</span>
    </div>
    <div class="goods-columns">
      <span>{{goods.columns[0]}}</span>
      <span>{{goods.columns[1]}}</span>
      <span>{{goods.shopInfo[goods.shopInfo.length - 1].name}}</span>
    </div>
    <!-- 通过 v-for遍历 index，n in 10 -> 从1遍历到10 -->
    <div class="goods-info">
      <!-- index 为 1，2，3-->
      <span v-for="index in goods.shopInfo.length - 1">
        <img :src="goods.shopInfo[index - 1].icon" alt="">
        <span>{{goods.shopInfo[index - 1].name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBaseInfo",
  props: {
    goods: {
      type: Object,
      default() {
        return {}
      }
    }
  }

}
</script>

<style scoped>
  .shopDetail{
    position: relative;
  }

  .shopDetail .goods-title{
    font-size: 17px;
    margin-top: 8px;
    padding-left: 3px;
  }

  .shopDetail .goods-price{
    margin-top: 16px;
    padding-left: 3px;
  }

  .shopDetail .goods-price span:nth-of-type(1){
    color: var(--color-high-text);
    font-size: 24px;
  }

  .shopDetail .goods-price span:nth-of-type(2){
    font-size: 12px;
    text-decoration: line-through;
    margin-left: 5px;
  }

  .shopDetail .goods-price span:nth-of-type(3){
    color: white;
    padding: 2px;
    border-radius: 5px;
    font-size: 12px;
    margin-left: 5px;
    position: relative;
    top: -5px;
  }

  .shopDetail .goods-columns{
    height: 30px;
    display: flex;
    justify-content: space-between;
    font-size: 13px;
    color: gray;
    margin-top: 18px;
    padding: 0 3px 0 3px;
    border-bottom: 1px solid  rgba(100,100,100,.1);
  }

  .shopDetail .goods-info{
    height: 40px;
    line-height: 25px;
    display: flex;
    justify-content: space-between;
    padding: 0 3px 0 3px;
    font-size: 12px;
    margin-top: 15px;
    border-bottom: 4px solid  rgba(100,100,100,.1);
  }

  .shopDetail .goods-info img{
    width: 12px;
  }
</style>