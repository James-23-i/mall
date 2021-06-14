<template>
  <div class="tab-control">
    <div v-for="(item, index) in titles" class="tab-control-item" 
        :class="{active: index === currentIndex}"
        @click="itemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabControl",
    data() {
      return {
        currentIndex: 0,
      }
    },
    props: {
      titles: {
        type: Array,
        default() {
          return []
        }
      }
    },
    methods: {
      itemClick(index) {
        this.currentIndex = index
        this.$emit('tabClick', index)
      }
    }
  }
</script>

<style scoped>
  .tab-control{
    display: flex;
    height: 40px;
    line-height: 40px;
    text-align: center;
    font-size: var(--font-size);
    background-color: #fff;
  }

  .tab-control .tab-control-item{
    flex: 1;
  }

  .active{
    color: var(--color-high-text);
  }

  .active span{
    box-shadow: 0 -2px 0 inset var(--color-high-text);
    /* 用 padding撑开内阴影 */
    padding: 5px;
  }
</style>