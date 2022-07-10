import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login',
      hidden: true
    },
    {
      path: '/login',
      name: 'Login',
      hidden: true,
      component: () => import('@/components/Login')
    },
    {
      path: '/home',
      name: '学生管理',
      redirect: 'home/student',
      component: () => import('@/components/Home'),
      children: [
        {
          path: '/home/student',
          name: '学生列表',
          iConCla: 'fa fa-graduation-cap',
          component: () => import('@/components/student/StudentList')
        },
        {
          path: '/home/work',
          name: '作业列表',
          iConCla: 'fa fa-building',
          component: () => import('@/components/student/WorkList')
        },
        {
          path: '/home/info',
          name: '信息列表',
          iConCla: 'fa fa-info-circle',
          component: () => import('@/components/student/InfoList')
        }
      ]
    },
    {
      path: '*',
      name: 'Notfound',
      hidden: true,
      component: () => import('@/components/Notfound')
    }
  ],
  mode: 'history'
})
