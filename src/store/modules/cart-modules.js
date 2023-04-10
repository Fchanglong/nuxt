import service from '@/store/services/cart-services'

const state = {
    cart_list_item: {},
    number:0,
    freight:0,
    cart_list:{},
};
const getters = {
    cart_list: state => state.cart_list,
    number: state => state.number,
    freight: state => state.freight,
    cart_list_item: state => state.cart_list_item,
};
const mutations = {
    SET_CART_LIST_ITEM: (state, cart_list_item) => {
        state.cart_list_item = cart_list_item;
    },
    SET_NUMBER: (state, number) => {
        state.number = number;
    },
    SET_FREIGHT: (state, freight) => {
        state.freight = freight;
    },
    SET_CART_LIST: (state, cart_list) => {
        state.cart_list = cart_list;
    },
};
const actions = {
    list({
        commit
    }, params) {
        commit('SET_LIST', params);
    },
    get({commit}){
        return service.get().then((response) => {
            // console.log(response);  
            let list=[];
            if(response.length==0){
                // console.log(1);
                commit('SET_NUMBER', 0);
                commit('SET_CART_LIST', []);
                commit('SET_CART_LIST_ITEM', []);
            }else{
                commit('SET_NUMBER', response.item.length-1);
                commit('SET_CART_LIST', response);
                response.item.forEach(element => {
                    if(element.form_name==='運費'){
                        // console.log(element);
                        commit('SET_FREIGHT', element)
                        return
                    }
                    list.push(element);
                });
                commit('SET_CART_LIST_ITEM', list);
            }
        });
    },
    add({dispatch},data){
        return service.addcart(data).then((response) => {
            return dispatch('get')
        });
    },
    del({dispatch},data){
        return service.delcart(data).then((response) => {
            return dispatch('get')
        });
    },
    update({dispatch},data){
        // console.log(data);
        return service.update(data).then((response) => {
            return dispatch('get')
        });
    },
};
const cart = {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};
export default cart;