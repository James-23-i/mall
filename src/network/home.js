import {request} from './request'

// 轮播图推荐数据
export function getHomeMultidata() {
  return request({
    url: '/home/multidata'
  })
}

/* 
  http://152.136.185.210:7878/api/m5/home/data ?type=pop&page=1
  默认为 get请求 -> params:{}，post请求 -> data:{}
  pop、sell、new数据
  当需要 ? 连接的数据可以通过参数传入
*/
export function getHomeData(type, page) {
  return request({
    url: '/home/data',
    params: {
      type,
      page
    }
  })
}