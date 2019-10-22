<template>
  <div class="manage">
    <el-button @click="add" class="add">添加</el-button>
    <!-- 列表 -->
    <el-table :data="d" style="width: 80%;margin:10px auto;" border height="250">
      <el-table-column fixed type="index" label="序号"></el-table-column>
      <el-table-column prop="name" label="姓名"></el-table-column>
      <el-table-column prop="des" label="属性"></el-table-column>
      <el-table-column prop="time" label="时间">
        <template slot-scope="scope">
          <span>{{scope.row.time|timeFilter}}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" fixed="right">
        <template slot-scope="scope">
          <el-button size="mini" @click="update(scope.row.id)">查看</el-button>
          <el-button size="mini" type="danger" @click="del(scope.row.id)" class="del">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 添加或修改 -->
    <el-dialog title="修改|添加管理员" :visible.sync="isshow">
      <el-form :model="user">
        <el-form-item label="账号" :label-width="Width">
          <el-input v-model="user.name" autocomplete="off" :disabled="isAdd=='1'" placeholder="请输入账号"></el-input>
        </el-form-item>
        <el-form-item label="密码" :label-width="Width">
          <el-input v-model="user.pass" autocomplete="off" :disabled="isAdd=='1'" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" :label-width="Width" v-if="isAdd=='0'">
          <el-input v-model="user.config" autocomplete="off" placeholder="请输入确认密码"></el-input>
        </el-form-item>
        <el-form-item label="描述" :label-width="Width">
          <el-input v-model="user.des" autocomplete="off" placeholder="描述"></el-input>
        </el-form-item>
        <el-form-item label="时间" :label-width="Width">
          <el-date-picker
            v-model="user.time"
            type="date"
            class="timeIpt"
            autocomplete="off"
            placeholder="选择日期"
          ></el-date-picker>
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
import API from "../common/js/API";
export default {
  components: {},
  data() {
    return {
      d: [],
      isshow: false,
      isAdd: "",
      user: {
        name: "",
        pass: "",
        time: "",
        des: ""
      },
      config: "",
      Width: "60px"
    };
  },
  methods: {
    init() {
      this.$axios({
        url: API.findmanage,
        method: "post"
      }).then(res => {
        console.log(res);
        if (res.data.isok) {
          this.d = res.data.data;
          //  console.log(this.d)
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
      this.user = {
        name: "",
        pass: "",
        time: "",
        des: ""
      };
    },
    update(id) {
      this.isshow = true;
      this.isAdd = "1";
      this.$axios({
        url: API.findmanage,
        method: "post",
        data: { id: id }
      }).then(res => {
        //   console.log(res)
        this.user = res.data.data[0];
        this.user.time = new Date(parseInt(this.user.time));
      });
    },
    del(id) {
      this.$axios({
        url: API.delmanage,
        method: "post",
        data: { id: id }
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
      });
    },
    sureBtn() {
      this.user.time = new Date(this.user.time).getTime();
      if (this.isAdd == "0") {
        //添加
        this.$axios({
          url: API.addmanage,
          method: "post",
          data: this.user
        }).then(res => {
          //   console.log(res);
          // console.log(this.user);
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
      } else {
        //修改
        this.$axios({
          url: API.updatemanage,
          method: "post",
          data: this.user
        }).then(res => {
          //   console.log(res)
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
@import '../common/stylus/index.styl';

.manage {
  margin: 10px auto;
  .add {
    margin-left: 10px;
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
  .timeIpt {
    width: 100%;
  }
}
</style>