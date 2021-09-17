import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/vuestart',
    name: 'VueStart',
    component: () => import(/* webpackChunkName: "vuestart" */ '../views/VueStart.vue')
  },
  {
    path: '/databinding',
    name: 'DataBinding',
    component: () => import(/* webpackChunkName: "databinding", webpackPrefetch: true */ '../views/DataBinding.vue')
  },
  {
    path: '/databindinghtml',
    name: 'DataBindingHtml',
    component: () => import(/* webpackChunkName: "databindinghtml", webpackPrefetch: true */ '../views/DataBindingHtml.vue')
  },
  {
    path: '/save',
    name: 'Save',
    component: () => import(/* webpackChunkName: "save", webpackPrefetch: true */ '../views/Save.vue')
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import(/* webpackChunkName: "search", webpackPrefetch: true */ '../views/Search.vue')
  },
  {
    path: '/serverdata',
    name: 'ServerData',
    component: () => import(/* webpackChunkName: "serverdata", webpackPrefetch: true */ '../views/ServerData.vue')
  },
  {
    path: '/slot',
    name: 'SlotUseModalLayout',
    component: () => import(/* webpackChunkName: "slot" */ '../views/SlotUseModalLayout.vue')
  },
  {
    path: '/provide',
    name: 'ProvideInject',
    component: () => import(/* webpackPrefetch: true, webpackChunkName: "provide" */ '../views/ProvideInject.vue')
  },
  {
    path: '/mixins',
    name: 'Mixins',
    component: () => import(/* webpackChunkName: "mixins" */ '../views/Mixins.vue')
  },
  {
    path: '/calculator',
    name: 'Calculator',
    component: () => import(/* webpackChunkName: "calculator" */ '../views/Calculator.vue')
  },
  {
    path: '/compositionapi2',
    name: 'CompositionAPI2',
    component: () => import(/* webpackChunkName: "compositionapi2" */ '../views/CompositionAPI2.vue')
  },
  {
    path: '/compositionapi4',
    name: 'CompositionAPI4',
    component: () => import(/* webpackChunkName: "compositionapi4" */ '../views/CompositionAPI4.vue')
  },
  {
    path: '/compositionapiprovide',
    name: 'CompositionAPIProvide',
    component: () => import(/* webpackChunkName: "compositionapiprovide" */ '../views/CompositionAPIProvide.vue')
  },
  {
    path: '/customdirective',
    name: 'CustomDirective',
    component: () => import(/* webpackChunkName: "customdirective" */ '../views/CustomDirective.vue')
  },
  {
    path: '/plugins',
    name: 'Plugins',
    component: () => import(/* webpackChunkName: "plugins" */ '../views/Plugins.vue')
  },
  {
    path: '/storeaccess',
    name: 'StoreAccess',
    component: () => import(/* webpackChunkName: "storeaccess" */ '../views/StoreAccess.vue')
  },
  {
    path: '/kakaologin',
    name: 'KakaoLogin',
    component: () => import(/* webpackChunkName: "kakaologin" */ '../views/KakaoLogin.vue')
  },
  {
    path: '/naverlogin',
    name: 'NaverLogin',
    component: () => import(/* webpackChunkName: "naverlogin" */ '../views/NaverLogin.vue')
  },
  {
    path: '/googlelogin',
    name: 'GoogleLogin',
    component: () => import(/* webpackChunkName: "googlelogin" */ '../views/GoogleLogin.vue')
  },
  {
    path: '/databinding2',
    name: 'DataBinding2',
    component: () => import(/* webpackChunkName: "databinding2" */ '../views/DataBinding2.vue')
  },
  {
    path: '/selectcheckboxradio',
    name: 'SelectCheckboxRadio',
    component: () => import(/* webpackChunkName: "selectcheckboxradio" */ '../views/SelectCheckboxRadio.vue')
  },
  {
    path: '/attributebutton',
    name: 'AttributeButton',
    component: () => import(/* webpackChunkName: "attributebutton" */ '../views/AttributeButton.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
