<template>
  <div class="content">
    <el-row>
      <el-col :span="4" v-for="(o, index) in 20" :key="index">
        <el-card class="item">
          <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
          <div>
            <span>好吃的汉堡</span>
            <div class="bottom clearfix">
              <time class="time">{{ currentDate }}</time>
              <!-- <el-button type="text" class="button">操作按钮</el-button> -->
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>

<style lang="less" scoped>
  .content{
    margin-top:10px;
    background-color: #fff;
    .item{
      margin: 10px;
      img{
        width: 150px;
        height: 150px;
      }
    }
  }

</style>
