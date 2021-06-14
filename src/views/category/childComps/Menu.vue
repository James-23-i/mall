<template>
  <scroll id="menu">
    <div class="menu-list">
      <div class="menu-list-item" 
          v-for="(item, index) in categories" 
          :key="index"
          @click="itemClick(index)"
          :class="{active: index === currentIndex}">
        {{item.title}}
      </div>
    </div>
  </scroll>
</template>

<script>
import Scroll from 'components/common/scroll/Scroll'

export default {
  name: "Menu",
  components: { 
    Scroll
  },
  props: {
    categories: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      currentIndex: 0
    }
  },
  methods: {
    itemClick(index){
      this.currentIndex = index
      this.$emit('selectItem', index)
    }
  }
}
</script>

<style scoped>
  .menu-list{
    background-color: #f6f6f6;
    height: 100%;
    width: 100px;
  }

  .menu-list-item{
    height: 45px;
    line-height: 45px;
    text-align: center;
    font-size: 12px;
  }

  .active{
    border-left: 3px solid var(--color-tint);
    color: var(--color-high-text);
    background-color: #fff;
    font-weight: 700;
  }
</style>