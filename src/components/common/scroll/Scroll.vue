<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: "Scroll",
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      scroll: null  
    }
  },
  mounted() {
    // 1、创建scroll对象
    this.scroll = new BScroll(this.$refs.wrapper, {
      // 默认为 false，对 button按钮不需要设置 true也能监听点击（其他的如 div span...则不能）
      click: true,

      // 滚动监听侦测
      probeType: this.probeType,

      // 上拉加载更多
      pullUpLoad: this.pullUpLoad
      
    })
    // scroll对象中有 scrollHeight决定滚动的高度
    // console.log(this.scroll); 

    // 2、监听滚动位置
    this.scroll.on('scroll', position => {
      // console.log(position)
      this.$emit('scroll', position)
    })

    // 3、上拉加载更多
    this.scroll.on('pullingUp', () => {
      this.$emit('pullingUp')
    })
  },
  methods: {
    // 返回指定位置
    scrollTo(x, y, time){
      this.scroll && this.scroll.scrollTo(x, y, time)
    },

    // 刷新高度
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp()
    },

    // 重新加载图片
    refresh() {
      this.scroll && this.scroll.refresh()
    },

    // 记录滚动离开后停留的位置
    getScrollY() {
      return this.scroll && this.scroll.y
    }
  }
}
</script>

<style scoped>

</style>