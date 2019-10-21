<template>
  <div class="header">
    <p class="username">{{name}}</p>
    <button class="el-button el-button-primary btn" @click="logout">
      <span>退出登录</span>
    </button>
  </div>
</template>
<script>
import API from "../../common/js/API";
export default {
  props: ["name"],
  methods: {
    logout() {
      this.$axios({
        url: API.logout,
        method: "get"
      }).then(res => {
        //   console.log(res)
        if (res.data.isok) {
          this.$router.replace("/login");
        } else {
          this.$message({
            message: res.data.info,
            type: "warning"
          });
        }
      });
    }
  }
};
</script>
<style lang="stylus" scoped>
@import '../../common/stylus/index.styl';

.header {
  height: 100px;
  background: $mainOne;

  .username {
    position: absolute;
    right: 150px;
    top: 0px;
    height: 100px;
    line-height: 100px;
    width: 150px;
    font-size: 35px;
    color: $color4;
  }

  .btn {
    position: absolute;
    right: 50px;
    top: 30px;
  }

  .btn:hover {
    background: $mainThird;
    color: $mainOne;
  }
}
</style>