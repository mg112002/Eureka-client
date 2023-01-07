import { login } from '@/services/auth'

const KEY_TOKEN = 'token'
const KEY_EMAIL = 'email'
const KEY_ROLE = 'role'
const KEY_ID = 'id'
const BLOGS = 'blogs'

const auth = {
    state: {
        token: localStorage.getItem(KEY_TOKEN) || '',
        email: localStorage.getItem(KEY_EMAIL) || '',
        role: localStorage.getItem(KEY_ROLE) || '',
        id: localStorage.getItem(KEY_ID) || '',
        blogs: localStorage.getItem(BLOGS) || ''
    },
    getters: {
        isAuthenticated(state) {
            return !!state.token
        },
        isAdmin(state) {
            return state.role === 'admin'
        }
    },
    mutations: {
        setToken(state, token) {
            state.token = token
        },
        setEmail(state, email) {
            state.email = email
        },
        setRole(state, role) {
            state.role = role
        },
        setId(state, id) {
            state.id = id
        },
        setBlogs(state, blogs) {
            localStorage.setItem(BLOGS, blogs)
            state.blogs = blogs
        }
    },
    actions: {
        login({ commit }, credentials) {

            return login(credentials)
                .then(res => {
                    const { token, email, role, id } = res.data

                    localStorage.setItem(KEY_TOKEN, token)
                    localStorage.setItem(KEY_EMAIL, email)
                    localStorage.setItem(KEY_ROLE, role)
                    localStorage.setItem(KEY_ID, id)

                    commit('setToken', token)
                    commit('setEmail', email)
                    commit('setRole', role)
                    commit('setId', id)

                    return email;
                });
        },
        logout({ commit }) {
            localStorage.removeItem(KEY_TOKEN)
            localStorage.removeItem(KEY_EMAIL)
            localStorage.removeItem(KEY_ROLE)
            localStorage.removeItem(KEY_ID)

            commit('setToken', '')
            commit('setEmail', '')
            commit('setRole', '')
            commit('setId', '')

            return Promise.resolve();
        }
    }
};

export default auth;