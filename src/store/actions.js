import {
  ADD_COUNTER,
  ADD_CART,
  ADD_TO_CART,
} from './mutation-types'

export default {
  [ADD_CART](context, payload) {
    return new Promise((resolve, reject) => {
      let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)

      if(oldProduct){
        // oldProduct.count += 1
        context.commit(ADD_COUNTER, oldProduct)
        resolve("商品数量+1");
      }else{
        payload.count = 1
        // context.cartList.push(payload)
        // 对象模型，保存到 product(payload)中，可以修改check属性
        payload.check = true
        context.commit(ADD_TO_CART, payload)
        resolve("成功添加到购物车");
      }
    })
  }
}