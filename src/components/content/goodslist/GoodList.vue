<template>
  <div class="good-list">
    <!-- 将遍历到的每个item绑定给goodlist -->
    <good-list-item v-for="item in goods" :goodlist='item'/>
  </div>
</template>

<script>
import GoodListItem from 'components/content/goodslist/GoodListItem'

export default {
  name: "GoodList",
  components: {
    GoodListItem,
  },
  props: {
    goods: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
  .good-list{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
</style>