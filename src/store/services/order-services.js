import request from '@/util/request.js';


// 提交订单 获得订单编号
function submitorder(data) {
    return request.post(`/api0/cus/api/create-order`, {
        address: data.address,
        email: data.email,
        name: data.name,
        phone: data.phone
    }).then(response => {
        return response
    })

}
// 提交订单后的联动 
function invoice(data) {
    return request.post(`/api0/cus/ec-invoice/${data.order_number}`, {
        company: data.company,
        email: data.email,
        identifier: data.identifier,
        type: data.type,
    }).then(response => {
        return response
    })
}

// 获取付款方式
function payment_method() {
    return request.get(`/api1.0/payment`).then(response => {
        return response
    })
}


// 付款
function payment(data) {
    console.log(data);
    return request.post(`/api0/cus/api/payment/pay-mode`, {
        order_num: data.order_num,
        type: data.type,
    }).then(response => {
        return response
    });
}
// 付款联动1   查询订单 顺序2
function selectpayment(order_num) {
    let href = window.location.href
    return request.get(`/api1.0/cus/api/select-payment?order_num=${order_num}&redirect_f2e_href=${href}`).then(response => {
        // console.log(1);
        return response
    }).catch(error => {
        return false;
    });
}

// 联动2    查询订单 顺序1
function order(order_num) {
    return request.get(`/api1.0/order?order_num=${order_num}`).then(response => {
        return response
    })
}
export default {
    submitorder,
    invoice,
    payment_method,
    payment,
    selectpayment,
    order
}