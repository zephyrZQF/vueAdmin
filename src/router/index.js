import Vue from "vue";
import VueRouter from "vue-router";
import Home from '../views/Home'
import Login from '../views/Login'
import Index from '../views/Index'
import User from '../views/sys/User'
import Role from '../views/sys/Role'
import Menu from '../views/sys/Menu'
import UserCenter from "../views/UserCenter";

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children:[
      {
        path: '/index',
        name: 'Index',
        component: Index
      },
      {
        path: '/sys/users',
        name: 'SysUser',
        component: User
      },
      {
        path: '/sys/roles',
        name: 'SysRole',
        component: Role
      },
      {
        path: '/sys/menus',
        name: 'SysMenus',
        component: Menu
      },
      {
        path: '/userCenter',
        name: 'userCenter',
        component: UserCenter
      },


    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }

];

const router = new VueRouter({
  routes,
});

export default router;
