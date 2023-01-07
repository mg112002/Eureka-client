import Router from 'vue-router'
import HomePage from '@/components/HomePage.vue'
import LoginPage from '@/components/Login.vue'
import RegisterPage from '@/components/Register.vue'
import BlogsList from '@/components/BlogsList'
import NewsLetter from '@/components/NewsLetter.vue'
import TagsPage from '@/components/TagsPage.vue'
import PageNotFound from '@/components/PageNotFound.vue'
import BlogDetail from '@/components/BlogDetail.vue'
import EditBlog from '@/components/EditBlog.vue'
import AddBlog from '@/components/AddBlog.vue'
import store from '@/store'
import { Message } from 'element-ui'
import { getBlogsByCategory, getBlogsByTag, getBlogsBySearch, getBlogById } from '@/services/getBlogs'

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
            component: BlogDetail,
        },
        {
            name: 'edit-blog',
            path: '/blogs/edit/:id',
            props: true,
            component: EditBlog
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
            component: AddBlog
        },
        {
            name: 'not-found',
            path: '*',
            component: PageNotFound
        },
    ]
})

router.beforeEach((to, from, next) => {
    if (to.name === 'add-blog' && !store.getters.isAuthenticated) {
        return next({
            name: 'login'
        })
    }
    if (to.name === 'blogs-category') {
        let cat = to.params.category + to.hash;
        if (cat === 'C#') {
            cat = 'CS'
        }
        (async function getBlogs() {
            const res = await getBlogsByCategory(cat)
            const blogs = res.data
            store.commit('updateBlogs', blogs)
        })()
    }
    if (to.name === 'blogs-tag') {
        const tag = to.params.tag;
        (async function getBlogs() {
            const res = await getBlogsByTag(tag)
            const blogs = res.data
            store.commit('updateBlogs', blogs)
        })()
    }
    if (to.name === 'blogs') {
        const keyWord = to.query.keyWord;
        (async function getBlogs() {
            const res = await getBlogsBySearch(keyWord)
            const blogs = res.data
            store.commit('updateBlogs', blogs)
            if (blogs.length) {
                Message({
                    type: 'success',
                    message: 'Match Found',
                    duration: 2000
                })
            } else {
                Message({
                    type: 'error',
                    message: 'No match found',
                    duration: 2000
                })
            }
        })()
    }
    if (to.name === 'edit-blog' && store.getters.isAuthenticated) {
        const id = to.params.id;
        (async function getBlog() {
            const res = await getBlogById(id)
            const blog = res.data
            if (blog.postedBy === store.state.auth.email) {
                store.commit('updateBlog', blog)
            } else {
                return next({
                    name: 'login'
                })
            }
        })()
    }
    if (to.name === 'blog-details') {
        const id = to.params.id;
        (async function getBlog() {
            const res = await getBlogById(id)
            const blog = res.data
            store.commit('updateBlog', blog)
        })()
    }
    next()
})

export default router