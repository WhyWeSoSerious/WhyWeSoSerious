// @ts-ignore
//todo 引入发送3级请求的ajax
import { reqCategoryList } from '@/api'
const state = {
    categoryList:[]
}
//todo 在vuex上记录这个状态
const mutations ={
    RECEIVE_CATEGORYLIST_LIST(state, categoryList){
        state.categoryList = categoryList.splice(0,15)
    }
}
const actions = {
    //todo 发送请求获取数据
    async getCategoryList({ commit }) {
        const result = await reqCategoryList();
        if (result.code === 200) {
            const categoryList = result.data;
            commit('RECEIVE_CATEGORYLIST_LIST', categoryList)
        }
    }
};
const getters = {};
//todo  暴露这些组件
export default {
    state,mutations,actions,getters
}