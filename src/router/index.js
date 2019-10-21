import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);
// 配置一级路由
const login = () => import('../pages/login.vue');
const index = () => import('../pages/index.vue');
export default new Router({
  routes: [
    {
      path: '/login',
      component: login,
    },
    {
      path: '/index',
      component: index,
    },
    {
      path: '*',
      redirect: '/login',
    },
  ],
});
