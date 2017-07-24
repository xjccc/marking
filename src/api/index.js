import fetch from './ajax'
export const DEBUG = true                  // 是否开发模式
const HTTP_DEV = 'http://tag.360che.com/DealerTag'      // 测试地址
const HTTPS = 'http://tag.360che.com/DealerTag'              // 正式地址
const URLS = DEBUG ? HTTP_DEV : HTTPS
class XHR {
// 1.分类标签列表
  TypeList (json) {
    return fetch({
      url: `${URLS}/CategoryTagList.aspx`,
      body: json,
      type: 'get'
    })
  }
// 2.提交打分
  submitScroe (json) {
    return fetch({
      url: `${URLS}/TagScore.aspx`,
      body: json,
      type: 'post'
    })
  }
}
export default new XHR()
