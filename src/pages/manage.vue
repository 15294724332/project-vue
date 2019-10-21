<template>
  <div class="manage">
    <el-button @click="isshow = true" class="add">添加</el-button>
    <el-table :data="d" style="width: 80%;margin:10px auto;" border height="250">
      <el-table-column fixed type="index" label="序号"></el-table-column>
      <el-table-column prop="name" label="姓名"></el-table-column>
      <el-table-column prop="des" label="属性"></el-table-column>
      <el-table-column prop="time" label="时间">
        <template slot-scope="scope">
          <span>{{scope.row.time |time}}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" fixed="right">
        <el-button size="mini" @click="isshow=true">查看</el-button>
        <el-button size="mini" type="danger">删除</el-button>
      </el-table-column>
    </el-table>

    <el-dialog title="修改|添加管理员" :visible.sync="isshow">
      <el-form :model="user">
        <el-form-item label="账号" :label-width="Width">
          <el-input v-model="user.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" :label-width="Width">
          <el-input v-model="user.pass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" :label-width="Width">
          <el-input v-model="user.config" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="描述" :label-width="Width">
          <el-input v-model="user.des" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item label="时间" :label-width="Width">
            <el-row>
          <el-date-picker v-model="user.time" type="date" autocomplete="off" placeholder="选择日期"></el-date-picker>
          </el-row>
        </el-form-item>

      </el-form>

      <div slot="footer" class="dialog-footer">
        <el-button @click="isshow = false">取 消</el-button>
        <el-button type="primary" @click="isshow = false">确 定</el-button>
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
  methods: {},
  mounted() {
    this.$axios({
      url: API.findmanage,
      method: "post"
    }).then(res => {
      console.log(res);
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
@import '../common/stylus/index.styl';

.manage {
  margin: 10px auto;

  .add {
    margin-left: 10px;
  }

  .add:hover {
    background: $mainThird;
    color: $mainOne;
  }

  div>>>.el-dialog__title {
    color: red;
  }

  .el-form-item>>>.el-form-item__label {
    font-size: 20px;
  }

  .el-button--default:hover, .el-button--primary:hover {
    background: $mainThird;
    color: $mainOne;
    border: 1px solid $mainOne;
  }

  
}
</style>