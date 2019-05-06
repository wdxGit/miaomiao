import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        storeCityList: [],
        hotCityList: [],
        nm: '北京',
        id: 10
    },
    mutations: {
        SET_CITY_LIST(state, cityList) {
            state.storeCityList = cityList;
        },
        SET_HOT_CITY_LIST(state, hotCityList) {
            state.hotCityList = hotCityList
        },
        SET_NM(state, nm) {
            state.nm = nm
        },
        SET_ID(state, id) {
            state.id = id
        }
    },
    actions: {
        getCityList(context, cityList) {
            context.commit('SET_CITY_LIST', cityList)
        },
        getHotCityList(context, hotCityList) {
            context.commit('SET_HOT_CITY_LIST', hotCityList)
        },
        getNm(context, nm) {
            context.commit('SET_NM', nm)
        },
        getId(context, id) {
            context.commit('SET_ID', id)
        }
    }
})