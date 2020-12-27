// @ts-nocheck
import Vue from 'vue'
import Vuex from 'vuex'
import home from './modules/home'
import user from './modules/user'
import search from './modules/search'
//?注册组件
Vue.use(Vuex);
const mutations = {}
const actions = {}
const getters = {}
export default new Vuex.Store({
    mutations,
    actions,
    getters,
    modules: {
        home,user,search
    }
    
})