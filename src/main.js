import Vue from 'vue'
import Vuetify from 'vuetify'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from './components/Home.vue'
import Grid from './components/Grid.vue'
import 'material-design-icons-iconfont/dist/material-design-icons.css' 
import 'vuetify/dist/vuetify.css'
import router from './router.js'




Vue.use(Vuetify);
Vue.use(VueRouter);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
