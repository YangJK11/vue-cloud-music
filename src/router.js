import VueRouter from 'vue-router'

import Recommended from './components/Recommended.vue'
import Hot from './components/Hot.vue'
import Search from './components/Search.vue'
import Song from './components/Song.vue'
import Home from './components/Home.vue'

const routes = [{
    path: '/',
    component: Home,
    children: [{
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
    }]
}, {
    path: '/song',
    component: Song
}];

const router = new VueRouter({
    routes,
    mode: 'history'
});

export default router