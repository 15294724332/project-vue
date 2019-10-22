import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);
// 配置一级路由
const login = () => import('../pages/login.vue');
const index = () => import('../pages/index.vue');
// 配置二级路由
const welcome = () => import('../pages/welcome.vue');
const manage = () => import('../pages/manage.vue');
const banner = () => import('../pages/banner.vue');
const teach = () => import('../pages/teach.vue');
const water = () => import('../pages/water.vue');
const house = () => import('../pages/house.vue');
const changePass = () => import('../pages/changePass.vue');
const service = () => import('../pages/service.vue');
export default new Router({
  routes: [
    {
      path: '/login',
      component: login,
    },
    {
      path: '/index',
      component: index,
      children:[
        {
          path:"welcome",
          component:welcome,
          name:"欢迎"
        },
        {
          path:"manage",
          component:manage,
          name:"管理员管理"
        },
        {
          path:"banner",
          component:banner,
          name:"banner管理"
        },
        {
          path:"teach",
          component:teach,
          name:"家教管理",
        },
        {
          path:"water",
          component:water,
          name:"水站管理"
        },
        {
          path:"service",
          component:service,
          name:"维修管理"
        },
        {
          path:"house",
          component:house,
          name:"家政管理"
        },
        {
          path:"changePass",
          component:changePass,
          name:"修改密码"
        },
        {
          path:"",
          redirect:"welcome",
          name:"欢迎"
        },
      ]
    },
    {
      path: '*',
      redirect: '/login',
    },
  ],
});
