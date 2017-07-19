<template>
  <div>
    <div v-for="(item, index) in tagList">
      <Form-item :label="tagList.name" prop="input" v-if="item.tagtype === 1">
        <Input v-model="input" placeholder="请输入" style="width: 300px"></Input>
      </Form-item>
      <Form-item :label="item.name" prop="select" v-if="item.tagtype === 2">
        <Select v-model="select" placeholder="请选择" style="width: 200px">
          <Option value="beijing">北京市</Option>
          <Option value="shanghai">上海市</Option>
          <Option value="shenzhen">深圳市</Option>
        </Select>
      </Form-item>
      <Form-item :label="item.name" prop="radio" v-if="item.tagtype === 3">
        <Radio-group v-model="radio">
          <Radio :label="tag.Text" v-for="(tag,index) in item.tagvalue" :key="index"></Radio>
        </Radio-group>
      </Form-item>
      <Form-item :label="item.name" prop="checkbox" v-if="item.tagtype === 4">
        <Checkbox-group v-model="checkbox">
          <Checkbox :label="tag.Text" v-for="(tag,index) in item.tagvalue" :key="index"></Checkbox>
        </Checkbox-group>
      </Form-item>
      <Form-item :label="item.name" prop="textarea" v-if="item.tagtype === 5">
        <Input v-model="textarea" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入..."></Input>
      </Form-item>
    </div>
    <Form-item v-if="tagList.length">
      <Button type="primary" @click="handleSubmit()">提交</Button>
      <Button type="ghost" @click="handleReset()" style="margin-left: 8px">重置</Button>
    </Form-item>
  </div>
</template>
<script>
import XHR from '../api'
export default {
  props: ['taglisturl'],
  data: () => ({
    tagList: []
  }),
  created () {
    this.renderData()
  },
  methods: {
    // 获取标签渲染接口
    renderData () {
      XHR.joinShop(this.taglisturl, {}).then((res) => {
        this.tagList = res.data
      })
    },
    handleSubmit (name) {
      console.log(this.$refs[name])
    },
    handleReset (name) {
      this.$refs[name].resetFields()
    }
  }
}
</script>
<style scoped>

</style>
