<template>
  <div>
    <div v-for="(item, index) in tagItems">
      <Form-item :label="item.name" :prop="'items.' + index + '.tagsubmitvalue'" :key="item.id" v-if="item.tagtype === 1">
        <Input v-model="item.tagsubmitvalue" placeholder="请输入" style="width: 300px"></Input>
      </Form-item>
      <Form-item :label="item.name" :prop="'items.' + index + '.tagsubmitvalue'" v-if="item.tagtype === 2">
        <Select v-model="item.tagsubmitvalue" placeholder="请选择" style="width: 200px">
          <Option :value="tag.Value" v-for="(tag,index) in item.tagvalue" :key="item.id">{{tag.Text}}</Option>
        </Select>
      </Form-item>
      <Form-item :label="item.name" :prop="'items.' + index + '.tagsubmitvalue'" v-if="item.tagtype === 3">
        <Radio-group v-model="item.tagsubmitvalue">
          <Radio :label="tag.Value" v-for="(tag,index) in item.tagvalue" :key="item.id">{{tag.Text}}</Radio>
        </Radio-group>
      </Form-item>
      <Form-item :label="item.name" :prop="'items.' + index + '.tagsubmitvalue'" v-if="item.tagtype === 4">
        <Checkbox-group v-model="item.tagsubmitvalue">
          <Checkbox :label="tag.Value" v-for="(tag,index) in item.tagvalue" :key="item.id">{{tag.Text}}</Checkbox>
        </Checkbox-group>
      </Form-item>
      <Form-item :label="item.name" :prop="'items.' + index + '.tagsubmitvalue'" v-if="item.tagtype === 5">
        <Input v-model="item.tagsubmitvalue" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入..."></Input>
      </Form-item>
    </div>
  </div>
</template>
<script>
export default {
  props: ['tagItems']
}
</script>
