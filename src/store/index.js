import Vue from 'vue'
import Vuex from 'vuex'
import posts from './posts'
import VueRouter from 'vue-router'

Vue.use(Vuex)
Vue.use(VueRouter)

const store = new Vuex.Store({
    modules: {
        posts
    }
})

export default store