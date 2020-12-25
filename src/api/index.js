import ajax from './ajax'
//todo 暴露一个发哦三级页面请求的数据
export function reqCategoryList() {
    return ajax({
        url: '/product/getBaseCategoryList'
    })
}