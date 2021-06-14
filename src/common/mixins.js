import {debounce} from './utils'
import BackTop from 'components/content/backtop/BackTop'

// 混入：对象类型
export const itemImgListenerMixin = {
  data() {
    return {
      itemImgListener: null,
      refresh: null
    }
  },
  mounted() {
    // 对 goodList中加载图片的全局总线监听 this.$bus.on(接收emit的事件，监听的函数)
    this.refresh = debounce(this.$refs.scroll.refresh, 50)

    // 监听函数的抽取
    this.itemImgListener = () => { 
      this.refresh() 
    }
    this.$bus.$on('itemImgLoad', this.itemImgListener)
  },
}

export const backTopMixin = {
  components: {
    BackTop
  },
  data() {
    return {
      isBackShow: false
    }
  },
  methods: {
    topClick() {
      this.$refs.scroll.scrollTo(0, 0, 500)
    }
  }
}