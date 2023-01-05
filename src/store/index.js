import Vuex from 'vuex'
import auth from './modules/auth'

const BLOGS = 'blogs'
const BLOG = 'blog'
const store = new Vuex.Store({
    state: {
        blogs: localStorage.getItem(BLOGS) || [],
        blog: localStorage.getItem(BLOG) || {}
    },
    modules: {
        auth: auth
    },
    mutations: {
        updateBlogs(state, blogs) {
            localStorage.setItem(BLOGS, blogs)
            state.blogs = blogs
        },
        updateBlog(state, blog) {
            localStorage.setItem(BLOG, blog)
            state.blog = blog
        }
    },
    getters: {
        blogs: state => { return state.blogs },
        blog: state => { return state.blog }
    }
})

export default store