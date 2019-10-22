<template>
  <div class="water">
    <el-button @click="add" class="add">添加</el-button>
    <!-- 列表 -->
    <el-table :data="d" style="width: 90%;margin:10px auto;" border height="250">
      <el-table-column fixed type="index" label="序号"></el-table-column>
      <el-table-column prop="name" label="水站名称"></el-table-column>
      <el-table-column prop="tel" label="电话"></el-table-column>
      <el-table-column prop="price" label="价格"></el-table-column>
      <el-table-column label="操作" fixed="right">
        <template slot-scope="scope">
          <el-button size="mini"  @click="update(scope.row.id)" class="upbtn">查看</el-button>
          <v-del :id="scope.row.id" :api="api" @parentInit="init()"></v-del>
          <!-- <el-button size="mini" type="danger" @click="del(scope.row.id)" class="del">删除</el-button> -->
        </template>
      </el-table-column>
    </el-table>
    <!-- 添加或修改蒙版 -->
    <el-dialog title="添加水站" :visible.sync="isshow">
      <el-form :model="water">
        <el-form-item label="名称" :label-width="Width">
          <el-input v-model="water.name" autocomplete="off" placeholder="名称"></el-input>
        </el-form-item>
        <el-form-item label="评分" :label-width="Width">
          <el-input v-model="water.score" type="number" autocomplete="off" placeholder="0-5分之间"></el-input>
        </el-form-item>
        <el-form-item label="月销售量" :label-width="Width">
          <el-input v-model="water.count" type="number" autocomplete="off" placeholder="月销售量"></el-input>
        </el-form-item>
        <el-form-item label="点赞数量" :label-width="Width">
          <el-input v-model="water.likeNum" type="number" autocomplete="off" placeholder="点赞数量"></el-input>
        </el-form-item>
        <el-form-item label="浏览量" :label-width="Width">
          <el-input v-model="water.readNum" type="number" autocomplete="off" placeholder="浏览量"></el-input>
        </el-form-item>
        <el-form-item label="商家地址" :label-width="Width">
          <el-input v-model="water.address" autocomplete="off" placeholder="商家地址"></el-input>
        </el-form-item>
        <el-form-item label="距离" :label-width="Width">
          <el-input v-model="water.len" autocomplete="off" placeholder="eg:4.2km"></el-input>
        </el-form-item>
        <el-form-item label="商家信息" :label-width="Width">
          <el-input v-model="water.des" autocomplete="off" placeholder="商家信息"></el-input>
        </el-form-item>
        <el-form-item label="电话" :label-width="Width">
          <el-input v-model="water.tel" autocomplete="off" placeholder="eg:400-100-100"></el-input>
        </el-form-item>
        <el-form-item label="价格" :label-width="Width">
          <el-input v-model="water.price" autocomplete="off" placeholder="eg:50元/桶"></el-input>
        </el-form-item>
        <el-form-item label="图片" :label-width="Width">
          <el-input v-model="water.img" autocomplete="off" placeholder="请输入图片地址"></el-input>
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
      isshow: false,
      isAdd: "",
      Width: "60px",
      water: {
        name: "",
        address: "",
        count: "",
        des: "",
        img: "",
        len: "",
        likeNum: "",
        price: "",
        readNum: "",
        score: "",
        tel: ""
        // img 图片路径
        // name 水站名称
        // score 水站评分
        // count 月销售量
        // likeNum 点赞人数
        // readNum 浏览量
        // address 地址
        // len 距离
        // des 商家信息
        // tel 电话
        // price 价格
      },
      //传过去的接口（删除）
      api: API.delWater
    };
  },
  methods: {
    init() {
      this.$axios({
        url: API.findWater,
        method: "get"
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
    },
    add() {
      this.isshow = true;
      this.isAdd = "0";
      this.water = {
        name: "",
        address: "",
        count: "",
        des: "",
        img: "",
        len: "",
        likeNum: "",
        price: "",
        readNum: "",
        score: "",
        tel: ""
      };
    },
    update(id) {
      this.isshow = true;
      this.isAdd = "1";
      this.$axios({
        url: API.findWater,
        method: "get",
        params: { id: id }
      }).then(res => {
        //console.log(res)
        this.water = res.data.data[0];
      });
    },
    sureBtn() {
      if (this.isAdd == "0") {
        //添加
        this.$axios({
          url: API.addWater,
          method: "get",
          params: this.water
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
          url: API.updateWater,
          method: "get",
          params: this.water
        }).then(res => {
            console.log(res)
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
.water {
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
  .upbtn{
    display inline-block;
  }
}
</style>