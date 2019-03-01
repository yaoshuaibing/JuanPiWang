import Vue from 'vue'
import Router from 'vue-router'
import HomeCom from '@/components/home/home'
import CartCom from '@/components/cart/cart'
import ClassifyCom from '../components/classify/classify.vue'
import MyCom from '@/components/my/my'
import Error from '@/components/error/error'
import Register from '../components/registor/registor.vue'
import KeywordCom from '../components/keywords/keywords.vue'
Vue.use(Router)
const router =new Router({
  routes: [
    {
      path: '/',
      redirect:'/home'
    },
    {
      path: '/home',
      name: 'home',
      component: HomeCom
    },
    {
      path: '/cart',
      name: 'cart',
      component: CartCom,
      meta: {
        authRequired: true
      }
    },
    {
      path: '/classify',
      name: 'classify',
      component: ClassifyCom
    },
    {
      path: '/my',
      name: 'my',
      component: MyCom
    }, 
    // {
    //   path: '/detail/:id',
    //   name: 'detail',
    //   component: Detail
    // }, 
    {
      path: '/register',
      name: '/register',
      component: Register

    },
    {
      path: '/keyword',
      name: '/keyword',
      component: KeywordCom

    },
    {
      path: '*',
      name: 'error',
      component:Error
    }

  ]
})
export default router
router.beforeEach((to, from, next) => {
  if (to.meta.authRequired !== true) {
    return next()
  }
  if (to.path === '/register') {
    return next()
  }

  const isLogin = Boolean(window.localStorage.getItem('username'))
  if (!isLogin) {
    next('/register')
  } else {
    next()
  }
})