<template>
  <div>
    <el-button @click="add" class="add">添加</el-button>
    <!-- 列表 -->
    <el-table :data="d" style="width: 80%;margin:10px auto;" border height="250">
      <el-table-column fixed type="index" label="序号"></el-table-column>
      <el-table-column label="图片">
        <template slot-scope="scope">
          <img :src="scope.row.img" class="img" />
        </template>
      </el-table-column>
      <el-table-column prop="des" label="描述"></el-table-column>
      <el-table-column label="操作" fixed="right">
        <template slot-scope="scope">
          <v-del :id="scope.row.id" :api="api" @parentInit="init()"></v-del>
          <!-- <el-button size="mini" type="danger" @click="del(scope.row.id)" class="del">删除</el-button> -->
        </template>
      </el-table-column>
    </el-table>
    <!-- 添加蒙版 -->
    <el-dialog title="添加家教banner" :visible.sync="isshow">
      <el-form :model="banner">
        <el-form-item label="图片" :label-width="Width">
          <el-input v-model="banner.img" autocomplete="off" placeholder="请输入图片地址"></el-input>
        </el-form-item>
        <el-form-item label="描述" :label-width="Width">
          <el-input v-model="banner.des" autocomplete="off" placeholder="描述"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="isshow = false">取 消</el-button>
        <el-button type="primary" @click="addBtn">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import API from "../../common/js/API";
export default {
  data() {
    return {
      d: [],
      isshow: false,
      banner: {
        des: "",
        img: ""
      },
      Width: "60px",
      //传过去的接口（删除）
      api: API.delTeaBanner
    };
  },
  methods: {
    init() {
      this.$axios({
        url: API.findTeaBanner,
        method: "get"
      }).then(res => {
        //console.log(res)
        if (res.data.isok) {
          this.d = res.data.data;
        } else {
          this.$message({
            message: res.data.info,
            type: "warning"
          });
        }
      });
    },
    add() {
      this.isshow = true;
      this.banner = {
        img: "",
        des: ""
      };
    },
    addBtn() {
      this.$axios({
        url: API.addTeaBanner,
        method: "get",
        params: this.banner
      }).then(res => {
        // console.log(res)
        if (res.data.isok) {
          this.$message({
            message: res.data.info,
            type: "success"
          });
          this.init();
        } else {
          this.$message({
            message: res.data.info,
            type: "warning"
          });
        }
        this.isshow = false;
      });
    }
  },
  mounted() {
    this.init();
  }
};
</script>
<style lang="stylus" scoped>
@import '../../common/stylus/index.styl';

.img {
  width: 200px;
  height: 100px;
}

.add {
  margin-left: 10px;
}

div>>>.el-dialog__title {
  color: red;
}

.el-form-item>>>.el-form-item__label {
  font-size: 20px;
}

.el-button--primary {
  background: yellowgreen;
  border: 1px solid yellowgreen;
}

.el-button--default:hover, .el-button--primary:hover, .add:hover {
  background: $mainThird;
  color: $mainOne;
  border: 1px solid $mainThird;
}
</style>