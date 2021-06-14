<template>
  <div v-if="Object.keys(params).length !== 0" class="detail-params">
    <div class="shop-params">{{params.infokey}}</div>
    <table class="params">
      <tr v-for="item in params.set">
        <td>{{item.key}}</td>
        <td>{{item.value}}</td>
      </tr>
    </table>
    <div class="size-desc">{{params.rulekey}}</div>
    <!-- table中有三层数据，遍历三遍 -->
    <table class="size" v-for="item in params.tables">
      <tr v-for="tr in item">
        <td v-for="td in tr">{{td}}</td>
      </tr>
    </table>
    <div class="disclaimer">{{params.disclaimer}}</div>
  </div>
</template>

<script>
export default {
  name: "DetailParams",
  props: {
    params: {
      type: Object,
      default() {
        return {}
      }
    }
  }

}
</script>

<style scoped>
  .shop-params, .size-desc, .params, .size{
    padding-left: 10px;
    margin-top: 20px;
    /* 使用margin-left：会导致设备的宽度变小，宽度溢出设备宽 */
  }

  .params tr td:first-child,
  .size tr td:first-child
  {
    width: 40px;
    text-align: center;
  }

  .params{
    width: 100%;
  }
  
  .size{
    width: 100%;
    text-align: center;
  }

  .params tr, .size tr{
    height: 40px;
    border: 1px solid gray;
    font-size: 13px;
  }

  .detail-params table tr td{
    border-bottom: 1px solid rgba(100, 100, 100, .2);
  }

  .params tr td:last-child{
    color: var(--color-high-text);
    padding-left: 50px;
  }

  .disclaimer{
    margin-top: 20px;
    border-bottom: 3px solid  rgba(100, 100, 100, .2);
    height: 55px;
    font-size: 14px;
  }
</style>