import Router from 'vue-router'
import HomePage from '@/components/HomePage.vue'
import LoginPage from '@/components/Login.vue'
import RegisterPage from '@/components/Register.vue'
import BlogsList from '@/components/BlogsList'
import NewsLetter from '@/components/NewsLetter.vue'
import TagsPage from '@/components/TagsPage.vue'
import store from '@/store'

const router = new Router({
    mode: 'history',
    routes: [
        {
            name: 'home',
            path: '/',
            component: HomePage
        },
        {
            name: 'login',
            path: '/login',
            component: LoginPage
        },
        {
            name: 'blogs',
            path: '/blogs',
            component: BlogsList,
            props: true
        },
        {
            name: 'register',
            path: '/register',
            component: RegisterPage
        },
        {
            name: 'blog-details',
            path: '/blogs/:id',
            props: true,
            // component: BlogDetail,
        },
        {
            name: 'blogs-tags',
            path: '/tags',
            props: true,
            component: TagsPage
        },
        {
            name: 'blogs-tag',
            path: '/tags/:tag',
            props: true,
            component: BlogsList
        },
        {
            name: 'blogs-category',
            path: '/categories/:category',
            props: true,
            component: BlogsList
        },
        {
            name: 'newsletter',
            path: '/newsletter',
            component: NewsLetter
        },
        {
            name: 'add-blog',
            path: '/add',
            // component: AddBlog
        },
        {
            name: 'not-found',
            path: '*',
            // component: PageNotFound
        },
    ]
})

router.beforeEach((to, from, next) => {
    if (to.name === 'add-blog' && !store.getters.isAuthenticated) {
        return next({
            name: 'login'
        })
    }

    next()
})

export default router