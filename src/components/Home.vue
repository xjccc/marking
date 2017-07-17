<template>
  <div class="content">
    <div class="item">
      <h2>经营范围／规模</h2>
      <marking></marking>
    </div>
    <div class="item">
      <h2>基本属性</h2>
      <marking></marking>
    </div>
    <div class="item">
      <h2>决策人相关</h2>
      <marking></marking>
    </div>
    <div class="item">
      <h2>网销意识／意愿</h2>
      <marking></marking>
    </div>
    <div class="item">
      <h2>和卡车之家的接触经历</h2>
      <marking></marking>
    </div>
  </div>
  </div>
</template>
<script>
import Marking from '@/components/Marking'

export default {
  data: () => ({
    first: 'first',
    second: 'second',
    third: 'third',
    forth: 'forth',
    fifth: 'fifth'
  }),
  components: {
    Marking
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
</style>
