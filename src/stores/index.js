import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        storeCityList: [],
        hotCityList: [],
        nm: '北京',
        id: 10,
        messageShow: true
    },
    mutations: {
        SET_CITY_LIST(state, cityList) {
            state.storeCityList = cityList;
        },
        SET_HOT_CITY_LIST(state, hotCityList) {
            state.hotCityList = hotCityList;
        },
        SET_NM(state, nm) {
            state.nm = nm;
        },
        SET_ID(state, id) {
            state.id = id;
        },
        TOGGLE_SHOW(state, messageShow) {
            state.messageShow = messageShow;
        }
    },
    actions: {
        async getCityList(context, cityList) {
            await context.commit('SET_CITY_LIST', cityList);
        },
        async getHotCityList(context, hotCityList) {
            await context.commit('SET_HOT_CITY_LIST', hotCityList);
        },
        async getNm(context, nm) {
            await context.commit('SET_NM', nm);
        },
        async getId(context, id) {
            await context.commit('SET_ID', id);
        },
        async togggleShow(context, messageShow) {
            await context.commit('TOGGLE_SHOW', messageShow)
        }
    }
})