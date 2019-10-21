<template>
  <div class="box">
    <div class="mask">
      <div class="login">
        <h2>登录</h2>
        <!-- 下拉选择框 -->
        <el-select v-model="user.type" clearable placeholder="请选择角色" class="input">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
        <!-- input框 -->
        <el-input placeholder="请输入账号" v-model="user.name" clearable class="input"></el-input>
        <!-- 密码框 -->
        <el-input placeholder="请输入密码" v-model="user.pass" clearable show-password class="input"></el-input>
        <button class="el-button el-button-primary btn" @click="userlogin">
          <span>登录</span>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import API from "../common/js/API";
export default {
  data() {
    return {
      options: [
        {
          value: "0",
          label: "超级管理员"
        },
        {
          value: "1",
          label: "普通管理员"
        },
        {
          value: "2",
          label: "用户"
        }
      ],
      user: {
        name: "",
        pass: "",
        type: ""
      }
    };
  },
  methods: {
    userlogin() {
      this.$axios({
        url: API.login,
        method: "post",
        data: this.user
      }).then(res => {
        // console.log(res)
        if (res.data.isok) {
          this.$message({
            message: res.data.info,
            type: "success"
          });
          this.$router.push('/index?name='+this.user.name);
        } else {
          this.$message({
            message:res.data.info,
            type: "warning"
          });
        }
      });
    }
  }
};
</script>
<style lang="stylus" scoped>
@import '../common/stylus/index.styl';

.box {
  background: $mainThird;
  width: 100vw;
  height: 100vh;

  .login {
    h2 {
      width: 400px;
      height: 60px;
      line-height: 60px;
      text-align: center;
      color: $mainThird;
      font-size: 30px;
    }

    .input {
      width: 300px;
      margin-bottom: 10px;
    }

    .el-button {
      display: block;
      margin: auto;
    }

    .el-button-primary {
      background: #c0ff3e;
      color: #fff;
      border: #c0ff3e;
      font-size: 14px;
    }

    .btn:hover {
      background: $mainThird;
      color: $mainOne;
    }
  }
}
</style>