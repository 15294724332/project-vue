<template>
  <div class="index">
    <v-header :name="name"></v-header>
    <div class="main">
      <v-left></v-left>
      <v-right></v-right>
    </div>
  </div>
</template>
<script>
import API from "../common/js/API";
import vHeader from "../components/views/header";
import vLeft from "../components/views/left";
import vRight from "../components/views/right";
export default {
    data(){
        return{
            name:""
        }
    },
    mounted(){
        this.name=this.$route.query.name;
    },
  components: {
    vHeader,
    vLeft,
    vRight
  }
};
</script>
<style lang="stylus" scoped>
@import '../common/stylus/index.styl';
.index{
    width 100vw;
    height 100vh;
    display flex;
    flex-direction column;
    .main{
        flex 1;
        display flex;
    }
}
</style>