import ajax from './ajax'
import mockAjax from './mockAjax'
//todo 暴露一个发哦三级页面请求的数据
export function reqCategoryList() {
    return ajax({
        url: '/product/getBaseCategoryList'
    })
}
//todo   获取广告轮播的
export function reqBannerList() {
    return ajax({
        url:'/cms/banner'
    })
} 
//todo  获取今日土建的列表
export const reqRecommends = () => mockAjax('/recommends')
//todo  获取楼层数据
export const reqFloors = () => mockAjax('/floors')
//todo 获取搜索
export const reqSearch = (searchParams) => ajax.post('/list', searchParams) 


