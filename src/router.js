import VueRouter from 'vue-router'

import Recommended from './components/Recommended.vue'
import Hot from './components/Hot.vue'
import Search from './components/Search.vue'


const routes = [
    {
        path: '/recommended',
        component: Recommended
    }, {
        path: '/hot',
        component: Hot
    }, {
        path: '/search',
        component: Search
    }, {
        path: '/',
        redirect: 'recommended'
    }
];

const router = new VueRouter({
    routes,
    mode: 'history'
});

export default router