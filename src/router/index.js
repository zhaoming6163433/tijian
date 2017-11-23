import Vue from 'vue'
import Router from 'vue-router'
import home from '@/view/home'//内容路由
import homechild from '@/view/home/homechild'//首页
import addphy from '@/view/check/addphy'//添加检查
import login from '@/view/login/login'//添加检查

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
                path: '/check/addphy',
                name: 'addphy',
                component: addphy
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
