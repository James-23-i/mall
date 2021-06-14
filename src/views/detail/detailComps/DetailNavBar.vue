<template>
  <nav-bar class="nav-bar">
    <div slot="left" class="navBack" @click="backHome"><img src="~assets/img/common/back.svg" alt=""></div>
    <div slot="center" class="detail">
      <div v-for="(item, index) in titles" 
        class="detail-item" 
        @click="detItemClick(index)"
        :class="{active: currentIndex === index}">{{item}}</div>
    </div>
  </nav-bar>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
export default {
  name: "DetailNavBar",
  data() {
    return {
      iid: null,
      currentIndex: 0,
      titles: ['商品', '参数', '评论', '推荐']
    }
  },
  components: {
    NavBar
  },
  methods: {
    detItemClick(index) {
      this.currentIndex = index
      this.$emit('itemClick', index)
    },
    backHome() {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>
  .navBack{
    position: relative;
    top: 5px;
  }

  .navBack img{
    width: 20px;
  }

  .detail{
    display: flex;
    font-size: 14px;
  }

  .detail-item{
    flex: 1;
  }

  .active{
    color: var(--color-high-text);
  }
</style>