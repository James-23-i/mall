<template>
  <div class="recommend">
    <div v-for="item in recommends" class="recomment-item">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'RecommendView',
    props: {
      recommends: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .recommend{
    width: 100%;
    display: flex;
    padding: 12px 0 20px 0;
    text-align: center;
    font-size: 12px;
    border-bottom: 10px solid #eee;
  }

  .recomment-item{
    flex: 1;
  }

  .recommend img{
    height: 70px;
    margin-bottom: 8px;
  }
</style>