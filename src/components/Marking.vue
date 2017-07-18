<template>
  <Form ref="formItems" :model="formItem" :label-width="80">
    <div v-for="">
        <Form-item label="输入框" prop="input">
          <Input v-model="formItem.input" placeholder="请输入"></Input>
        </Form-item>
        <Form-item label="选择器" prop="select">
          <Select v-model="formItem.select" placeholder="请选择">
            <Option value="beijing">北京市</Option>
            <Option value="shanghai">上海市</Option>
            <Option value="shenzhen">深圳市</Option>
          </Select>
        </Form-item>
        <Form-item label="单选框" prop="radio">
          <Radio-group v-model="formItem.radio">
            <Radio label="male">男</Radio>
            <Radio label="female">女</Radio>
          </Radio-group>
        </Form-item>
        <Form-item label="多选框" prop="checkbox">
          <Checkbox-group v-model="formItem.checkbox">
            <Checkbox label="吃饭"></Checkbox>
            <Checkbox label="睡觉"></Checkbox>
            <Checkbox label="跑步"></Checkbox>
            <Checkbox label="看电影"></Checkbox>
          </Checkbox-group>
        </Form-item>
        <Form-item label="文本域" prop="textarea">
          <Input v-model="formItem.textarea" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入..."></Input>
        </Form-item>
    </div>
    
    <Form-item>
      <Button type="primary" @click="handleSubmit('formItems')">提交</Button>
      <Button type="ghost" @click="handleReset('formItems')" style="margin-left: 8px">重置</Button>
    </Form-item>
  </Form>
</template>
<script>
import XHR from '../api'
export default {
  props: ['categoryid', 'taglisturl'],
  data: () => ({
    formItem: {
      input: '',
      select: '',
      radio: 'male',
      checkbox: [],
      switch: true,
      date: '',
      time: '',
      textarea: ''
    }
  }),
  created () {
    this.renderData()
  },
  methods: {
    renderData () {
      XHR.joinShop(this.taglisturl).then((res) => {
        console.log(res.data)
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
