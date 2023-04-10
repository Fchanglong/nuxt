import Vue from 'vue'
import Vuex from 'vuex'
import header from "./modules/header-modules"
// import category_list from "./modules/category_list-modules"
// import details from "./modules/details-modules"
import user from "./modules/user-modules"
import cart from "./modules/cart-modules"
import commodity from "./modules/commodity-modules"
import order from "./modules/order-modules"

// import createPersistedState from "vuex-persistedstate"
Vue.use(Vuex)

// export default new Vuex.Store({
//   state: {
//   },
//   getters: {
//   },
//   mutations: {
//   },
//   actions: {
//   },
//   modules: {
//     header,
//     user,
//     cart,
//     commodity,
//     order
//   },
// //   plugins: [createPersistedState({
// //     storage: window.sessionStorage
// // })]
// })


export default function createStore() {
  return new Vuex.Store({
    state: {
      sdfjh: 108
    },
    getters: {},
    mutations: {
      addsdfjh(state) {
        state.sdfjh += 1;
      },
      init(state, sdfjh) {
        state.sdfjh = sdfjh;
      },
    },
    actions: {
      getCount({ commit }) {
        return new Promise(resolve => {
            setTimeout(() => {
                commit("init", Math.random() * 100);
                resolve();
            }, 1000);
        });
    },
    },
    modules: {
      header,
      user,
      cart,
      commodity,
      order
    },
    //   plugins: [createPersistedState({
    //     storage: window.sessionStorage
    // })]
  })
}