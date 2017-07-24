<template>
  <Form class="content" ref="formItems" :model="formItems" label-position="top" v-if="typeList.length">
    <div class="item" v-for="(item, index) in typeList">
      <h2>{{item.categoryname}}</h2>
      <marking class="marking-content" :tagItems="item.taglist"></marking>
    </div>
    <Form-item class="button-position">
      <Button type="primary" @click="handleSubmit('formItems')">提交</Button>
      <Button type="ghost" @click="handleReset('formItems')" style="margin-left: 8px">重置</Button>
    </Form-item>
  </Form>
  <div class="no-list" v-else>
    没有相关数据
  </div>
</template>
<script>
import Marking from '@/components/Marking'
import XHR from '../api'
export default {
  data: () => ({
    typeList: [],
    md5Str: '',
    formItems: {
      items: []
    },
    submitData: {},
    groupId: 1,
    scroeid: ''
  }),
  components: {
    Marking
  },
  created () {
    if (window.groupId) {
      this.groupId = window.groupId
    }
    this.scroeid = this.getQueryString()
    if (localStorage.getItem('md5')) {
      this.md5Str = localStorage.getItem('md5')
    }
    this.getLocalStorage()
    this.getTypeList()
  },
  methods: {
    getLocalStorage () { // 获取缓存数据
      // 获取typeList缓存
      let list = localStorage.getItem('typeList')
      if (!list) return
      this.typeList = JSON.parse(list)
      // 表单的绑定prop
      for (let key in this.typeList) {
        this.formItems.items = this.formItems.items.concat(this.typeList[key].taglist)
      }
    },
    getTypeList () {
      let json = {
        'md5': this.md5Str,
        'groupId': this.groupId,
        'scroeid': this.scroeid
      }
      XHR.TypeList(json).then((res) => {
        let a = res.data.data.categorylist
        // 设置md5缓存
        let md5 = res.data.data.md5str
        localStorage.setItem('md5', md5)
        if (a.ischange === 0) { // 未发生改变
          return
        } else {
          // 获取接口值
          this.typeList = a
          // 表单的绑定prop
          for (let key in this.typeList) {
            this.formItems.items = this.formItems.items.concat(this.typeList[key].taglist)
          }
          let list = JSON.stringify(this.typeList)
          localStorage.setItem('typeList', list)
        }
      })
    },
    handleSubmit (name) { // 提交表单填写信息
      let items = this.$refs[name].model.items
      let index = items.length
      for (let i = 0; i < index; i++) {
        let item = items[i]
        if (item.tagtype === 4) {
          this.submitData[item.tagname] = item.tagsubmitvalue.join(',')
        } else {
          this.submitData[item.tagname] = item.tagsubmitvalue
        }
      }
      this.submitData['groupId'] = this.groupId
      // 获取scroeid
      this.submitData['scoreid'] = this.scoreid
      XHR.submitScroe(this.submitData).then((res) => {
        if (res.data.status === '1') {
          this.$Modal.success({
            title: '提交成功',
            content: res.data.message
          })
        } else {
          this.$Modal.error({
            title: '提交失败',
            content: res.data.message
          })
        }
      })
    },
    handleReset (name) {  // 重置表单
      let items = this.$refs[name].model.items
      let index = items.length
      for (let i = 0; i < index; i++) {
        let item = items[i]
        if (item.tagtype === 4) {
          item.tagsubmitvalue = []
        } else {
          item.tagsubmitvalue = ''
        }
      }
    },
    getQueryString () {  // 获取scroeid  第一个参数值
      let name, value
      let str = location.href // 取得整个地址栏
      let num = str.indexOf('?')
      str = str.substr(num + 1) // 取得所有参数   stringvar.substr(start [, length ]
      let arr = str.split('&') // 各个参数放到数组里
      for (let i = 0; i < arr.length; i++) {
        num = arr[i].indexOf('=')
        if (num > 0) {
          name = arr[i].substr(0, num)
          value = arr[i].substr(num + 1)
          this[name] = value
        }
        let string = arr[0]   // 判断第一个参数
        let index = string.indexOf('=')
        string = string.substr(index + 1) // 获取reffer的值
        return string
      }
    }
  }
}
</script>
<style scoped>
  .item > h2{
    font-size: 20px;
    padding-bottom: 10px;
    margin-bottom: 20px;
    border-bottom: 1px solid #eee;
  }
  .item{
    padding-bottom: 20px;
  }
  .no-list{
    text-align: center;
    font-size: 20px;
  }
  .marking-content{
    padding-left: 20px;
  }
  .ivu-form .ivu-form-item .ivu-form-item-label{
    font-size: 14px;
  }
  .button-position{
    position: fixed;
    left: 50%;
    bottom: 40px;
    z-index: 100;
  }
  .button-position .ivu-form-item-content > button{
    padding: 6px 30px;
  }
</style>
