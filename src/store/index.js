import Vuex from 'vuex'
import auth from './modules/auth'

const store = new Vuex.Store({
    state: {
        blogs: []
    },
    modules: {
        auth: auth
    }
})

export default store