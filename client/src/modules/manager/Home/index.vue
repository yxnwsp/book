<template>
  <div class="home-index">
    <el-container>
      <el-header>
        <Header></Header>
      </el-header>
      <el-container>
        <el-aside width="150px" class="aside">
          <div>
            <ul>
              <li v-for="(item,index) in list" :key="index">{{item}}</li>
            </ul>
          </div>
        </el-aside>
        <el-container>
          <el-main class="main"><Main></Main></el-main>
        </el-container>
      </el-container>
    </el-container>
    <el-footer>Footer</el-footer>
  </div>
</template>

<script>
import Header from '../Header/header'
import Main from './main'
export default {
  components: {
    Header,
    Main
  },
  data () {
    return {
      list: [
        '书籍管理', '订单管理', '活动管理', '统计'
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.home-index{
  width: 1190px;
  height: 632px;
  margin: 0 auto;
  .aside{
    font-size: 18px;
    line-height: 1.5;
    // border: 0.5px solid;
    // padding: 0;
    background-color: #fff;
     ul{
      padding: 0;
      li{
        list-style: none;
        // border:
        &.avtive{
          background-color: #e8e8e8;
          // border-radius: 20%;
        }
        &:hover{
          background-color: #e8e8e8;
          // border-radius: 20%;
        }
      }
    }
  }
  .main{
    padding:0;
  }
}
</style>
