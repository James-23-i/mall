<template>
  <swiper class="Swiper">
    <swiper-item v-for="item in detailBanner">
      <img :src="item" alt="" @load="imgLoad">
    </swiper-item>
  </swiper>
</template>

<script>
import {Swiper, SwiperItem} from 'components/common/swiper/index'
export default {
  name: "DetailSwiper",
  components: { 
    Swiper,
    SwiperItem
  },
  props: {
    detailBanner: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    imgLoad() {
      this.$emit('imgLoad')
    }
  }

}
</script>

<style scoped>
  .Swiper{
    height: 330px;
    overflow: hidden;
  }
</style>