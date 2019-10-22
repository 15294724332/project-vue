<template>
  <div class="service">
    <!-- 列表 -->
    <el-table :data="d" style="width: 90%;margin:10px auto;" border height="250">
      <el-table-column fixed type="index" label="序号"></el-table-column>
      <el-table-column prop="name" label="用户名称"></el-table-column>
      <el-table-column prop="content" label="评论内容"></el-table-column>
      <el-table-column prop="time" label="时间">
        <template slot-scope="scope">
          <span>{{scope.row.time|timeFilter}}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" fixed="right">
        <template slot-scope="scope">
          <v-del :id="scope.row.id" :api="api" @parentInit="init()"></v-del>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import API from "../../common/js/API";
export default {
  data() {
    return {
      d: [],
      commit: {},
      // id 评论的id
      // userId 用户id
      // repairId 维修的id
      // ava 用户头像
      // name 用户名称
      // content 评价内容
      // time 评价时间
      api: API.delRepairCom
    };
  },
  mounted() {
    this.$axios({
      url: API.findRepairCom
    }).then(res => {
      //console.log(res);
      if (res.data.isok) {
        this.d = res.data.data;
      } else {
        this.$message({
          message: res.data.info,
          type: "warning"
        });
      }
    });
  }
};
</script>
<style lang="stylus" scoped>
@import '../../common/stylus/index.styl';
</style>