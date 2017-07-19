import fetch from './ajax'
export const DEBUG = true                  // 是否开发模式
const HTTP_DEV = 'http://tag.360che.com/DealerTag'      // 测试地址
const HTTPS = 'http://tag.360che.com/DealerTag'              // 正式地址
const URLS = DEBUG ? HTTP_DEV : HTTPS
class XHR {
// 1.分类列表
  TypeList (json) {
    return fetch({
      url: `${URLS}/CategoryList.aspx`,
      body: json,
      type: 'get'
    })
  }
// 2.标签列表
  joinShop (url, json) {
    return fetch({
      url: url,
      body: json,
      type: 'get'
    })
  }
}
export default new XHR()
