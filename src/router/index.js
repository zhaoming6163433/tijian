import Vue from 'vue'
import Router from 'vue-router'
import home from '@/view/home'//内容路由
import homechild from '@/view/home/homechild'//首页
import allphy from '@/view/check/allphy'//添加检查
import nocheck from '@/view/check/nocheck'//未检查
import login from '@/view/login/login'//登录
import handlelog from '@/view/limithandle/handlelog'//权限操作

Vue.use(Router)

export default new Router({
  routes: [
    /*{ path: '*', component: NotFoundComponent },//404页面*/
    {//菜单内容页面
        path: '/home',
        name: 'home',
        component: home,
        children: [
            {//首页 系统首页
                path: '/home/homechild',
                name: 'homechild',
                component: homechild
            },
            {//检查 添加体检
                path: '/check/allphy',
                name: 'allphy',
                component: allphy
            },
            {//未检查
                path: '/check/nocheck',
                name: 'nocheck',
                component: nocheck
            },
            {//权限 操作日志
                path: '/limithandle/handlelog',
                name: 'handlelog',
                component: handlelog
            }
        ]
    },
    {//登录
        path: '/',
        name: 'login',
        component: login
    }
  ]
})
