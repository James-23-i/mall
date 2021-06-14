<template>
  <div v-if="Object.keys(shops).length !== 0" class="det-shop">
    <div class="logo-name">
      <img :src="shops.shopLogo" alt="">
      <span>{{shops.name}}</span>
    </div>
    <div class="allEvaluate">
      <div class="shop-evaluate">
        <div class="sell">
          <p>{{shops.cSells | countSells}}</p>
          <p>总销量</p>
        </div>
        <div class="evaluate">
          <p>{{shops.cGoods}}</p>
          <p>全部宝贝</p>
        </div>
      </div>
      <div class="Des">
        <div class="des-info">
          <div class="describe" v-for="(item, index) in shops.score" :key="index">
            <span>{{item.name}}</span>
            <span :class="{'goodColor' : item.isBetter , 'worseColor' : !item.isBetter}">{{item.score}}</span>
            <span :class="{'bgGoodColor' : item.isBetter , 'bgWorseColor' : !item.isBetter}">{{item.isBetter ? '高' : '低'}}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom-detail">
      <div class="store">进店逛逛</div>
    </div> 
  </div>
</template>

<script>
export default {
  name: "DetailShopInfo",
  props: {
    shops: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  filters: {
    countSells(value) {
      if(value < 10000){
        return value
      }else{
        return (value / 10000).toFixed(1) + '万'
      }
    }
  }

}
</script>

<style scoped>
  .det-shop{
    height: 220px;
    border-bottom: 3px solid rgba(100, 100, 100, .1);
  }

  .det-shop .logo-name{
    margin-top: 20px;
    padding-left: 5px;
    position: relative;
  }

  .det-shop .logo-name img{
    border: 1px solid rgba(100,100,100,.3);
    width: 50px;
    border-radius: 50%;
  }

  .det-shop .logo-name span{
    position: absolute;
    top: 18px;
    left: 57px;
  }

  .allEvaluate{
    display: flex;
  }

  .shop-evaluate{
    display: flex;
    width: 50%;
    height: 90px;
    justify-content: space-evenly;
    align-items: center;
    text-align: center;
    font-size: 13px;
    border-right: 2px solid rgba(100,100,100,.3);
  }

  .shop-evaluate .evaluate p:last-of-type, 
  .shop-evaluate .sell p:last-of-type{
    margin-top: 3px;
  }

  .Des{
    font-size: 13px;
    width: 50%;
    height: 90px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .describe:not(:first-child){
    margin-top: 5px;
  }

  .Des .describe span:not(:last-child){
    margin-right: 8px;
  }

  .worseColor{
    color: green;
  }

  .bgWorseColor{
    background-color: green;
    color: white;
  }

  .goodColor{
    color: red;
  }

  .bgGoodColor{
    background-color: red;
    color: white;
  }

  .bottom-detail{
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .store{
    width: 150px;
    height: 30px;
    background-color: rgba(100, 100, 100, .1);
    text-align: center;
    line-height: 30px;
    border-radius: 15px;
    font-size: 13px;
    margin-top: 40px;
  }
  
</style>