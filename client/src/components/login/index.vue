<template>
  <div class="login">
    <div>
   <div class="header">
        <h1>简单书店</h1>
      </div>
      <div v-if="!isRegister" class="content">
        <el-form label-width="10px" class="demo-ruleForm">
          <el-form-item class="item">
            <el-input v-model="username" prefix-icon="el-icon-user-solid" placeholder="请输入用户名"></el-input>
          </el-form-item>
          <el-form-item class="item">
            <el-input v-model="password" prefix-icon="el-icon-key" placeholder="请输入密码"></el-input>
          </el-form-item>
          <el-form-item class="item">
            <el-select v-model="userType" placeholder="请选择角色">
              <el-option label="店长" value="manager"></el-option>
              <el-option label="用户" value="user"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button class="btn" type="primary" @click="login">登录</el-button>
          </el-form-item>
        </el-form>
        <div class="toggle" @click="isRegister=!isRegister">
          还没有账号，马上注册
        </div>
      </div>
      <div v-else class="content">
        <el-form label-width="100px" class="demo-ruleForm">
          <el-form-item label="用户名" prop="name">
            <el-input v-model="username" placeholder="请输入用户名"></el-input>
          </el-form-item>
          <el-form-item label="密 码" prop="name">
            <el-input v-model="password" placeholder="请输入密码"></el-input>
          </el-form-item>
          <el-form-item label="角 色" prop="region">
            <el-radio v-model="userType" label="manager">店长</el-radio>
            <el-radio v-model="userType" label="user">用户</el-radio>
          </el-form-item>
          <el-form-item size="large">
            <el-button type="primary" @click="register">注册</el-button>
          </el-form-item>
        </el-form>
        <div class="toggle" @click="isRegister=!isRegister">
          已有账号，去登录
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: '_login',
  data () {
    return {
      username: '',
      password: '',
      userType: '',
      isRegister: false
    }
  },
  methods: {
    register () {
      this.$alert('注册成功啦，请前往登录', {
        confirmButtonText: '确定',
        callback: action => {
          this.isRegister = true
        }
      })
    },
    login () {
      if (this.username !== '') {
        if (this.password !== '') {
          this.$router.push({path: '/manager'})
        } else {
          this.$alert('密码为空')
        }
      } else {
        this.$message({
          message: '用户名为空',
          center: true,
          offset: 400,
          duration: 1000
        })
      }
    }
  }
}
</script>

<style lang="less" scoped>
.login{
  width: 100%;
  height: 100%;
  position: absolute;
  /* background: url('../imgs/loginbgc.jpg') no-repeat; */
  background-size: cover;
  background: beige;
  display: flex;
  align-items: center;
  justify-content: center;
  .header{
    margin-bottom: 20px;
    // position: absolute;
    // top: 15%;
    // left: 45%;
  }
  .content{
    content: '';
    // position: absolute;
    // top:33%;
    // left:39%;
    /* margin: 17% 38%; */
    /* border: 1px solid;*/
    width: 380px;
    height: 350px;
    border-radius: 10px;
    // padding-right: 48px;
    // padding-top: 51px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #e8e8e8;
    .demo-ruleForm{
      height: 240px;
      .btn{
        width: 100%;
      }
    }
    .toggle{
      font-size: 10px;
      color:#1888fc;
      margin-bottom: 10px;
      // margin-left: 150px;
    }
  }
}

</style>
