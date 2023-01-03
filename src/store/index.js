import Vuex from 'vuex'
import auth from './modules/auth'

const BLOGS = 'blogs'
const store = new Vuex.Store({
    state: {
        blogs: localStorage.getItem(BLOGS) || []
    },
    modules: {
        auth: auth
    },
    mutations: {
        updateBlogs(state, blogs) {
            localStorage.setItem(BLOGS, blogs)
            state.blogs = blogs
        }
    },
    getters: {
        blogs: state => { return state.blogs }
    }
})

export default store