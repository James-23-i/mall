<template>
  <div id="menuList">
    <div class="item" v-for="(item, index) in categorydata.list" :key="index">
        <a :href="item.link" class="a">
          <img class="item-img" :src="item.image" alt="">
          <div class="item-text">{{item.title}}</div>
        </a>
      </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    categorydata: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scoped>
  #menuList{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }

  #menuList .a{
    margin: 5px;
    display: block;
    width: 80px;
  }

  #menuList .item-img{
    width: 100%;
  }

  #menuList .item-text{
    font-size: 12px;
    text-align: center;
  }
</style>