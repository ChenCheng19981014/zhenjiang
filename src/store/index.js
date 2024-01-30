import store from "vuex"
import Vue from "vue"

Vue.use(store)


export default new store.Store({
    state: {
        fitLayoutRatio: 0,
        onResizeCallBack: {},
    },
    mutations: {
        setFitLayoutRatio(store, ratio) {
            store.fitLayoutRatio = ratio;
            Object.values(store.onResizeCallBack).map((fn) => fn(ratio));
        },
    },
    actions: {
    }
})