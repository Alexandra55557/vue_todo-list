import Home from '@/views/Home'


import {createWebHistory, createRouter} from 'vue-router'


const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/todos',
        component: () => import('./views/Todos.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
router.beforeEach((to, from, next) =>{
    if (!to.meta.middleware) {
        return next()
    }
    const middleware = to.meta.middleware

    const context = {
        to,
        from,
        next
    }
    return middleware[0]({
        ...context
    })
})

export default router

