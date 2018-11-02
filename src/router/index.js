import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'
import FileManager from '@/views/FileManager'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/fileManager',
      name: 'FileManager',
      component: FileManager
    }
  ]
})
