<template>
  <div class="house">
    <el-tabs v-model="activeName">
      <el-tab-pane label="家政banner" name="first">
        <v-housebanner></v-housebanner>
      </el-tab-pane>
      <el-tab-pane label="人员管理" name="second">
        <v-houseperson></v-houseperson>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import API from "../common/js/API";
import vHousebanner from "../components/views/houseBanner";
import vHouseperson from "../components/views/housePerson";
export default {
  components: {
    vHousebanner,
    vHouseperson
  },
  data() {
    return {
      activeName: "first"
    };
  },
  methods: {}
};
</script>
<style lang="stylus" scoped>
@import '../common/stylus/index.styl';

.el-tabs {
  margin-left: 40px;
}

.house>>>.el-tabs__item {
  font-size: 17px;
}

.house>>>.el-tabs__item:hover {
  color: $mainOne;
}

.house>>>.el-tabs__item.is-active {
  color: $mainOne;
}

.house>>>.el-tabs__active-bar {
  background: $mainOne;
}
</style>