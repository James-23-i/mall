import {request} from './request'


// http://152.136.185.210:7878/api/m5/detail ?iid=1m93p4u
export function getDetailData(iid){
  return request({
    url: '/detail',
    params: {
      iid
    }
  })
}

// 组件中的数据用一个变量接收，把服务器中的数据封装到一个类中
export class Goods {
  constructor(columns, itemInfo, shopInfo){
    this.title = itemInfo.title
    this.desc = itemInfo.desc
    this.discountBgColor = itemInfo.discountBgColor
    this.discountDesc = itemInfo.discountDesc
    this.realPrice = itemInfo.lowNowPrice
    this.price = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.columns = columns
    this.shopInfo = shopInfo.services 
  }
}

export class Shops {
  constructor(shopInfo){
    this.shopLogo = shopInfo.shopLogo
    this.name = shopInfo.name
    this.cFans = shopInfo.cFans
    this.cGoods = shopInfo.cGoods
    this.cSells = shopInfo.cSells
    this.score = shopInfo.score
  }
}

export class Params {
  constructor(itemParams){
    this.infokey = itemParams.info.key
    this.rulekey = itemParams.rule.key
    this.set = itemParams.info.set
    this.tables = itemParams.rule.tables
    this.disclaimer = itemParams.rule.disclaimer
  }
}