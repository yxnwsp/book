<template>
  <div class="createBook">
    <div class="header">
      <el-steps :active="active" finish-status="success">
        <el-step title="步骤 1"></el-step>
        <el-step title="步骤 2"></el-step>
        <el-step title="步骤 3"></el-step>
      </el-steps>
    </div>
  </div>
</template>

<script>
export default {
  name: 'createBook',
  data () {
    return {

    }
  }
}
</script>

<style lang="less" scoped>
  // .createBook{

  // }
</style>
