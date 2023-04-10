import service from '@/store/services/header-services'

const state = {
    list: {},
    item: {},
    meta: {},
    cate: {},
    newes: {},
    discount: {},
    website:{},
    admin:{},
};

const mutations = {
    SET_LIST: (state, list) => {
        state.list = list;
    },
    SET_RESOURCE: (state, item) => {
        state.item = item;
    },
    SET_META: (state, meta) => {
        state.meta = meta;
    },
    SET_CATE: (state, cate) => {
        state.cate = cate;
    },
    SET_NEWES: (state, newes) => {
        state.newes = newes;
    },
    SET_DISCOUNT: (state, discount) => {
        state.discount = discount;
    },
    SET_WEBSITE: (state, website) => {
        state.website = website;
    },
    SET_ADMIN:(state,admin)=>{
        state.admin=admin
    }

};

const actions = {
    list({
        commit
    }, params) {
        // commit('SET_CATE', params.CATE);
        // commit('SET_NEWES', params.NEW);
        // commit('SET_DISCOUNT', params.DISCOUNT);
        console.log('listheader');
    },
    // 获取oic
    get({
        commit
    }) {
        return service.getcartList().then((response) => {
            console.log("modules");
            if (response.result) {
                // commit('SET_CATE', response.data.CATE);
                // commit('SET_NEWES', response.data.NEW);
                // commit('SET_DISCOUNT', response.data.DISCOUNT);
            }
            // console.log(response);
            // console.log(params);
        });
    },
    // 获取图标fb 和 line等
    getwebsite({commit}){
        return service.getwebsite().then((response) => {
            
            if (response.result) {
                commit('SET_WEBSITE', response.data)
            }
            // console.log(response);
        })
    },
    getadmin({
        commit
    }) {
        return service.getadmin().then((response) => {
        //   console.log(response);
          commit('SET_ADMIN', response.front_page)
        })
    }
}


const getters = {
    list: state => state.list,
    item: state => state.item,
    cate: state => state.cate,
    newes: state => state.newes,
    discount: state => state.discount,
    website: state => state.website,
    admin: state => state.admin,
};

const header = {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};

export default header;