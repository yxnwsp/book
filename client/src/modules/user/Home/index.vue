<template>
  <div class="home-index">
    <div>
      <el-container>
        <el-header style="padding:0;height:100px;">
          <my-Header></my-Header>
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
            <el-main class="main"><my-Main></my-Main></el-main>
          </el-container>
        </el-container>
      </el-container>
      <!-- <el-footer>Footer</el-footer> -->
    </div>

    <div class="">
      <my-content></my-content>
    </div>
  </div>
</template>

<script>
import myHeader from '../Header/header'
import myMain from './Main/main'
import myContent from './content'
export default {
  components: {
    myHeader,
    myMain,
    myContent
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
  height: 100%;
  margin: 0 auto;
  background-color: #e8e8e8;
  .aside{
    font-size: 18px;
    line-height: 1.5;
    background-color: #fff;
     ul{
      padding: 0;
      li{
        list-style: none;
        &.avtive{
          background-color: #e8e8e8;
        }
        &:hover{
          background-color: #e8e8e8;
        }
      }
    }
  }
  .main{
    padding:0;
  }

}
</style>
