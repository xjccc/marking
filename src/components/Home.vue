<template>
  <Form class="content" :label-width="120" ref="formItems" :model="formItems" v-if="typeList.length">
    <div class="item" v-for="(item, index) in typeList">
      <h2>{{item.categoryname}}</h2>
      <marking :tagItems="item.taglist"></marking>
    </div>
    <Form-item>
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
    submitData: {}
  }),
  components: {
    Marking
  },
  created () {
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
        'groupId': 1,
        'scroeid': 1
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
      this.submitData['groupid'] = 1
      this.submitData['scoreid'] = 2
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
    }
  }
}
</script>
<style scoped>
  .item > h2{
    margin-bottom: 20px;
  }
  .item{
    padding-bottom: 20px;
  }
  .no-list{
    text-align: center;
    font-size: 20px;
  }
</style>
