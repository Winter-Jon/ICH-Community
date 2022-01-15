import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router/router'
import store from './store/store'
import waterfall from 'vue-waterfall2';

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(waterfall)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
