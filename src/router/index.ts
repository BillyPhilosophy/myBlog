import {createRouter,createWebHistory,RouteRecordRaw} from 'vue-router'

const routes : RouteRecordRaw[] = [
    {
        path:'/',
        redirect:'/index'
    },
    {
        path:'/index',
        component: ()=> import('@/views/Layout.vue'),
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
