<template>
  <div class="content">
    <div class="item" v-for="(item, index) in typeList">
      <h2>{{item.categoryname}}</h2>
      <marking :categoryid="item.categoryid" :taglisturl="item.taglisturl"></marking>
    </div>
  </div>
</template>
<script>
import Marking from '@/components/Marking'
import XHR from '../api'
export default {
  data: () => ({
    typeList: null,
    md5Str: ''
  }),
  components: {
    Marking
  },
  mounted () {
  },
  created () {
    this.getMd5()
    XHR.TypeList({'md5': this.md5Str}).then((res) => {
      this.typeList = res.data.categorylist
      localStorage.setItem('md5', res.data.md5str)
    })
  },
  methods: {
    getMd5 () {
      if (localStorage.getItem('md5')) {
        this.md5Str = localStorage.getItem('md5')
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
</style>
