import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/social-login',
    name: 'SocialLogin',
    component: () => import('../views/SocialLogin.vue')
  },
  // {
  //   path: '/recover-password',
  //   name: 'recover-password',
  //   component: () => import('../views/RecoverPassword.vue')
  // },
  // {
  //   path: '/recover-password-email',
  //   name: 'recover-password-email',
  //   component: () => import('../views/RecoverPasswordEmail.vue')
  // },
  {
    path: '/registry',
    name: 'registry',
    component: () => import('../views/Registry.vue')
  },
  // {
  //   path: '/user-profile',
  //   name: 'user-profile',
  //   component: () => import('../views/User_profile.vue')
  // },

]

const router = new VueRouter({
  routes,
  base:'/caliope/app',
  mode:"history"
})

export default router
