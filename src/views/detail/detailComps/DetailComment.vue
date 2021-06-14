<template>
  <div class="detail-comment" v-if="Object.keys(comment).length !== 0">
    <div class="title">
      <div v-for="item in title">{{item}}</div>
    </div>
    <div class="user">
      <img :src="comment[0].user.avatar" alt="">
      <span>{{comment[0].user.uname}}</span>
    </div>
    <div class="content">{{comment[0].content}}</div>
    <div class="style">
      <div class="date">{{comment[0].created | showDate}}</div>
      <div class="color-size">{{comment[0].style}}</div>
    </div>
    <div class="image" v-if="comment[0].images">
      <img :src="item" alt="" v-for="item in comment[0].images">
    </div>
  </div>
</template>

<script>
import {formatDate} from 'common/utils'
export default {
  name: "DetailComment",
  data() {
    return {
      title: ['用户评价', '更多']
    }
  },
  props: {
    comment: {
      type: Array,
      default() {
        return []
      }
    }
  },
  filters: {
    showDate(value) {
      // 1、创建时间对象（value代表时间戳，单位秒）
      // 而时间对象单位是毫秒
      const date = new Date(value * 1000)

      // 时间戳格式化
      return formatDate(date, 'yyyy-MM-dd')
    }
  }
}
</script>

<style scoped>
  .detail-comment{
    margin-bottom: 15px;
    border-bottom: 1px solid rgba(100, 100, 100, .2);
    padding-bottom: 15px;
  }

  .title{
    height: 40px;
    line-height: 40px;
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 0 8px;
    font-size: 13px;
    border-bottom: 1px solid rgba(100, 100, 100, .2);
  }

  .user img{
    width: 40px;
    border-radius: 50%;
    margin: 10px 0 0 10px;
  }

  .user span{
    position: relative;
    top: -16px;
    left: 15px;
  }

  .content{
    font-size: 12px;
    margin-top: 10px;
    padding-left: 10px;
  }

  .style{
    font-size: 12px;
    color: gray;
    margin-top: 15px;
    padding-left: 10px;
  }

  .style .date{
    float: left;
    margin-right: 10px;
  }

  .image{
    margin-top: 15px;
  }

  .image img{
    width: 90px;
    height: 80px;
    margin-left: 5px;
  }
</style>