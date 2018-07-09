import Vue from 'vue'
import Vuetify from 'vuetify'
import VueRouter from 'vue-router'
import App from './App.vue'
import 'material-design-icons-iconfont/dist/material-design-icons.css' 
import 'vuetify/dist/vuetify.css'
import router from './router.js'




import Util from './util';
import axios from 'axios';
Vue.prototype.$ajax = axios;

Vue.use(Util);
Vue.use(Vuetify);
Vue.use(VueRouter);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
