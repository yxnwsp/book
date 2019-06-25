<template>
  <div class="header">
    <div class="left">
      <img src="./img/logo.jpg" alt="logo">
      <div class="title">
        <h1>简单书店</h1>
      </div>
    </div>

    <div class="right search">
      <el-select
        v-model="searchValue"
        placeholder="请输入关键词"
        :remote-method="remoteMethod">
        <!-- <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option> -->
      </el-select>
    </div>
  </div>
</template>

<script>
export default {
  name: 'header',
  data () {
    return {
      searchValue: ''
    }
  },
  methods: {
    remoteMethod () {}
  }
}
</script>

<style lang="less" scoped>
  .header{
    width: 100%;
    // height: 100px;
    background-color: #fff;
    margin-top: 5px;
    margin-bottom: 10px;
    text-align: left;
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .left{
      display: flex;
      img{
        width: 85px;
        height: 85px;
      }
      .title{
        display: inline-block;
        margin-top: 20px;
          // position: absolute;
          // top:30%;
      }
    }
    .right{
      margin:20px;
    }
  }
</style>
