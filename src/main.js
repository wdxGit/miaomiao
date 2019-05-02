import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import router from './routers'
import store from './stores'

import axios from 'axios'
Vue.prototype.axios = axios;

Vue.filter('setWH', (url, arg) => {
    return url.replace(/w\.h/, arg)
})

import scroller from '@/components/Scroller'
Vue.component('scroller', scroller)

import Cube from 'cube-ui'

Vue.config.productionTip = false

new Vue({
    router,
    store,
    Cube,
    render: h => h(App)
}).$mount('#app')