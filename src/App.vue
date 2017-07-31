<template>
<div id="app" class="layout">
  <Menu mode="horizontal" theme="dark" active-name="1" class="back-color">
    <div class="layout-logo">卡</div>
    <div class="layout-nav">
      <Menu-item name="1">
        <Icon type="ios-navigate"></Icon>
        标签系统
      </Menu-item>
      <!-- <Menu-item name="2">
        <Icon type="ios-keypad"></Icon>
        导航二
      </Menu-item>
      <Menu-item name="3">
        <Icon type="ios-analytics"></Icon>
        导航三
      </Menu-item>
      <Menu-item name="4">
        <Icon type="ios-paper"></Icon>
        导航四
      </Menu-item> -->
    </div>
  </Menu>
    <Row type="flex" class="row">
      <i-col span="5" class="layout-menu-left">
        <Menu active-name="1-1" theme="light" width="auto" :open-names="['1']" style="height:100%;">
          <div class="layout-logo-left"></div>
          <Submenu name="1">
            <template slot="title">
              <Icon type="ios-navigate"></Icon>
              标签系统
            </template>
            <Menu-item name="1-1">经销商</Menu-item>
            <!-- <Menu-item name="1-2">选项 2</Menu-item>
            <Menu-item name="1-3">选项 3</Menu-item> -->
          </Submenu>
          <!-- <Submenu name="2">
            <template slot="title">
              <Icon type="ios-keypad"></Icon>
              导航二
            </template>
            <Menu-item name="2-1">选项 1</Menu-item>
            <Menu-item name="2-2">选项 2</Menu-item>
          </Submenu>
          <Submenu name="3">
            <template slot="title">
              <Icon type="ios-analytics"></Icon>
              导航三
            </template>
            <Menu-item name="3-1">选项 1</Menu-item>
            <Menu-item name="3-2">选项 2</Menu-item>
          </Submenu> -->
        </Menu>
      </i-col>
      <i-col span="19" class="contents">
        <div class="layout-content">
          <div class="layout-content-main">
            <router-view></router-view>
          </div>
        </div>
      </i-col>
    </Row>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
    }
  },
  methods: {
    marking () {
      this.$router.push('/')
    }
  }
}
</script>

<style>
  @font-face {
    font-family: 'backend';
    src: url('//at.alicdn.com/t/font_zowsxo7o0xvibe29.woff') format('woff');
  }
  .layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
  }
  #app .back-color{
    background: linear-gradient(143deg,#2196F3 20%,#039bf4 81%,#00BCD4);
  }
  .layout-logo{
    font-family: 'backend';
    font-size: 20px;
    width: 100px;
    height: 30px;
    line-height: 30px;
    color: #fff;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
  }
  .layout-nav{
    width: 420px;
    margin: 0 auto;
  }
  #app .row{
    flex:1;
    overflow: hidden;
  }
  #app .row .contents{
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow: auto;
  }
  .contents .layout-content{
    flex: 1;
    margin: 30px;
    overflow: auto;
    border-radius: 4px;
    background: #fff;
    box-shadow: 0 2px 4px 0px rgba(0, 0, 0, 0.2);
  }
  .layout-copy{
    text-align: center;
    padding: 10px 0 20px;
    color: #9ea7b4;
  }
  #app .ivu-form .ivu-form-item-label{
    font-weight: bold;
    font-size: 14px;
  }
</style>
