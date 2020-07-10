import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Me from './views/Me.vue'

Vue.use(Router)

export default new Router({
    name: 'router',
    routes: [
        {
          path: '/',
          name: 'Home',
          component: Home
        },
        {
          path: '/login',
          name: 'Login',
          component: Login
        },
        {
          path: '/me',
          name: 'Me',
          component: Me
        }
      ]
})