<template>
<!-- 监听点击 -->
  <div class="tabbar-item" @click="itemClick">
    <!-- 所有的显示同一个图片和文字（不能写死） -->
    <!-- <img src="../../assets/img/tabbar/home.svg" alt=""> -->
    <!-- <div>首页</div> -->

    <!-- 用插槽代替图片和文字（外层div控制属性） -->
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>

    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>

    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "TabbarItem",
  // 子组件向父组件传数据（String类型直接传值即可）
  props: {
    path: {
      type: String
    },
    activeColor: {
      type: String,
      default: "#FF5777"
    }
  },
  data() {
    return {
      // isActive: true,
    }
  },
  methods: {
    // 路由跳转
    itemClick() {
      // this.$router.push(this.path);
      // 在使用 replace、push等方法时捕获异常（连续点击两次会报错）
      this.$router.push(this.path).catch(err => err);
    }
  },
  computed: {
    // 图片活跃状态 $route（没有s）
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1
    },
    // 动态改变文字颜色
    activeStyle() {
      return this.isActive ? {color: this.activeColor} : {}
    }
  }
}
</script>

<style scoped>
  .tabbar-item{
    flex: 1;
    text-align: center;
  }
  .tabbar-item img{
    width: 22px;
    height: 22px;
    margin-top: 4px;
    margin-bottom: 2px;
    /* 图片与文字的间距默认为3px */
    vertical-align: middle;
  }
</style>