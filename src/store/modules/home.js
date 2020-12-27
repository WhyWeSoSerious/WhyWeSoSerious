// @ts-nocheck
// @ts-ignore
//todo 引入发送3级请求的ajax
import { reqCategoryList } from '@/api'
import { reqBannerList, reqRecommends, reqFloors} from '../../api'
const state = {
    categoryList: [],
    bannerList: [],
    recommends: [],
    floors: [],

}
//todo 在vuex上记录这个状态
const mutations ={
    RECEIVE_CATEGORYLIST_LIST(state, categoryList){
        state.categoryList = categoryList.splice(0,15)
    },
    RECEIVE_BANNERLIST_LIST(state, list) {
        state.bannerList = list
    },
    RECEIVE_RECOMMENDS(state, recommends) {
        state.recommends = recommends
    },
    RECEIVE_FLOORS(state, floors) {
        state.floors = floors
    
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
    },
    //todo  请求广告轮播
    async getBannerList({ commit }) {
        const result = await reqBannerList();
       
            const bannerList = result.data;
            commit('RECEIVE_BANNERLIST_LIST',bannerList)
        
    } ,
 //todo 获取今日推荐的列表
    async getRecommends({ commit }) {
        console.log('getRecommends()')
        // 发异步ajax请求(调用接口请求函数)
        const result = await reqRecommends()
        // 如果请求成功了, 得到数据提交给mutation
        if (result.code === 200) {
            const recommends = result.data
            commit('RECEIVE_RECOMMENDS', recommends)
        }
    },
    //todo 获取楼层的
    async getFloors({ commit }) {
        console.log('getFloors()')
        // 发异步ajax请求(调用接口请求函数)
        const result = await reqFloors()
        // 如果请求成功了, 得到数据提交给mutation
        if (result.code === 200) {
            const floors = result.data
            commit('RECEIVE_FLOORS', floors)
        }
    },
};
const getters = {};
//todo  暴露这些组件
export default {
    state,mutations,actions,getters
}