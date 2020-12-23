import Vue from 'vue'
import App from './App.vue'
import './style/common.css'
import router from './router/router'
import itemContainer  from "./components/itemContainer";
import store from './store/store'

Vue.config.productionTip = false
Vue.component('itemContainer',itemContainer)

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')

