import Vue from 'vue'
import Router from 'vue-router'
import HomeView from '../views/index/HomeView.vue'
import productList from '../views/product-list'
import billplease from '../views/please'
import vuex from '../store/index';
// import vuex from '../store/index';
// import $ from 'jquery'
let $;
if (typeof window !== 'undefined') {
  // 在这里使用 jQuery
   $= require( 'jquery')
}
Vue.use(Router)

const routes = [{
    path: '/',
    name: 'home',
    component: HomeView,
    // children: [
    //   {
    //     path: '/productList/:id',
    //     name: 'productList',
    //     component: productList,
    //   }
    // ]
  },
  {
    path: '/cart',
    name: 'cart',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '@/components/cart/cart.vue')
  },
  {
    path: '/nutritionLabeling',
    name: '/nutritionLabeling',
    component: () => import('@/views/nutritionLabeling')
  },
  {
    path: '/productList/:id/:name',
    name: 'productList',
    component: productList,
  },
  {
    path: '/please/:id',
    name: 'please',
    component: billplease,
  }
]

// const router = new VueRouter({
//   routes,
//   mode: 'history',
//   scrollBehavior(to, from, savedPosition) {
//     // 始终滚动到顶部
//     if (savedPosition) {
//       return savedPosition
//     } else {
//       return {
//         x: 0,
//         y: 0
//       }
//     }
//   },
// })
// router.beforeEach((to, from, next) => {
//   // console.log(to);
//   // console.log(vuex.getters['cart/number']);
//   if (to.name !== 'please') {
//     $('.nextStep').removeClass('display')
//   } else {
//     $('.nextStep').addClass('display')
//   }

//   if (to.name == 'cart' && vuex.getters['cart/number'] === 0) {
//     next({
//       path: '/'
//     })
//   }
//   return next();
// })
// export default router


export default function createRouter() {
  //创建router实例
  const router =new Router({
    routes,
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    // 始终滚动到顶部
    if (savedPosition) {
      return savedPosition
    } else {
      return {
        x: 0,
        y: 0
      }
    }
  },
    
})

router.beforeEach((to, from, next) => {
  // console.log(to);
  // console.log(vuex.getters['cart/number']);



  // if (to.name !== 'please') {
  //   $('.nextStep').removeClass('display')
  // } else {
  //   $('.nextStep').addClass('display')
  // }

  if (to.name == 'cart' && vuex.getters['cart/number'] === 0) {
    next({
      path: '/'
    })
  }
  return next();
})
  return router
}