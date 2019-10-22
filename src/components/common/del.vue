<template>
  <div>
    <el-button size="mini" type="danger" @click="del" class="del">删除</el-button>
  </div>
</template>
<script>
import API from "../../common/js/API";
export default {
  props: ["id", "api"],
  methods: {
    del() {
      this.$confirm("确认要删除吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
        //   console.log(this.api);
          this.$axios({
            url:this.api,
            method: "get",
            params: { id: this.id }
          }).then(res => {
            // console.log(res);
            if (res.data.isok) {
              this.$message({
                type: "success",
                message: "删除成功!"
              });
              //   this.init();
              this.$emit("parentInit");
            } else {
              this.$message({
                message: res.data.info,
                type: "warning"
              });
            }
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    }
  }
};
</script>
<style lang="stylus" scoped>
@import '../../common/stylus/index.styl';

.del:hover {
  background: $mainThird;
  color: $mainOne;
  border: 1px solid $mainThird;
}
</style>