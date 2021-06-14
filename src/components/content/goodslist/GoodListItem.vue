<template>
<!-- 商品列表的每一部分 goodlist -->
  <div class="good-list-item" @click="itemClick">
    <img v-lazy="showImages" alt="" @load="itemImgLoad">
    <div class="good-info">
      <p>{{goodlist.title}}</p>
      <span class="price">￥{{goodlist.price}}</span>
      <span class="collect">{{goodlist.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodListItem",
  props: {
    goodlist: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  computed: {
    // 判断展示推荐或者首页的数据
    showImages() {
      return this.goodlist.image || this.goodlist.show.img
    }
  },
  methods: {
    // 通过事件总线发射图片加载事件
    itemImgLoad() {
      this.$bus.$emit('itemImgLoad')
    },

    // 跳转到详情页
    itemClick() {
      // this.$router.push('/detail/' + this.goodlist.iid)
      this.$router.push({
        path: '/detail',
        query: {
          iid: this.goodlist.iid
        }
      })
    }
  }

}
</script>

<style scoped>
  .good-list-item{
    width: 48%;
  }

  .good-list-item img{
    width: 100%;
    border-radius: 5px;
  }

  .good-info{
    font-size: 12px;
    text-align: center;
    padding-bottom: 3px;
  }

  .good-info p{
    /* 隐藏文字出现省略号 */
    text-overflow: ellipsis;
    overflow: hidden; 
    white-space: nowrap; 
  }

  .good-info .price{
    color: var(--color-high-text);
  }

  .good-info .collect{
    position: relative;
    margin-left: 20px;
  }

/* ::before伪元素添加雪碧图 */
  .good-info .collect::before{
    content: '';
    width: 44px;
    height: 44px;
    display: inline-block;
    position: absolute;
    top: -14px;
    left: -27px;
    background: url('~assets/img/detail/detail_bottom.png') no-repeat 0 0;
    transform: scale(0.3);
  }
</style>