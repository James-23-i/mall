import {request} from './request'

export function getRecommend(){
  return request({
    url: '/recommend'
  })
}