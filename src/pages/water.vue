<template>
  <div class="water">
    <el-tabs v-model="activeName">
      <el-tab-pane label="水站" name="first">
          <v-waterstation></v-waterstation>
      </el-tab-pane>
      <el-tab-pane label="水站评论" name="second">
          <v-watercommit></v-watercommit>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import API from "../common/js/API";
import vWaterstation from '../components/views/waterStation'
import vWatercommit from '../components/views/waterCommit'
export default {
  components: {
     vWaterstation,vWatercommit
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

.water>>>.el-tabs__item {
  font-size: 17px;
}

.water>>>.el-tabs__item:hover {
  color: $mainOne;
}

.water>>>.el-tabs__item.is-active {
  color: $mainOne;
}

.water>>>.el-tabs__active-bar {
  background: $mainOne;
}
</style>