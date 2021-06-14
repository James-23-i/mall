<template>
  <div v-if="Object.keys(images).length !== 0">
    <div class="detail-img">
      <div class="content">
        <div class="start"></div>
        <div class="img-desc">{{images.desc}}</div>
        <div class="end"></div>
      </div>
      <div class="img-key">{{images.detailImage[0].key}}</div>
      <div class="img-show"  v-for="(item, index) in images.detailImage[0].list" :key="index" >
        <img :src="item" alt="" @load="imgLoad">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailImages",
  data() {
    return {
      counter: 0,
      imgLength: 0
    }
  },
  props: {
    images: {
      type: Object,
      default() {
        return {}
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
  .img-desc{
    font-size: 13px;
    margin-top: 40px;
    padding: 0 10px 0 10px;
    color: gray;
  }

  .content .start, .content .end{
    width: 90px;
    height: 1px;
    background-color: black;
  }

  .content .start{
    position: relative;
    top: 20px;
    left: 5px;
  }

  .content .end{
    position: relative;
    top: 20px;
    left: 220px;
  }

  .content .start::before, .content .end::after{
    width: 4px;
    height: 4px;
    content: '';
    background-color: black;
    display: block;
  }

  .content .end::after{
    position: absolute;
    right: 0;
    transform: translateY(-4px);
  }

  .img-key{
    font-size: 15px;
    padding-left: 10px;
    margin-top: 40px;
  }

  .img-show img{
    width: 100%;
    margin-top: 25px;
  }
</style>