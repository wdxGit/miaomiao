import Vue from 'vue'
import Router from 'vue-router'
const movie = () =>
    import ('@/views/Movie')
const cinema = () =>
    import ('@/views/Cinema')
const mine = () =>
    import ('@/views/Mine')

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
        path: '/',
        redirect: '/movie'
    }, {
        path: '/movie',
        component: movie,
        children: [{
            path: '/',
            redirect: '/movie/NowPlanying'
        }, {
            path: '/movie/City',
            name: 'City',
            component: () =>
                import ('@/components/City')
        }, {
            path: '/movie/ComingSoon',
            name: 'ComingSoon',
            component: () =>
                import ('@/components/ComingSoon')
        }, {
            path: '/movie/NowPlanying',
            name: 'NowPlanying',
            component: () =>
                import ('@/components/NowPlanying')
        }, {
            path: '/movie/Search',
            name: 'Search',
            component: () =>
                import ('@/components/Search')
        }]
    }, {
        path: '/cinema',
        name: 'cinema',
        component: cinema
    }, {
        path: '/mine',
        name: 'mine',
        component: mine
    }]
})