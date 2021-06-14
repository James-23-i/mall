import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import("views/home/Home")
const Cart = () => import("views/cart/Cart")
const Category = () => import("views/category/Category")
const Profile = () => import("views/profile/Profile")
const Detail = () => import("views/detail/Detail")

Vue.use(VueRouter)

// 映射关系的组件没有加s
const routes = [
  {
    path: "",
    redirect: "/home"
  },
  {
    path: "/home",
    component: Home
  },
  {
    path: "/profile",
    component: Profile
  },
  {
    path: "/cart",
    component: Cart
  },
  {
    path: "/category",
    component: Category
  },
  {
    // path: "/detail/:iid",
    path: "/detail",
    component: Detail
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
