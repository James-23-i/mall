<template>
  <div id="category">
    <nav-bar class="nav-bar"><div slot="center">商品分类</div></nav-bar>
    <div class="content">
      <Menu :categories="categories" @selectItem="selectItem" />
      <scroll class="listContent">
        <menu-list :categorydata="categoryData"></menu-list>
      </scroll>
    </div>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import Scroll from "components/common/scroll/Scroll";

import Menu from "./childComps/Menu";
import MenuList from "./childComps/MenuList";

import {
  getCategory,
  getSubcategory,
} from "network/category";

export default {
  name: "Category",
  components: {
    NavBar,
    Menu,
    Scroll,
    MenuList,
  },
  data() {
    return {
      categories: [],
      categoryData: {},
    };
  },
  created() {
    this.getCategory();

    this.category();
  },
  methods: {
    category() {
      this.axios.get(this.baseUrl + '/category').then(res => {
        console.log(res);
      })
    },
    getCategory() {
      getCategory().then((res) => {
        console.log(res);
        this.categories = res.data.category.list;
        // 获取第一条分类数据（在分类列表加载完毕之后，才能获取）
        this.getSubcategory(0);
      });
    },
    getSubcategory(index) {
      const maitKey = this.categories[index].maitKey;
      getSubcategory(maitKey).then((res) => {
        console.log(res);
        this.categoryData = res.data;
      });
    },

    selectItem(index) {
      // console.log(index);
      this.getSubcategory(index);
    }
  },
};
</script>

<style scoped>
#category {
  position: relative;
  height: 100vh;
}

.nav-bar {
  background-color: var(--color-tint);
  color: #fff;
  z-index: 10;
  position: relative;
}

.content {
  position: absolute;
  top: 44px;
  bottom: 49px;
  right: 0;
  left: 0;
  z-index: 1;
  display: flex;
}

.listContent{
  height: 100%;
  width: 100%;
}

.menu-details{
  width: 100%;
}
</style>