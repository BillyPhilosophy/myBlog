import { getItem } from './../utils/storage';
import {createRouter,createWebHistory,RouteRecordRaw} from 'vue-router'
import NProgress from 'nprogress';
import '@/assets/style/myNprogress.css';
const routes : RouteRecordRaw[] = [
    {
        path:'/',
        redirect:'/index'
    },
    // 主页布局以及其主要模块
    {
        path:'/index',
        name:'layout',
        component: ()=> import('@/views/Layout.vue'),
        children:[
            {
                path:'',
                name:'IndexPage',
                meta: {
                    title: '首页',
                    requireAuth: false,
                    keepAlive: false
                },
                component: () => import('@/views/index/IndexPage.vue')
            },
            {
                path:'articlelist',
                name:'Articlelist',
                meta: {
                    title: '文章列表',
                    requireAuth: false,
                    keepAlive: true
                },
                component: () => import('@/views/articlelist/Articlelist.vue')
            },
            {
                path:'messageboard',
                name:'Messageboard',
                component: () => import('@/views/messageboard/Messageboard.vue')
            },
            {
                path:'anime',
                name:'Anime',
                component: () => import('@/views/anime/Anime.vue')
            },
            {
                path:'edit',
                name:'Edit',
                component: () => import('@/views/edit/Edit.vue')
            }
        ]
    },
    {
        path: '/welcome',
        name: 'welcome',
        meta: {
          title: '欢迎~'
        },
        component: () => import('@/views/welcomes/Welcomes.vue')
    },
    {
      path: '/login',
      name: 'Login',
      meta: {
        requireAuth: false
      },
      component: () => import('@/views/login/index.vue')
    },
    {
        path: '/404',
        name: '404',
        meta: {
          title: '找不到了~'
        },
        component: () => import('@/views/404.vue')
    }
];

const router = createRouter({
	linkExactActiveClass: 'router-active',
    history: createWebHistory(),
    routes
})
// 路由守卫
router.beforeEach((to, from, next) => {
    const token = getItem('user');
    if (to.meta.title) {
      document.title = `${to.meta.title}-D&C-blog 我的个人小站`;
    }
    if (to.meta.requireAuth) {
      if (token) {
        NProgress.start();
        next();
      } else {
        ElMessageBox.confirm('该页面需要登录才能使用，请问是否跳转到登录页面？', '登录提示', {
          confirmButtonText: '确认',
          cancelButtonText: '我不去了',
          type: 'warning'
        })
          .then(() => {
            NProgress.start();
            next({ path: '/login' });
          })
          .catch(() => {
            return;
          });
      }
    } else {
      NProgress.start();
      next();
    }
  });
  router.afterEach(() => {
    NProgress.done();
}); 
export default router;
