<template>
  <div class="left">
    <router-link to="/index/manage" active-class="select">管理员管理</router-link>
    <router-link to="/index/banner" active-class="select">banner管理</router-link>
    <router-link to="/index/teach" active-class="select">家教管理</router-link>
    <router-link to="/index/water" active-class="select">水站管理</router-link>
    <router-link to="/index/service" active-class="select">维修管理</router-link>
    <router-link to="/index/house" active-class="select">家政管理</router-link>
    <router-link to="/index/changePass" active-class="select">修改密码</router-link>
  </div>
</template>
<script>
import API from "../../common/js/API";
export default {};
</script>
<style lang="stylus" scoped>
@import '../../common/stylus/index.styl';
.left {
  width: 200px;
  background: $mainThird;
  a{
      display block;
      margin 10px;
      width 180px;
      height 30px;
      line-height 30px;
      text-align center;
      font-size 15px;
  }
  a:hover{
      background $mainOne;
      color $color4;
  }
  .select{
     background $mainOne; 
     color $color4; 
    }
}
</style>