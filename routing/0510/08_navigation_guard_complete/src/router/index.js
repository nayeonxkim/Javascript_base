import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HelloView from '@/views/HelloView.vue'
import LoginView from '@/views/LoginView.vue'
import DogView from '@/views/DogView.vue'

Vue.use(VueRouter)
const isLoggedIn = true 

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/hello/:userName',
    name: 'hello',
    component: HelloView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView, 
    beforeEnter(to, from, next) {
      if (isLoggedIn === true) {
        console.log('로그인된 상태')
        next({name:'home'})
      } else {
        console.log('로그인되어있지 않은 상태')
        next()
      }
    }
  },
  {
    path:'/dog/:breed',
    name:'dog',
    component:DogView,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// router/index.js
// ****전역****
// router.beforeEach((to, from, next) => {
//   // CODE HERE

//   // 로그인 여부 판단
//   const isLoggedIn = false
  
//   // 로그인이 필요한 페이지 지정
//   const allowPages = ['login', 'home']

//   // 이동할 페이지(to)가 로그인이 필요한 페이지인지 확인
//   const isAuthRequired = !allowPages.includes(to.name)

//   // 로그인 여부에 따라 다른 페이지로 이동
//   if (isAuthRequired && !isLoggedIn) {
//     console.log('Login으로 이동')
//     alert('로그인이 필요합니다!')
//     next({name:'login'})
//   } else {
//     console.log('to로 이동')
//     next()
//   }

// })





export default router
