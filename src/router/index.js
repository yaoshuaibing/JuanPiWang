import Vue from 'vue'
import Router from 'vue-router'
import HomeCom from '@/components/home/home'
import CartCom from '@/components/cart/cart'
import MyCom from '@/components/my/my'
import Error from '@/components/error/error'
import Register from '../components/registor/registor.vue'

// classify页面及其子页面
import Classify from '../components/classify/classify.vue'
import Search from '../components/classify/Search.vue'
import ClassifyCate from '../components/classify/ClassifyCate.vue'
import ClassifyCateDetails from '../components/classify/ClassifyCateDetails.vue'


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
      component: Classify
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/cate',
      name: 'cate',
      component: ClassifyCate
    },
    {
      path: '/cateDetails',
      name: 'cateDetails',
      component: ClassifyCateDetails
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
      path: '*',
      name: 'error',
      component:Error
    }

  ]
})
export default router
router.beforeEach((to, from, next) => {
  if (to.meta.authRequired !== true) {
    console.log(to);
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
