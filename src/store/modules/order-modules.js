import service from '@/store/services/order-services'

const state = {
    list: {},
    // 付款方式
    payment_method: {},
    // 订单内容
    submitorder: {},
    // 付款后1
    selectpayment: {},
    // 付款后2
    order: {},
    // 除去运费的商品
    order_cart:{},
};
const getters = {
    list: state => state.list,
    payment_method: state => state.payment_method,
    submitorder: state => state.submitorder.o,
    selectpayment: state => state.selectpayment,
    order: state => state.order,
    order_cart: state => state.order_cart,
};
const mutations = {
    SET_LIST: (state, list) => {
        state.list = list;
    },
    set_payment_method: (state, payment_method) => {
        state.payment_method = payment_method;
    },
    set_submitorder: (state, submitorder) => {
        state.submitorder = submitorder;
    },
    set_selectpayment: (state, selectpayment) => {
        state.selectpayment = selectpayment;
    },
    set_order: (state, order) => {
        state.order = order;
    },
    set_order_cart:(state, order_cart) => {
        state.order_cart = order_cart
    }
};
const actions = {
    list({
        commit
    }, params) {
        return service.payment_method().then((response) => {
            console.log(response);
        })
    },
    // 获取付款方式
    get({
        commit
    }) {
        return service.payment_method().then((response) => {
            // console.log(response);
            if (response.result) {
                commit('set_payment_method', response.data)
            }
        })
    },
    // 提交订单
    post({
        commit
    }, data) {
        return service.submitorder(data).then((response) => {
            commit('set_submitorder', response);
        });
    },
    // 提交订单后先清除购物车  发票资料选择
    selectinvoice({
        commit
    }, order_number, data) {
        return service.invoice(order_number, data).then((response) => {
            return
        });
    },
    // 提供订单号获取付款方式

    // 付款
    payment({
        commit
    }, data) {
        return service.payment(data).then((response) => {
            return
        });
    },
    // 付款后1
    payment_one({
        commit
    }, data) {
        return service.selectpayment(data).then((response) => {
            if (response) {

                commit('set_selectpayment', response)
            } else {

                return response
            }
        }).catch((error) => {
            // console.log(2);
        });
    },
    // 付款后2
    payment_two({
        commit
    }, data) {
        // console.log(1);
        return service.order(data).then((response) => {
            if (response.result) {
                commit('set_order', response.data);
                let orderlist=[];
                response.data[0].item.forEach(element => {
                    if(element.type!="SYS"){
                        orderlist.push(element);
                    }
                });
                commit('set_order_cart', orderlist);
            }
        });
    }

};
const order = {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};
export default order;