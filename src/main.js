//引入 vue.js
import Vue from 'vue'
//引入 App.vue
import App from './App.vue'
//false 阻止Vue启动时生成生产的提示？
Vue.config.productionTip = false

//创建新的 Vue 实例
new Vue({
  render: h => h(App),
}).$mount('#app')
