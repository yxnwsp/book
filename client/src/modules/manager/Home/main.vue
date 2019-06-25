<template>
  <div class="main">
    <el-table
      :data="tableData"
      class="table">
      <el-table-column
        prop= item
        label= item
        v-for="item in tableData" :key="item">
      </el-table-column>
      <!-- <el-table-column
        prop="bookNum"
        label="书号"
        width="180">
      </el-table-column>
      <el-table-column
        prop="author"
        label="作者">
      </el-table-column> -->
    </el-table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tableData: [
        {bookName: '白鹿原', bookNum: 9787020090297, author: '陈忠实'}
      ]
    }
  }
}
</script>

<style lang="less" scoped>
  .main{
    // margin: 10px;
    padding: 20px;
    background-color: #fff;
    .table{
      width: 100%;
    }
  }
</style>
