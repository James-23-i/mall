<template>
<div id='home'>
  <nav-bar class='header'><div slot='center'>购物街</div></nav-bar>
  <tab-control class='tab-control2'
    ref='tabControl2' 
    :titles='titles'
    @tabClick='tabClick'
    v-show="isTabShow"/>
  <scroll 
  class='content'
  ref='scroll'
  :probe-type='3'
  @scroll='contentScroll'
  :pull-up-load='true'
  @pullingUp='loadMore'>
    <home-swiper :banners='banners' @tabImgLoad='tabImgLoad'/>
    <recommend-view :recommends='recommends'/>
    <feature-view/>
    <tab-control class='tab-control1'
      ref='tabControl1' 
      :titles='titles'
      @tabClick='tabClick'/>
      <!-- <good-list :goods='goods[currentType].list'/> 拆到计算属性中-->
    <good-list :goods='showGoods' />
  </scroll>
  <back-top @click.native="topClick" v-show="isBackShow"></back-top>
</div>
</template>

<script>
  import {getHomeMultidata, getHomeData} from 'network/home'

  import NavBar from 'components/common/navbar/NavBar'
  import TabControl from 'components/content/tabcontrol/TabControl'
  import GoodList from 'components/content/goodslist/GoodList'
  import Scroll from 'components/common/scroll/Scroll'
  
  import HomeSwiper from './childComps/HomeSwiper'
  import RecommendView from './childComps/RecommendView'
  import FeatureView from './childComps/FeatureView'

  import {itemImgListenerMixin, backTopMixin} from 'common/mixins'
  
  export default {
    name: "Home",
    mixins: [itemImgListenerMixin, backTopMixin],
    data() {
      return {
        currentType: 'pop',
        tabOffsetTop: 0,
        isTabShow: false,
        saveY: 0,

        banners: [],
        recommends: [],
        titles: ['流行', '热销', '上新'],
        // 用一个变量存储三个数据
        goods: {
          'pop': { page: 0, list: []},
          'sell': { page: 0, list: []},
          'new': { page: 0, list: []}
        }
      }
    },
    components: {
      NavBar,
      HomeSwiper,
      RecommendView,
      FeatureView,
      TabControl,
      GoodList,
      Scroll
    },
    // created()组件创建完之后就执行的函数（存放主要逻辑）
    created() {
      this.getHomeMultidata()
      this.getHomeData('pop')
      this.getHomeData('new')
      this.getHomeData('sell')
    },
    // mounted()DOM渲染的函数
    mounted() {
      // // 对 goodList中加载图片的全局总线监听 this.$bus.on(接收emit的事件，监听的函数)
      // const refresh = debounce(this.$refs.scroll.refresh, 50)

      // // 监听函数的抽取
      // this.itemImgListener = () => { refresh() }
      // this.$bus.$on('itemImgLoad', this.itemImgListener)
    },
    // 组件激活时调用
    activated() {
      this.$refs.scroll.scrollTo(0, this.saveY, 0)
      this.$refs.scroll.refresh()
    },
    // 组件停用/离开时调用
    deactivated() {
      // 记录离开的位置
      this.saveY = this.$refs.scroll.getScrollY()

      // 离开首页时取消全局总线
      this.$bus.$off('itemImgLoad', this.itemImgListener)
    },
    computed: {
      showGoods() {
        return this.goods[this.currentType].list
      }
    },
    methods: {
      // 监听事件方法
      tabClick(index) {
        switch(index) {
          case 0: 
            this.currentType = 'pop'
            break
          case 1:
            this.currentType = 'new'
            break
          case 2:
            this.currentType = 'sell'
            break
        }
        this.$refs.tabControl1.currentIndex = index
        this.$refs.tabControl2.currentIndex = index
      },
      contentScroll(position) {
        // console.log(position);
        this.isBackShow = -position.y > 1000
        this.isTabShow = -position.y > this.tabOffsetTop 
      },
      loadMore() {
        this.getHomeData(this.currentType)
      },
      tabImgLoad() {
        // console.log(this.$refs.tabControl1.$el.offsetTop)
        this.tabOffsetTop = this.$refs.tabControl1.$el.offsetTop
      },

      // 网络请求数据方法
      getHomeMultidata() {
        getHomeMultidata().then(res => {
          // console.log(res);

          // 将获取到的数据存放在data中，轮播图，推荐
          this.banners = res.data.banner.list
          this.recommends = res.data.recommend.list
        })
      },
      getHomeData(type) {
        // 动态修改 page
        const page = this.goods[type].page + 1
        getHomeData(type, page).then(res => {
          // ...扩展运算符（克隆数组）
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page += 1

          // 进行下一次加载更多
          this.$refs.scroll.finishPullUp()
        })
      }
    }
  }
</script>

<style scoped>
  #home{
    /* 给 navbar腾出空间 */
    padding-top: 44px;
    /* 让 content相对于 home定位，100vh代表高度为设备的高度 */
    position: relative;
    height: 100vh;
  }

  .header{
    background-color: var(--color-tint);
    color: #fff;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 2;
  }

  .tab-control2{
    position: relative;
    z-index: 5;
  }

  .content{
    /* 通过定位获取除了 nav 和 tab的高度，动态决定 */
    position: absolute;
    top: 44px;
    bottom: 49px;
    right: 0;
    left: 0;
  }
</style>