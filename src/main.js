// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
Vue.config.productionTip = false
// 安装element-ui框架
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// 使用element-ui
Vue.use(ElementUI);
// 引入静态资源
import './assets/css/reset.css'
// 配置axios为全局使用
import axios from 'axios'
Vue.prototype.$axios=axios;
// 引入过滤器
import Filter from './filter'
for(var i in Filter){
  Vue.filter(i,Filter[i]);
}
// 引入全局组件
import commonCom from './components/common' 
for (var key in commonCom){
  Vue.component(key,commonCom[key]);
}
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
