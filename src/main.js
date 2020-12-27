import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import './plugins/swiper' 
import TypeNav from './components/type-nav'
//mock数据
import './mock/mockServer'

Vue.config.productionTip = false
Vue.component(TypeNav.name, TypeNav)
new Vue({
  render: h => h(App),
  beforeCreate() {
    // 1) 创建或指定事件总线对象, 保存到Vue的原型上
    Vue.prototype.$bus = this
  },
  router, store
}).$mount('#app')
