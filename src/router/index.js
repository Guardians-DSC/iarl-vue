import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'
import FileManager from '@/views/FileManager'
import store from '@/store'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: () => store.state.user.validToken ? '/FileManager' : '/Login'
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/FileManager',
      name: 'FileManager',
      component: FileManager
    }
  ]
})
