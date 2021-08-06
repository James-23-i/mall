<template>
  <div class="cart-list">
    <cart-list-item
      v-for="(item, index) in cartList"
      :key="index"
      :product="item"
    />
  </div>
</template>

<script>
import cartListItem from "./cartListItem";

import { mapGetters } from "vuex";
export default {
  name: "cartList",
  components: {
    cartListItem,
  },
  computed: {
    ...mapGetters(["cartList"]),
  },
  created() {},
};
</script>

<style scoped>
</style>