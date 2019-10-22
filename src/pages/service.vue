<template>
  <div class="service">
    <el-tabs v-model="activeName">
      <el-tab-pane label="维修" name="first">
          <v-servicestation></v-servicestation>
      </el-tab-pane>
      <el-tab-pane label="维修评论" name="second">
          <v-servicecommit></v-servicecommit>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import API from "../common/js/API";
import vServicestation from '../components/views/serviceStation'
import vServicecommit from '../components/views/serviceCommit'
export default {
  components: {
    vServicestation,vServicecommit
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
.service>>>.el-tabs__item {
  font-size: 17px;
}
.service>>>.el-tabs__item:hover {
  color: $mainOne;
}
.service>>>.el-tabs__item.is-active {
  color: $mainOne;
}
.service>>>.el-tabs__active-bar {
  background: $mainOne;
}
</style>