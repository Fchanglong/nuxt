import service from '@/store/services/commodity-services'

const state = {
    // 所有商品
    all_list: {},
    // 加购商品
    add_purchase:{},
    // 商品列表
    category_list: {},
    // 指定商品内容
    details: {},
    // 搜索商品列表
    search_list:{},
    //获取当前点击的商品分类
    click_categories:{},
};
const getters = {
    category_list: state => state.category_list,
    details: state => state.details,
    search_list: state => state.search_list,
    all_list: state => state.all_list,
    click_categories: state => state.click_categories,
};
const mutations = {
    set_category_list: (state, category_list) => {
        state.category_list = category_list;
    },
    set_details: (state, details) => {
        state.details = details;
    },
    set_search_list: (state, search_list) => {
        state.search_list = search_list;
    },
    set_all_list: (state, all_list) => {
        state.all_list = all_list;
    },
    set_add_purchase: (state, add_purchase) => {
        state.add_purchase = add_purchase;
    },
    set_click_categories: (state, click_categories) => {
        state.click_categories = click_categories;
    },
};
const actions = {
    // list({
    //     commit
    // }, params) {
    //     commit('SET_LIST', params);
    // },
    // 获取全部商品
    getall({commit}){
        return service.all().then((response)=>{
            if(response.result){
                commit('set_all_list', response.data);
            }
            // return response
        })
    },
    // 获取加购类商品
    getadd_purchase({commit}){
        return service.add_purchase().then((response)=>{
            // console.log(response);
            if(response.result){
                commit('set_add_purchase', response.data);
            }
        });
    },
    // 获取该分类的商品
    getclassification({commit,state},id){
        // console.log(id);
        return service.classification(id).then((response)=>{
            if(response.result){
                commit('set_category_list', response.data);
            }
            // console.log(response);
            return response
        });
    },
    // 获取指定商品内容
    getdesignated_product({commit},id){
        return service.designated_product(id).then((response)=>{
            if(response.result){
                commit('set_details', response.data);
            }
            // console.log(response);
            return response
        })
    },
    // 获取搜索的商品
    getsearch({commit},name){
        return service.search(name).then((response)=>{
            console.log(response.data.length);
            if (response) {

                commit('set_search_list', response.data)
            } else {

                return response
            }
        });
    }
};
const commodity = {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};
export default commodity;