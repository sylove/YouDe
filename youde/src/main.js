import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Axios from 'axios'


// 引入重置样式
import '@/assets/less/reset.less'

// 引入mint-ui
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.use(Mint)

//全局注册axios
Vue.prototype.$axios=Axios

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
