<template>
  <div>
    <div v-for="(item, index) in tagItems" :class="index%2 === 0 ? 'marking' : 'index-marking'">
      <Form-item class="form-items" :label="index+1 + '.' + item.name" :prop="'items.' + index+ '.tagsubmitvalue'" :key="item.id" v-if="item.tagtype == 1 && item.isnumber == 1">
        <Input v-model="item.tagsubmitvalue" placeholder="请输入数字" style="width: 300px" @on-change="inputValue(index)"></Input>
        <span class="tips" v-if="item.errorStatus">请输入数字</span>
      </Form-item>
      <Form-item class="form-items" :label="index+1 + '.' + item.name" :prop="'items.' + index + '.tagsubmitvalue'" :key="item.id" v-if="item.tagtype == 1 && item.isnumber != 1">
        <Input v-model="item.tagsubmitvalue" placeholder="请输入内容" style="width: 300px"></Input>
      </Form-item>
      <Form-item class="form-items" :label="index+1 + '.' + item.name" :prop="'items.' + index + '.tagsubmitvalue'" v-if="item.tagtype == 2">
        <Select v-model="item.tagsubmitvalue" :placeholder="`请选择${item.name}`" style="width: 300px">
          <Option :value="tag.Value" v-for="(tag,index) in item.tagvalue" :key="item.id">{{tag.Text}}</Option>
        </Select>
      </Form-item>
      <Form-item class="form-items" :label="index+1 + '.' + item.name" :prop="'items.' + index + '.tagsubmitvalue'" v-if="item.tagtype == 3">
        <Radio-group v-model="item.tagsubmitvalue">
          <Radio :label="tag.Value" v-for="(tag,index) in item.tagvalue" :key="item.id">{{tag.Text}}</Radio>
        </Radio-group>
      </Form-item>
      <Form-item class="form-items" :label="index+1 + '.' + item.name" :prop="'items.' + index + '.tagsubmitvalue'" v-if="item.tagtype == 4">
        <Checkbox-group v-model="item.tagsubmitvalue">
          <Checkbox :label="tag.Value" v-for="(tag,index) in item.tagvalue" :key="item.id">{{tag.Text}}</Checkbox>
        </Checkbox-group>
      </Form-item>
      <Form-item class="form-items" :label="index+1 + '.' + item.name" :prop="'items.' + index + '.tagsubmitvalue'" v-if="item.tagtype == 5">
        <Input v-model="item.tagsubmitvalue" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入..."></Input>
      </Form-item>
    </div>
  </div>
</template>
<script>
export default {
  props: ['tagItems'],
  data: () => ({
    activeIndex: -1
  }),
  methods: {
    inputValue (index) {
      let value = this.tagItems[index].tagsubmitvalue
      let item = this.tagItems[index]
      if (!/^\d*$/.test(value)) {
        item['errorStatus'] = true
      } else {
        delete item['errorStatus']
      }
    }
  }
}
</script>
<style scoped>
  .marking{
    padding: 15px 30px;
    background: #fcfcfd;
  }
  .index-marking{
    padding: 15px 30px;
    background: #fff;
  }
  .form-items{
    margin-bottom: 0
  }
  .tips{
    margin-left: 10px;
    color: #c00;
  }
</style>
