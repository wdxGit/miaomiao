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

import scroller from './components/Scroller'
Vue.component('scroller', scroller)

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import './assets/my-mint-ui.scss'
Vue.use(MintUI)

import loading from './components/loading.vue'
Vue.component('loading', loading)

import Cube from 'cube-ui'

Vue.config.productionTip = false

new Vue({
    router,
    store,
    Cube,
    render: h => h(App)
}).$mount('#app')