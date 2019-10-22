<template>
  <div class="service">
    <el-button @click="add" class="add">添加</el-button>
    <!-- 列表 -->
    <el-table :data="d" style="width: 90%;margin:10px auto;" border height="250">
      <el-table-column fixed type="index" label="序号"></el-table-column>
      <el-table-column prop="name" label="维修名称"></el-table-column>
      <el-table-column prop="tel" label="电话"></el-table-column>
      <el-table-column prop="type" label="类型"></el-table-column>
      <el-table-column label="操作" fixed="right">
        <template slot-scope="scope">
          <el-button size="mini" @click="update(scope.row.id)">查看</el-button>
          <v-del :id="scope.row.id" :api="api" @parentInit="init()"></v-del>
        </template>
      </el-table-column>
    </el-table>
    <!-- 添加或修改蒙版 -->
    <el-dialog title="添加维修" :visible.sync="isshow">
      <el-form :model="service">
        <el-form-item label="名称" :label-width="Width">
          <el-input v-model="service.name" autocomplete="off" placeholder="名称"></el-input>
        </el-form-item>
        <el-form-item label="评分" :label-width="Width">
          <el-input v-model="service.score" type="number" autocomplete="off" placeholder="0-5分之间"></el-input>
        </el-form-item>
        <el-form-item label="类型" :label-width="Width">
          <el-input v-model="service.type" autocomplete="off" placeholder="维修类型"></el-input>
        </el-form-item>
        <el-form-item label="点赞数量" :label-width="Width">
          <el-input v-model="service.likeNum" type="number" autocomplete="off" placeholder="点赞数量"></el-input>
        </el-form-item>
        <el-form-item label="关注人数" :label-width="Width">
          <el-input v-model="service.readNum" type="number" autocomplete="off" placeholder="关注人数"></el-input>
        </el-form-item>
        <el-form-item label="商家地址" :label-width="Width">
          <el-input v-model="service.address" autocomplete="off" placeholder="商家地址"></el-input>
        </el-form-item>
        <el-form-item label="距离" :label-width="Width">
          <el-input v-model="service.len" autocomplete="off" placeholder="eg:4.2km"></el-input>
        </el-form-item>
        <el-form-item label="商家信息" :label-width="Width">
          <el-input v-model="service.info" autocomplete="off" placeholder="商家信息"></el-input>
        </el-form-item>
        <el-form-item label="电话" :label-width="Width">
          <el-input v-model="service.tel" autocomplete="off" placeholder="eg:400-100-100"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="isshow = false">取 消</el-button>
        <el-button type="primary" @click="sureBtn">确 定</el-button>
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
      api: API.delRepair,
      isshow: false,
      isAdd: "",
      Width: "60px",
      service: {
        name: "",
        score: "",
        type: "",
        address: "",
        tel: "",
        len: "",
        likeNum: "",
        readNum: "",
        info: ""
      }
      // name 名称
      // score 几颗星
      // type 电脑、手机、。。。
      // address 地址
      // tel 电话
      // len 距离
      // likeNum 好评人数
      // readNum 关注数
      // info 商家信息
    };
  },
  methods: {
    init() {
      this.$axios({
        url: API.findRepair
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
    },
    add() {
      this.isshow = true;
      this.isAdd = "0";
      this.service = {
        name: "",
        score: "",
        type: "",
        address: "",
        tel: "",
        len: "",
        likeNum: "",
        readNum: "",
        info: ""
      };
    },
    update(id) {
      this.isshow = true;
      this.isAdd = "1";
      this.$axios({
        url: API.findRepair,
        method: "get",
        params: { id: id }
      }).then(res => {
        //console.log(res)
        this.service = res.data.data[0];
      });
    },
    sureBtn() {
      if (this.isAdd == "0") {
        //添加
        this.$axios({
          url: API.addRepair,
          method: "get",
          params: this.service
        }).then(res => {
          if (res.data.isok) {
            console.log(res);
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
        });
      } else {
        //修改
        this.$axios({
          url: API.updateRepair,
          method: "get",
          params: this.service
        }).then(res => {
          console.log(res);
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
        });
      }
      this.isshow = false;
    }
  },
  mounted() {
    this.init();
  }
};
</script>
<style lang="stylus" scoped>
@import '../../common/stylus/index.styl';

.service {
  margin: 10px auto;

  .add {
    margin-left: 40px;
  }

  div>>>.el-dialog__title {
    color: red;
  }

  .el-form-item>>>.el-form-item__label {
    font-size: 20px;
  }

  .el-button--danger >>> span {
    display: block;
    width: 100%;
    height: 100%;
  }

  .el-button--primary {
    background: yellowgreen;
    border: 1px solid yellowgreen;
  }

  .el-button--default:hover, .el-button--primary:hover, .del:hover {
    background: $mainThird;
    color: $mainOne;
    border: 1px solid $mainThird;
  }
}
</style>