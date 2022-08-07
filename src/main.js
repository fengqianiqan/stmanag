// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import 'font-awesome/css/font-awesome.min.css'

import axios from 'axios'

import service from './service'

import echarts from 'echarts'

Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.prototype.axios = axios // 挂载到原型，可在全局使用
Vue.prototype.service = service
Vue.prototype.$echarts = echarts
/* eslint-disable no-new */
// GOOD
router.beforeEach((to, from, next) => {
  let flag = localStorage.getItem('username')
  if (!flag) {
    if (to.path !== '/login') {
      next('/login')
    }
  } else next()
  // if (to.name !== 'Login' && !isAuthenticated) next({ name: 'Login' })
  next()
})
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
