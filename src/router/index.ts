import {createRouter,createWebHistory,RouteRecordRaw} from 'vue-router'

const routes : RouteRecordRaw[] = [
    {
        path:'/',
        redirect:'/index'
    },
    {
        path:'/index',
        name:'layout',
        component: ()=> import('@/views/Layout.vue'),
        children:[
            {
                path:'',
                name:'IndexPage',
                component: () => import('@/views/index/IndexPage.vue')
            },
            {
                path:'articlelist',
                name:'Articlelist',
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
    }
];

const router = createRouter({
	linkExactActiveClass: 'router-active',
    history: createWebHistory(),
    routes
})
// 路由守卫
// router.beforeEach(()=>{

// })
export default router;
