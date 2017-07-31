import fetch from './ajax'
export const DEBUG = true                  // 是否开发模式
// const HTTP_DEV = 'http://tag.360che.com/DealerTag'      // 测试地址
// const HTTPS = 'http://tag.360che.com/DealerTag'              // 正式地址
// const URLS = DEBUG ? HTTP_DEV : HTTPS
class XHR {
// 1.分类标签列表
  TypeList (urls, json) {
    return fetch({
      url: `${urls}/CategoryTagList.aspx`,
      body: json,
      type: 'get'
    })
  }
// 2.提交打分
  submitScroe (urls, json) {
    return fetch({
      url: `${urls}/TagScore.aspx`,
      body: json,
      type: 'POST'
    })
  }
}
export default new XHR()
