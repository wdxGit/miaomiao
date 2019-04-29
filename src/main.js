import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import router from './routers'
import store from './stores'

import axios from 'axios'
Vue.prototype.axios = axios;

import Cube from 'cube-ui'

Vue.config.productionTip = false

new Vue({
    router,
    store,
    Cube,
    render: h => h(App)
}).$mount('#app')