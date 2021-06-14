<template>
<!-- tabbar中定义插槽 -->
   <div id="tabbar">
     <slot></slot>
   </div>
</template>

<script>
export default {
  name: "Tabbar"
}
</script>

<style scoped>
  #tabbar{
    width: 100%;
    /* tabbat高度固定为49px */
    height: 49px;
    display: flex;
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: #f6f6f6;
    border-top: 1px solid #eee;
    box-shadow: 0 -1px 1px rgba(150, 150, 150, .08);
    font-size: 14px;
  }
</style>