<template>
  <div id="detail">
    <detail-nav-bar class="nav" @itemClick="itemClick" ref="nav" />
    <scroll
      ref="scroll"
      class="content"
      :probe-type="3"
      @scroll="contentScroll"
    >
      <detail-swiper :detail-banner="detailBanner" @imgLoad="imgLoad" />
      <detail-base-info :goods="goods" />
      <detail-shop-info :shops="shops" />
      <detail-images :images="images" @imgLoad="imgLoad" />
      <detail-params :params="params" ref="params" />
      <detail-comment :comment="comment" ref="comment" />
      <good-list :goods="recommend" ref="recommend" />
    </scroll>
    <detail-bottom-bar @addCart="addCart" />
    <back-top @click.native="topClick" v-show="isBackShow"></back-top>
  </div>
</template>

<script>
import DetailNavBar from "./detailComps/DetailNavBar";
import DetailSwiper from "./detailComps/DetailSwiper";
import DetailBaseInfo from "./detailComps/DetailBaseInfo";
import DetailShopInfo from "./detailComps/DetailShopInfo";
import DetailImages from "./detailComps/DetailImages";
import DetailParams from "./detailComps/DetailParams";
import DetailComment from "./detailComps/DetailComment";
import DetailBottomBar from "./detailComps/DetailBottomBar";

import { getDetailData, Goods, Shops, Params } from "network/detail";
import { getRecommend } from "network/recommend";
import { itemImgListenerMixin, backTopMixin } from "common/mixins";
import { debounce } from "common/utils";

import Scroll from "components/common/scroll/Scroll";
import GoodList from "components/content/goodslist/GoodList";

export default {
  name: "Detail",
  mixins: [itemImgListenerMixin, backTopMixin],
  components: {
    Scroll,
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailImages,
    DetailParams,
    DetailComment,
    GoodList,
    DetailBottomBar,
  },
  data() {
    return {
      iid: null,
      goods: {},
      shops: {},
      images: {},
      params: {},
      comment: [],
      detailBanner: [],
      recommend: [],
      getThemeY: [],
      getThemeTopY: null,
      currentIndex: 0,
    };
  },
  created() {
    // this.iid = this.$route.params.iid
    this.iid = this.$route.query.iid;
    this.getDetailData();
    this.getRecommend();
    this.getThemeTopY = debounce(() => {
      this.$nextTick(() => {
        this.getThemeY = [];
        this.getThemeY.push(0);
        this.getThemeY.push(this.$refs.params.$el.offsetTop);
        this.getThemeY.push(this.$refs.comment.$el.offsetTop);
        this.getThemeY.push(this.$refs.recommend.$el.offsetTop);
        this.getThemeY.push(Number.MAX_VALUE);
        console.log(this.getThemeY);
      });
    }, 500);
  },
  mounted() {
    // // 对 goodList中加载图片的全局总线监听 this.$bus.on(接收emit的事件，监听的函数)
    // const refresh = debounce(this.$refs.scroll.refresh, 50)
    //   // 监听函数的抽取
    // this.itemImgListener = () => { refresh() }
    // this.$bus.$on('itemImgLoad', this.itemImgListener)
  },
  destroyed() {
    // 取消全局总线
    this.$bus.$off("itemImgLoad", this.itemImgListener);
  },
  methods: {
    imgLoad() {
      // console.log('图片加载');
      setTimeout(() => {
        this.getThemeTopY();
      }, 1000);
    },
    itemClick(index) {
      this.$refs.scroll.scrollTo(0, -this.getThemeY[index], 500);
    },
    contentScroll(position) {
      // 1、获取 y值
      const positionY = -position.y;
      let length = this.getThemeY.length;

      // 需要减去最后添加的最大值
      for (let i = 0; i < length - 1; i++) {
        // 减少 index 的多次输出  当 this.currentIndex !== i 时进行判断
        if (
          this.currentIndex !== i &&
          positionY >= this.getThemeY[i] &&
          positionY <= this.getThemeY[i + 1]
        ) {
          this.currentIndex = i;
          console.log(i);
          this.$refs.nav.currentIndex = this.currentIndex;
        }
      }

      this.isBackShow = -position.y > 1000;
    },
    addCart() {
      // 用一个对象存储加入购物车的数据
      const product = {};
      product.image = this.detailBanner[0];
      product.title = this.goods.title;
      product.desc = this.goods.desc;
      product.price = this.goods.realPrice;
      product.iid = this.iid;
      // console.log(product);
      // 通过单一状态管理发射传递事件
      this.$store.dispatch("addCart", product).then((res) => {
        this.$toast.show(res);
      });
    },
    getDetailData() {
      getDetailData(this.iid).then((res) => {
        console.log(res);
        const data = res.result;
        this.detailBanner = data.itemInfo.topImages;

        // 创建类接收的数据
        this.goods = new Goods(data.columns, data.itemInfo, data.shopInfo);
        this.shops = new Shops(data.shopInfo);
        this.images = data.detailInfo;
        this.params = new Params(data.itemParams);
        if (data.rate.cRate !== 0) {
          this.comment = data.rate.list;
        }
      });
    },
    getRecommend() {
      getRecommend().then((res) => {
        console.log(res);
        this.recommend = res.data.list;
      });
    },
  },
};
</script>

<style scoped>
#detail {
  position: relative;
  height: 100vh;
  /* 隐藏 tabbar */
  z-index: 10;
  background-color: #fff;
}

.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 3;
  background-color: white;
}

.content {
  position: absolute;
  top: 44px;
  bottom: 49px;
  right: 0;
  left: 0;
}
</style>