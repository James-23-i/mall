<template>
  <div class="check-botton" :class="{checked: isChecked}">
    <img src="~assets/img/cart/tick.svg" alt="">
  </div>
</template>

<script>
export default {
  name: "CheckBotton",
  props: {
    isChecked: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
  .check-botton{
    border-radius: 50%;
    border: 2px solid #aaa;
  }

  .check-botton img{
    width: 14px;
  }

  .checked{
    background-color: var(--color-tint);
    border-color: var(--color-tint);
  }
</style>