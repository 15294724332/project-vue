<template>
  <div class="teach">
    <el-tabs v-model="activeName">
      <el-tab-pane label="家教banner" name="first">
        <v-banner></v-banner>
      </el-tab-pane>
      <el-tab-pane label="家教类型" name="second">
        <v-object></v-object>
      </el-tab-pane>
      <el-tab-pane label="家教排行" name="third">
        <v-rank></v-rank>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import API from "../common/js/API";
import vBanner from "../components/views/teachBanner";
import vRank from "../components/views/teachRank";
import vObject from "../components/views/teachObject";
export default {
  components: {
    vBanner,
    vRank,
    vObject
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

.teach>>>.el-tabs__item {
  font-size: 17px;
}

.teach>>>.el-tabs__item:hover {
  color: $mainOne;
}

.teach>>>.el-tabs__item.is-active {
  color: $mainOne;
}

.teach>>>.el-tabs__active-bar {
  background: $mainOne;
}
</style>