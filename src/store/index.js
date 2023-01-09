import Vuex from 'vuex'
import auth from './modules/auth'

const BLOGS = 'blogs'
const BLOG = 'blog'
const store = new Vuex.Store({
    state: {
        blogs: localStorage.getItem(BLOGS) || [],
        blog: localStorage.getItem(BLOG) || {},
        isLoading: false,
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
        },
        setLoading(state) {
            state.isLoading = !state.isLoading
        },
    },
    getters: {
        blogs: state => { return state.blogs },
        blog: state => { return state.blog },
        isLoading: state => { return state.isLoading },
    }
})

export default store