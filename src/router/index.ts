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
