<template>
<div class="right">
    <p>{{$route.name}}</p>
    <router-view></router-view>
</div>
</template>
<script>
import API from '../../common/js/API'
export default {
}
</script>
<style lang="stylus" scoped>
@import '../../common/stylus/index.styl'
.right{
    flex 1;
    p{
        color $mainOne;
        font-size 40px;
        height 50px;
        line-height 50px;
        padding 10px;
       font-family "\5B8B\4F53","\5FAE\8F6F\96C5\9ED1",Arail,Tabhoma;
       font-weight bold;
    }
}
</style>